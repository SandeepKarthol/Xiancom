/**
@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
@author    : Shiv Charan Panjeta < shiv@toxsl.com >

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

import { createSlice } from '@reduxjs/toolkit';

const UserDetailSlice = createSlice({
  name: 'UserDetails',
  initialState: {userCredential: 1},
  reducers: {
    setuserCredential: (state, action) => {
      state.userCredential = action.payload;
    },
  },
});
export const {setuserCredential} = UserDetailSlice.actions;
export default UserDetailSlice.reducer;
