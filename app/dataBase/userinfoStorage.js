




function storageLoginStatus(username,password,isLoggedIn) {

  storage.save({
    key:'loginState',
    data:{
      username:username,
      password:password,
      isLoggedIn:isLoggedIn,

    }
  });
}

function getLoginStatus(callback) {
  storage.load({
    key:'loginState',
  }).
  then(ret=>{
    callback({
      code:1,
      data:ret,
    })

  }).
  catch(err=>{
    callback({
      code:-1,
      data:err,
    })
  })

}

export {storageLoginStatus,getLoginStatus}
