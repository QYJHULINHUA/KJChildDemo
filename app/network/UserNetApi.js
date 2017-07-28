
import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';
let CryptoJS = require("crypto-js");

function getMobileReqCode(bodydata,callback) {

  let param = 'param';
  bodydata['mobile']? param=param+bodydata['mobile']:null;
  //  密码md5 加密
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;
  console.log('请求验证码',bodydata);

  let netapi = 'getMobileCode',reqError = {error:{code:'-1',msg:'获取验证码失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}


function registAccount(bodydata,callback) {

  let param = 'param';
  bodydata['username']? param=param+bodydata['username']:null;
  bodydata['password']? param=param+bodydata['password']:null;
  bodydata['comitpassword']? param=param+bodydata['comitpassword']:null;
  bodydata['mobile']? param=param+bodydata['mobile']:null;
  bodydata['mobile_code']? param=param+bodydata['mobile_code']:null;
  //  密码md5 加密
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;
  console.log('注册用户:',bodydata);

  let netapi = 'registUrl',reqError = {error:{code:'-1',msg:'用户注册失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}


function loginAccount(bodydata,callback) {

  let param = 'param';
  bodydata['username']? param=param+bodydata['username']:null;
  bodydata['password']? param=param+bodydata['password']:null;
  //  密码md5 加密
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;
  console.log('登录用户:',bodydata);

  let netapi = 'loginUrl',reqError = {error:{code:'-1',msg:'用户登录失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

export {
  getMobileReqCode,
  registAccount,
  loginAccount,
}
