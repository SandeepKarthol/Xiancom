import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { getphotoslatest } from '../Core/Apis/Services/appService';
import LoaderComp from '../Core/Components/LoaderComp';
import { SuccessMsg } from '../Core/Value/AppConst';
import FontFamily from '../Core/Value/FontFamily';
// import Images from '../../Core/Value/Assets/Images';

const Signin = () => {
  const navigation = useNavigation();
  const [toggle, settoggle] = useState(0);
  const [Detail, setDetail] = useState([]);
  const [loaderShow, setLoaderShow] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [pagenumber, setpagenumber] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getImages(1, false);
  }, [navigation]);

  const getImages = async (page, arrstatus) => {
    let body = {
      user_id: 108,
      offset: page,
      type: 'popular',
    };
console.log(body)
    setpagenumber(page);
    try {
      setLoaderShow(true);
      let resp = await getphotoslatest(body);
      setLoaderShow(false);
      if (resp?.data?.status == SuccessMsg) {
        if (arrstatus == false) {
          setDetail(resp?.data?.images);
        } else if (arrstatus == true) {
          setDetail(prev => [...prev, ...resp?.data?.images]);
        } else {
          setDetail([]);
        }

        // setMeta(resp?.data?.meta_data);
      }
    } catch (error) {
      setLoaderShow(false);
      console.log('error', error);
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth - 32; // fixed width with 16 padding on each side

  const DynamicHeightImage = ({uri}) => {
    const [height, setHeight] = useState(heightPercentageToDP(10)); // default height before loading

    useEffect(() => {
      Image.getSize(
        uri,
        (width, height) => {
          const scaledHeight = (height / width) * imageWidth;
          setHeight(scaledHeight);
        },
        error => {
          console.error('Failed to get image size:', error);
        },
      );
    }, [uri]);

    return (
      <Image
        source={{uri}}
        style={[styles.image, {width: imageWidth, height}]}
        resizeMode="cover"
      />
    );
  };

  const loadMoreData = () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    getImages(pagenumber + 1, true);
    setIsLoadingMore(false);
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <Text
          onPress={() => {
            loadMoreData();
          }}>
          Click here to load more...
        </Text>
      </View>
    );
  };

  const renderItem = useCallback(
    ({item}) => (
      <Pressable
        onPress={() => {
          navigation.navigate('Signup', {
            image: item?.xt_image,
          });
        }}
        style={styles.imageWrapper}>
        <DynamicHeightImage uri={item?.xt_image} />
      </Pressable>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.mainView}>
      <FlatList
        data={Detail}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        // onEndReachedThreshold={0.5} // triggers when 50% near bottom
        ListFooterComponent={renderFooter}
        removeClippedSubviews={true}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={7}
      />
      {loaderShow && <LoaderComp />}
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  toggleOuterView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: wp(25),
  },
  toggleInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19214f',
    width: wp(54),
    height: wp(14),
    paddingHorizontal: wp(2),
    alignContent: 'center',
  },
  toggleView: {
    backgroundColor: '#19214f',
    width: wp(25),
    height: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    color: 'white',
    fontSize: wp(4.7),
    fontFamily: FontFamily.MontserratBold,
  },
  headerText: {
    textAlign: 'center',
    color: '#19214f',
    fontSize: wp(6),
    fontFamily: FontFamily.MontserratBold,
  },

  textInputOuterView: {
    marginHorizontal: wp(2),
    marginVertical: wp(10),
  },
  textInputView: {
    borderBottomWidth: wp(0.1),
  },

  textInputStyle: {
    top: wp(1),
    left: wp(1),
    fontSize: wp(4),
  },

  errrorText: {
    color: 'red',
    fontSize: wp(3.5),
  },
  buttonStyle: {
    marginTop: wp(5),
    marginHorizontal: wp(2),
    backgroundColor: 'blue',
    height: wp(15),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: wp(4),
    fontFamily: FontFamily.MontserratBold,
  },
  buttonbelowText: {
    color: 'black',
    textAlign: 'center',
    fontSize: wp(4),
    fontFamily: FontFamily.MontserratSemiBold,
    marginTop: wp(3),
  },
  eyeIcon: {
    height: wp(4),
    width: wp(6),
    top: wp(5),
  },
  remberOuterView: {
    marginTop: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(0.5),
  },
  boxIcon: {
    height: wp(4),
    width: wp(4),
  },
  text: {
    fontSize: wp(3.5),
    bottom: wp(0.5),
    left: wp(1),
  },

  container: {
    padding: 16,
  },
  imageWrapper: {
    marginBottom: 16,
  },
  image: {
    borderRadius: 8,
    backgroundColor: '#ccc', // placeholder color before image loads
  },

  footer: {
    padding: 20,
    alignItems: 'center',
  },
});
