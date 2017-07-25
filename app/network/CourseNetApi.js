


import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';

function getCourseList(bodydata,callback) {
  console.log('请求课程列表',bodydata);

  let netapi = 'getCourseList',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

export {
  getCourseList,
}
