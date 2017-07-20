
import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';

function getMyGroup(bodydata,callback) {
  console.log('请求我的圈子',bodydata);

  let netapi = 'myGroups',reqError = {error:{code:'-1',msg:'请求我的圈子失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function getTuiJianGroup(bodydata,callback) {
  console.log('请求推荐圈子',bodydata);

  let netapi = 'tuijianGroups',reqError = {error:{code:'-1',msg:'请求推荐圈子失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

export {
  getTuiJianGroup,
  getMyGroup,

}
