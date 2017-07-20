
'use strict'

import * as TYPES from './types';

export function userInfoAction(user_type,user_param){
  switch (user_type) {
    case 'user_account':
      return{
        type:TYPES.UPDATE_ACCOUTN,
        account:user_param,
      }
      break;

    case 'user_password':
      return{
        type:TYPES.UPDATE_PASSWORD,
        password:user_param,
      }
      break;
    case 'user_telphone':
      return{
        type:TYPES.UPDATE_TELPHONE,
        telphone:user_param,
      }
      break;
    case 'user_email':
      return{
        type:TYPES.UPDATE_EMAIL,
        email:user_param,
      }
      break;
    case 'user_avatar':
      return{
        type:TYPES.UPDATE_AVATAR,
        avatar:user_param,
      }
      break;
    case 'user_nickname':
      return{
        type:TYPES.UPDATE_NICKNAME,
        nickname:user_param,
      }
      break;
    case 'user_sex':
      return{
        type:TYPES.UPDATE_SEX,
        sex:user_param,
      }
      break;
    case 'user_id':
      return{
        type:TYPES.UPDATE_ID,
        userId:user_param,
      }
      break;

    case 'user_score':
      return{
        type:TYPES.UPDATE_SCORE,
        score:user_param,
      }
      break;


    default:

  }
}
