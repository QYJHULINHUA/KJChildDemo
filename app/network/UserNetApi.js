
import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';


function getMobileReqCode(bodydata,callback) {
  console.log('请求验证码',bodydata);

  let netapi = 'getMobileCode',reqError = {error:{code:'-1',msg:'获取验证码失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}


function registAccount(bodydata,callback) {
  console.log('注册用户:',bodydata);

  let netapi = 'registUrl',reqError = {error:{code:'-1',msg:'用户注册失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}


function loginAccount(bodydata,callback) {
  console.log('登录用户:',bodydata);

  let netapi = 'loginUrl',reqError = {error:{code:'-1',msg:'用户登录失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

export {
  getMobileReqCode,
  registAccount,
  loginAccount,
}
