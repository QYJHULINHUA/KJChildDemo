

'use strict'

import * as TYPES from '../action/types'

export function userInfo_reducer(state=initUserInfo,action){
  switch (action.type) {
    case TYPES.UPDATE_ACCOUTN:
      return{
        ...state,
        user_account:action.account,
      }
    case TYPES.UPDATE_PASSWORD:
      return{
        ...state,
        user_password:action.password,
      }
    case TYPES.UPDATE_TELPHONE:
      return{
        ...state,
        user_telphone:action.telphone,
      }
    case TYPES.UPDATE_EMAIL:
      return{
        ...state,
        user_email:action.email,
      }
    case TYPES.UPDATE_AVATAR:
      return{
        ...state,
        user_avatar:action.avatar,
      }
    case TYPES.UPDATE_NICKNAME:
      return{
        ...state,
        user_nickname:action.nickname,
      }
    case TYPES.UPDATE_SEX:
      return{
        ...state,
        user_sex:action.sex,
      }

    case TYPES.UPDATE_ID:
      return{
        ...state,
        user_id:action.userId,
      }

    case TYPES.UPDATE_SCORE:
      return{
        ...state,
        user_score:action.score,
      }

    default:
      return state;

  }

}

const initUserInfo = {
  user_account:null,
  user_telphone:null,
  user_email:null,
  user_password:null,
  user_avatar:null,
  user_nickname:null,
  user_id:null,
  user_score:null,
  user_sex:'男',
}
