
var myfirebase=require('firebase')
var $=require('jquery')
var http=require('http')
var log=require('log')
var fs=require("fs")
var myDataRef = new myfirebase('https://nestlabs-neighbour.firebaseio.com/users/13/structures/f6ab7cf0-5272-11e3-b09f-22000aecc032/');
          myDataRef.auth("6OzN9nzHcn5kc0wrrHTqJWIvhnlXv5JkdMmZLDg7", function(error,result) {
  if(error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Auth successfully");
  }
});
console.log("do something");
      myDataRef.on('value', function(dataSnapshot) {
        var message = dataSnapshot.val();
console.log(message);
http.get("http://testportalkiri3.appspot.com/Redirect");
fs.appendFile('./a.txt',"data changed",'utf8',function(err){
if(err){console.log("bad")}
});
      });
