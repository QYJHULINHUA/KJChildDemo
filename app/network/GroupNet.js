
import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';

let CryptoJS = require("crypto-js");

function getMyGroup(bodydata,callback) {

  let param = 'param';
  bodydata['userId']? param=param+bodydata['userId']:null;
  //  密码md5 加密
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;
  console.log('请求我的圈子',bodydata);

  let netapi = 'myGroups',reqError = {error:{code:'-1',msg:'请求我的圈子失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function getTuiJianGroup(bodydata,callback) {
  let param = 'param';
  //  密码md5 加密
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;
  console.log('请求推荐圈子',bodydata);

  let netapi = 'tuijianGroups',reqError = {error:{code:'-1',msg:'请求推荐圈子失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

export {
  getTuiJianGroup,
  getMyGroup,

}
