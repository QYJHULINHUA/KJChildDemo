


'use strict'

import * as TYPES from '../action/types'

export function userInfo_reducer(state=[],action){
  switch (action.type) {
    case TYPES.UPDATE_ACCOUTN:
      return{
        ...state,
        user_account:action.account,
      }


    default:
      return state;

  }

}
