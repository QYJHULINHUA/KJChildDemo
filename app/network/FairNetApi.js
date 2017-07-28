


import {NetWork_Post,NetWork_Get} from '../utils/netUtils.js';
let CryptoJS = require("crypto-js");


function commodityWithScore(bodydata,callback) {

  let param = 'param';
  bodydata['limit']? param=param+bodydata['limit']:null;
  bodydata['proScore']? param=param+bodydata['proScore']:null;
  bodydata['createDate']? param=param+bodydata['createDate']:null;
  bodydata['proLable']? param=param+bodydata['proLable']:null;
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;

  console.log('积分兑换列表',bodydata);


  let netapi = 'commodityWithScore',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function commodityWithCommodity(bodydata,callback) {
  let param = 'param';
  bodydata['limit']? param=param+bodydata['limit']:null;
  bodydata['browseTimes']? param=param+bodydata['browseTimes']:null;
  bodydata['createDate']? param=param+bodydata['createDate']:null;
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;

  console.log('以物换物列表',bodydata);

  let netapi = 'commodityWithCommodity',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function commodityWithAuction(bodydata,callback) {


  let param = 'param';
  bodydata['limit']? param=param+bodydata['limit']:null;
  bodydata['browseTimes']? param=param+bodydata['browseTimes']:null;
  bodydata['createDate']? param=param+bodydata['createDate']:null;
  bodydata['cProPrice']? param=param+bodydata['cProPrice']:null;
  let md51 = CryptoJS.MD5(param).toString();
  bodydata.keyStr=md51;

  console.log('拍卖列表',bodydata);

  let netapi = 'commodityWithAuction',reqError = {error:{code:'-1',msg:'加载数据失败'}};
  NetWork_Post(netapi,bodydata,callback,reqError);
}

function getCommodityList(apiStr:string,bodydata,callback) {
  switch (apiStr) {
    case 'Score':
      commodityWithScore(bodydata,callback);
      break;

    case 'Commodity':
      commodityWithCommodity(bodydata,callback);
      break;

    case 'Auction':
      commodityWithAuction(bodydata,callback);
      break;
    default:
      console.log('集市请求列表异常');
  }

}
export {
  getCommodityList,
}
