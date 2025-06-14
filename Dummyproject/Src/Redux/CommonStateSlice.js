/**
@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
@author    : Shiv Charan Panjeta < shiv@toxsl.com >

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Darktheme: '',
  bottomfocus: '',
  Geolocation: '',
  ProfileDetails: '',
  latitude: '',
  longitude: '',
  userdeatil: '',
  ImageDetails: '',
  filterDetails: '',
  phoneNumber: '',
  CountryCode: '+91',
  PasswordPhoneNumber: '',
  checkstate: false,
  countryflag: '',
  ImageViewer: 'false',

  address: '',
  CHECK: 0,
  bottomfocus: '',
  Flagshowstatic: '🇮🇳',
  multiSliderValue: '',
  sliderOneValue: '',

  dataBlur: false,
  LocationSearchfullAddress: '',
  CountryCodes: '',
  PostalCode: '',
  StateProvinceCode: '',
  City: '',
  AddressLine: '',
  streetLines: '',
  descriptions: '',
  countryName: '',
  CountryStateCity: '',
  OtherStateCity: '',
  GeolocationOther: '',
  AllFilterValues: {},
  FilterModalOpenClose: false,
  IMAGE_URL: '',
  VideoDetail: {},
  VideoPopupmodalopen: false,
  Countryisoe: '',
  AllSeatsValues: {},
  searchdata: '',
  CardList: [],
  ScreenType: 0,
  Address_Json: [],
  Cart_Json: [],
  Guset_Type_List: '',
  SearchVehicledata: {},

  PickUpLocation: {},
  DropOffLocation: {},

  PickUpJson: {},
  DropOffJson: {},
  PickUpLocationState: false,
  DropOffLocationState: false,
  SelectLoation: '',
  PaymentTypeMode: '',
  TypeMode: '',
  Customerlatlng: {},
  addressTypeId: '',
  EditPlace: '',
  AddressTypeID: false,
  AddressDetail: {},
  toggleMap: true,
};

export const CommonStateSlice = createSlice({
  name: 'CommonState',
  initialState,
  reducers: {
    //  Reducer Functions
    setDarkTheme: (state, action) => {
      state.Darktheme = action.payload;
    },
    setGeolocation: (state, action) => {
      state.Geolocation = action.payload;
    },
    setProfileDetail: (state, action) => {
      state.ProfileDetails = action.payload;
    },
    setlatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setlongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setuserdeatil: (state, action) => {
      state.userdeatil = action.payload;
    },
    setImageDetails: (state, action) => {
      state.ImageDetails = action.payload;
    },
    setFilterDetails: (state, action) => {
      state.filterDetails = action.payload;
    },
    setphoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setCountryCode: (state, action) => {
      state.CountryCode = action.payload;
    },
    setPasswordPhoneNumber: (state, action) => {
      state.PasswordPhoneNumber = action.payload;
    },
    setcheckstate: (state, action) => {
      state.checkstate = action.payload;
    },
    setcountryflagdata: (state, action) => {
      state.countryflag = action.payload;
    },

    //  Image Opener Functionality
    setrefreshImageViwer: (state, action) => {
      state.ImageViewer = action.payload;
    },

    setaddress: (state, action) => {
      state.address = action.payload;
    },
    setCHECK: (state, action) => {
      state.CHECK = action.payload;
    },

    setBottomFocus: (state, action) => {
      state.bottomfocus = action.payload;
    },
    setcountryFlagshowstatic: (state, action) => {
      state.Flagshowstatic = action.payload;
    },
    setMultiSliderValueAction: (state, action) => {
      state.multiSliderValue = action.payload;
    },
    setSliderOneValueAction: (state, action) => {
      state.sliderOneValue = action.payload;
    },

    setdataBlur: (state, action) => {
      state.dataBlur = action.payload;
    },
    setLocationSearchfullAddress: (state, action) => {
      state.LocationSearchfullAddress = action.payload;
    },
    setCountryCodes: (state, action) => {
      state.CountryCodes = action.payload;
    },
    setPostalCode: (state, action) => {
      state.PostalCode = action.payload;
    },
    setStateProvinceCode: (state, action) => {
      state.StateProvinceCode = action.payload;
    },
    setCity: (state, action) => {
      state.City = action.payload;
    },
    setAddressLine: (state, action) => {
      state.AddressLine = action.payload;
    },
    setstreetLines: (state, action) => {
      state.streetLines = action.payload;
    },
    setlatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setlongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setdescriptions: (state, action) => {
      state.descriptions = action.payload;
    },

    setcountryName: (state, action) => {
      state.countryName = action.payload;
    },

    setCountryStateCity: (state, action) => {
      state.CountryStateCity = action.payload;
    },

    setOtherStateCity: (state, action) => {
      state.OtherStateCity = action.payload;
    },

    setGeolocationOther: (state, action) => {
      state.GeolocationOther = action.payload;
    },

    setAllFilterValues: (state, action) => {
      state.AllFilterValues = action.payload;
    },
    setFilterModalOpenClose: (state, action) => {
      state.FilterModalOpenClose = action.payload;
    },
    setIMAGE_URL: (state, action) => {
      state.IMAGE_URL = action.payload;
    },

    setVideoDetail: (state, action) => {
      state.VideoDetail = action.payload;
    },

    setVideoPopupmodalopen: (state, action) => {
      state.VideoPopupmodalopen = action.payload;
    },

    setCountryisocode: (state, action) => {
      state.Countryisoe = action.payload;
    },

    setAllSeatsValues: (state, action) => {
      state.AllSeatsValues = action.payload;
    },
    setAllsearchdata: (state, action) => {
      state.searchdata = action.payload;
    },
    setCardList: (state, action) => {
      state.CardList = action.payload;
    },

    // Screen Type For event deat navigation
    setScreenType: (state, action) => {
      state.ScreenType = action.payload;
    },
    setAddress_Json: (state, action) => {
      state.Address_Json = action.payload;
    },
    setCart_Json: (state, action) => {
      state.Cart_Json = action.payload;
    },

    setGuset_Type_List: (state, action) => {
      state.Guset_Type_List = action.payload;
    },

    setSearchVehicledata: (state, action) => {
      state.SearchVehicledata = action.payload;
    },

    setPickUpLocation: (state, action) => {
      state.PickUpLocation = action.payload;
    },

    setDropOffLocation: (state, action) => {
      state.DropOffLocation = action.payload;
    },

    setSelectLoation: (state, action) => {
      state.SelectLoation = action.payload;
    },

    setPaymentTypeMode: (state, action) => {
      state.PaymentTypeMode = action.payload;
    },

    setTypeMode: (state, action) => {
      state.TypeMode = action.payload;
    },

    setPickUpJson: (state, action) => {
      state.PickUpJson = action.payload;
    },

    setDropOffJson: (state, action) => {
      state.DropOffJson = action.payload;
    },

    setPickUpLocationState: (state, action) => {
      state.PickUpLocationState = action.payload;
    },
    setDropOffLocationState: (state, action) => {
      state.DropOffLocationState = action.payload;
    },

    setCustomerlatlng: (state, action) => {
      state.Customerlatlng = action.payload;
    },

    setAddressTypeId: (state, action) => {
      state.addressTypeId = action.payload;
    },

    setEditPlace: (state, action) => {
      state.EditPlace = action.payload;
    },

    setAddressTypeID: (state, action) => {
      state.AddressTypeID = action.payload;
    },

    setAddressDetail: (state, action) => {
      state.AddressDetail = action.payload;
    },

    settoggleMap: (state, action) => {
      state.toggleMap = action.payload;
    },

    // EditPlace
  },
});

// Action creators are generated for each case reducer function
export const {
  setCountryisocode,
  setDarkTheme,
  setGeolocation,
  setProfileDetail,
  setlatitude,
  setlongitude,
  setuserdeatil,
  setImageDetails,
  setFilterDetails,
  setphoneNumber,
  setCountryCode,
  setPasswordPhoneNumber,
  setcheckstate,
  setcountryflagdata,
  setrefreshImageViwer,
  setaddress,
  setCHECK,
  setBottomFocus,
  setcountryFlagshowstatic,
  setSliderOneValueAction,
  setMultiSliderValueAction,

  setdataBlur,
  setLocationSearchfullAddress,
  setCountryCodes,
  setPostalCode,
  setStateProvinceCode,
  setCity,
  setAddressLine,
  setstreetLines,
  setdescriptions,
  setcountryName,

  setCountryStateCity,
  setOtherStateCity,
  setGeolocationOther,
  setAllFilterValues,
  setFilterModalOpenClose,
  setIMAGE_URL,
  setVideoDetail,
  setVideoPopupmodalopen,
  setAllSeatsValues,
  setAllsearchdata,
  setCardList,
  setScreenType,
  setAddress_Json,
  setCart_Json,
  setGuset_Type_List,
  setSearchVehicledata,

  setPickUpLocation,
  setDropOffLocation,
  setSelectLoation,
  setPaymentTypeMode,
  setTypeMode,

  setPickUpJson,
  setDropOffJson,
  setPickUpLocationState,
  setDropOffLocationState,
  setCustomerlatlng,
  setAddressTypeId,
  setEditPlace,
  setAddressTypeID,
  setAddressDetail,
  settoggleMap,
} = CommonStateSlice.actions;

export default CommonStateSlice.reducer;
