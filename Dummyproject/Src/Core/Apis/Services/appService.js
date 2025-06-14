/**
@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
@author    : Shiv Charan Panjeta < shiv@toxsl.com >

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

import apiBase from '../Globals/Config';
import {http, httpMultipart} from '../Utils/Http';

// Authentication API's

export const getphotoslatest = async body => {
  return await httpMultipart.post('/xttest/getdata.php', body);
};

export const sign_upapi = async body => {
  return await httpMultipart.post(`/xttest/savedata.php`, body);
};

export const checkuserDetail = async () => {
  return await http.get(`/api/user/check`);
};
