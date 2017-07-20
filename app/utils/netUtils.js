
// http://10.20.10.39/Api/Register/sendMobileCode
const BASEURL = 'http://10.20.10.39';
var reqUrl = {
  baseUrl:BASEURL,
  registUrl:BASEURL + '/Api/Register/addUser',
  getMobileCode:BASEURL + '/Api/Register/sendMobileCode',
  loginUrl:BASEURL + '/Api/Login/login',

  myGroups:BASEURL + '/api/Circle/myFocusCircle',
  tuijianGroups:BASEURL + '/api/Circle/recommendCircle',
};


export function NetWork_Post(net_api,bodyData,callback,netOptions) {

  let opt_headers,opt_error;
  if (typeof netOptions === 'object') {
    opt_headers = netOptions['headers'];
    opt_error = netOptions['error'];
  };

  post_header = opt_headers?opt_headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
  };

  post_error = opt_error?opt_error:{
    code:'-1',
    msg:'请求失败',
  };

  let url = reqUrl[net_api];
  let fetchOptions = {
    method: 'POST',
    headers:post_header,
    body:JSON.stringify(bodyData),
  }


  fetch(url,fetchOptions)
  .then((response)=>response.text())
  .then((responseText)=>{

    let responseData = JSON.parse(responseText);
    callback(responseData);
  })
  .catch(error=>{
    callback(post_error);
  }).done();

}


exports.NetWork_Get = function (net_api,callback,netOptions) {

  let url = reqUrl[net_api];

  if (typeof netOptions === 'object') {
    opt_error = netOptions['error'];
  };

  get_error = opt_error?opt_error:{
    status:'-1',
    msg:'请求失败',
  };

  fetch(url,{
  method: 'GET',
  credentials: 'include'
})
  .then((response) => response.text())
  .then((responseText) => {
    let responseData = JSON.parse(responseText);
    callback(responseData);
  })
  .catch((error) => {
    callback(get_error);
  });
};
