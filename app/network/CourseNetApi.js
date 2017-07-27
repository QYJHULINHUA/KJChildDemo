


import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';
let CryptoJS = require("crypto-js");

function getCourseList(bodydata,callback) {
  console.log('请求课程列表',bodydata);

  let netapi = 'getCourseList',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function getSpecialRecommendationList(bodydata,callback) {
  console.log('请求专题推荐列表',bodydata);

  let netapi = 'getSpecialRecommendation',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function getcourseDetail(bodydata,callback) {


  let param = 'param';
  bodydata['UserId']? param=param+bodydata['UserId']:null;
  bodydata['id']? param=param+bodydata['id']:null;
  //  密码md5 加密
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;

  console.log('请求课程详情',bodydata);


  let netapi = 'courseDetail',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function getCourseEvaluate(bodydata,callback) {
  console.log('请求课程评论',bodydata);

  let netapi = 'getCourseEvaluate',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function commitCourseEvaluate(bodydata,callback) {
  console.log('提交课程评论',bodydata);

  let netapi = 'commitCourseEvaluate',reqError = {error:{code:'-1',msg:'提交评论失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}



export {
  getCourseList,
  getSpecialRecommendationList,
  getcourseDetail,
  getCourseEvaluate,
  commitCourseEvaluate,
}
