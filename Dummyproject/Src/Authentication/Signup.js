import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { sign_upapi } from '../Core/Apis/Services/appService';
import LoaderComp from '../Core/Components/LoaderComp';
import NotificationComp from '../Core/Components/NotificationComp';
import Images from '../Core/Value/Assets/Images';
import Colors from '../Core/Value/Colors';
import FontFamily from '../Core/Value/FontFamily';
import FontSize from '../Core/Value/FontSize';

const Signup = ({ route }) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+33');
  const [loaderShow, setLoaderShow] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/; // allows letters and spaces only

    // First Name validation
    if (!firstName || firstName.length < 2) {
      newErrors.firstName = 'First Name must be at least 2 characters';
    } else if (!nameRegex.test(firstName)) {
      newErrors.firstName = 'First Name must contain only letters';
    }

    // Last Name validation
    if (!lastName || lastName.length < 2) {
      newErrors.lastName = 'Last Name must be at least 2 characters';
    } else if (!nameRegex.test(lastName)) {
      newErrors.lastName = 'Last Name must contain only letters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Mobile Number validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileNumber || !mobileRegex.test(mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const time = moment().unix();
  const uri = route?.params?.image;
  const getFileType = uri => {
    const ext = uri?.split('.').pop(); // e.g. "jpg", "png"
    return `image/${ext}`;
  };

  const sigin_Up_Api = async () => {
    try {
      if (!validateForm()) return;

      let file = {
        uri: uri,
        type: getFileType(uri),
        name: time + 'profile.png',
      };
      const body = {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone: mobileNumber,
        user_image: file,
      };
      const formData = new FormData();
      Object.keys(body).forEach((data, key) => {
        formData.append(data, body[data]);
      });
      setLoaderShow(true); // show loader
      const response = await sign_upapi(formData);
      setLoaderShow(false); // hide loader

      if (response?.data?.status) {
        NotificationComp({
          type: 'success',
          message: 'Signup Successful',
          description:
            response?.data?.message || 'User registered successfully',
        });
        navigation.goBack();
      } else {
        NotificationComp({
          type: 'danger',
          message: 'Signup Failed',
          description:
            response?.data?.message || 'Signup failed. Please try again.',
        });
      }
    } catch (error) {
      setLoaderShow(false);
      NotificationComp({
        type: 'danger',
        message: 'Signup Error',
        description: error?.message || 'Something went wrong',
      });
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.container}>
          {/* Back Arrow */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.backButton}>
              <Image
                source={Images.Backicon}
                style={{
                  height: wp(5),
                  width: wp(5),
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: wp(5),
                fontFamily: FontFamily.poppinsMedium,
              }}>
              {' '}
              Detail screen
            </Text>
            <View />
          </View>

          <View style={{ alignItems: 'center', marginVertical: wp(4) }}>
            {/* <DynamicHeightImage uri={uri} /> */}
            <Image source={{ uri: uri }}

              resizeMode='cover'
              style={{ height: wp(100), width: wp(92) }}
            />
          </View>

          {/* Input Fields */}
          <View style={styles.textview}>
            <Text style={styles.textstyle}> First Name</Text>
            <TextInput
              style={[styles.input, errors.firstName && styles.inputError]}
              placeholder=""
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}

          <View style={styles.textview}>
            <Text style={styles.textstyle}> Last Name</Text>
            <TextInput
              style={[styles.input, errors.lastName && styles.inputError]}
              placeholder=""
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}

          <View style={styles.textview}>
            <Text style={styles.textstyle}> Email</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <View style={styles.textview}>
            <Text style={styles.textstyle}> Mobile Number</Text>
            <TextInput
              style={[styles.input, errors.mobileNumber && styles.inputError]}
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
            />
          </View>

          {errors.mobileNumber && (
            <Text style={styles.errorText}>{errors.mobileNumber}</Text>
          )}

          <TouchableOpacity
            onPress={() => {
              sigin_Up_Api();
            }}
            style={{
              alignSelf: 'flex-end',
              padding: wp(1),
              borderColor: 'black',
              borderWidth: wp(0.5),
              marginTop: wp(2),
              paddingHorizontal: wp(6),
              paddingVertical: Platform.OS === 'ios' && wp(2),
              marginHorizontal: Platform.OS === 'ios' && wp(4)
            }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </SafeAreaView>
        {loaderShow && <LoaderComp />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
    backgroundColor: '#fff',
  },
  textview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Platform.OS === 'ios' && wp(4)
  },
  backButton: {
    marginBottom: 10,
    left: Platform.OS == 'ios' && wp(2.5),
    right: Platform.OS == 'android' && wp(1.5)

  },

  input: {
    borderColor: Colors.black,
    backgroundColor: Colors.whiteColor,
    marginVertical: wp(2),
    paddingHorizontal: wp(4),
    borderWidth: wp(0.6),
    width: wp(55),
    paddingVertical: Platform.OS === 'ios' ? wp(3) : wp(2.5)
  },
  inputError: {
    borderColor: '#ff0000',
  },

  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginBottom: 10,
    marginHorizontal: Platform.OS === 'ios' && wp(6)
  },
  nextButton: {
    backgroundColor: '#00C4B4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textstyle: {
    color: 'black',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});

export default Signup;
