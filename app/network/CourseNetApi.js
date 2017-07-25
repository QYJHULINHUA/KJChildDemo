


import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';

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
  console.log('请求课程详情',bodydata);

  let netapi = 'courseDetail',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function getCourseEvaluate(bodydata,callback) {
  console.log('请求课程评论',bodydata);

  let netapi = 'getCourseEvaluate',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}





export {
  getCourseList,
  getSpecialRecommendationList,
  getcourseDetail,
  getCourseEvaluate,
}
