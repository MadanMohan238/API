const frisby = require('frisby');
var tdata= require('./TestData/Data.json');
//const Statuscode = require('C:/Sample/spec/support/Demo jasmin/TestData/Data.json');
//const responedata =require("C:/Sample/spec/support/Demo jasmin/TestData/Insertuser.json")
var userURL= require('./UtilityURL/Url.json');
 var singleuser = require('./TestData/Getsingleuser.json');
//const requestdat= require("C:/Sample/spec/support/Demo jasmin/Test Data/Request.json")
var updatingusers= require("./TestData/Updatinguser.json");




describe("Pet store user module",function(){
 
it('Getting single user from user module', function () {
  
  return frisby.get(userURL.singleuser+singleuser.username)
  
  .expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype)
  .expect(singleuser.req_connection,singleuser.connection)
    
    .then(function(res){

      var responseobj=JSON.parse(res.body)
      expect(responseobj.id).toEqual(singleuser.id)
      expect(responseobj.username).toEqual(singleuser.username)
      expect(responseobj.firstName).toEqual(singleuser.firstName)
      expect(responseobj.lastName).toEqual(singleuser.lastName)
      expect(responseobj.email).toEqual(singleuser.email)
      expect(responseobj.password).toEqual(singleuser.password)
      expect(responseobj.header).toEqual(singleuser.header,singleuser.contentType,singleuser.req_contenttype)
      expect(responseobj.id).not.toBeNull()
      expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype);
      expect(singleuser.header_Status,singleuser.res_transferencoding,singleuser.res_encoding)
      .expect(singleuser.header_Status, tdata.Successstaus)

    })
}
);
});
describe("Pet store user module",function(){

  it('inserting user in user module ', function () {
  
    return frisby.post(userURL.insertinguser)
    .expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype)
    .expect(singleuser.req_connection,singleuser.connection)
    .expect(singleuser.header_Status, tdata.Successstaus)
      .then(function(res){
  
        var reponsepost=JSON.parse(res.body)
        expect (reponsepost.code).toEqual(tdata.Successstaus)
        expect(reponsepost.res_messages).toEqual(tdata.message)
        expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype);
        expect(singleuser.header_Status,singleuser.res_transferencoding,singleuser.res_encoding)
        .expect(responedata.response.username).toMatch(singleuser.username);
  
      })

});
});

xdescribe("dataprovider-getting single user",function(){
var using = require('jasmine-data-provider');
using(singleuser.user_request.data, function(Dataset){
it('Getting single user from user module', function () {
  
  return frisby.get(userURL.singleuser+Dataset.username)
 
  .expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype)
  .expect(singleuser.header_Status, tdata.Successstaus) 
  .expect(singleuser.req_connection,singleuser.connection)
    //console.log(userURL.singleuser+Dataset.username)
    .then(function(res){

      var responseobj=JSON.parse(res.body)
      expect(responseobj.id).toEqual(singleuser.id)
      expect(responseobj.username).toEqual(singleuser.username)
      expect(responseobj.firstName).toEqual(singleuser.firstName)
      expect(responseobj.lastName).toEqual(singleuser.lastName)
      expect(responseobj.email).toEqual(singleuser.email)
      expect(responseobj.password).toEqual(singleuser.password)
      expect(responseobj.id).not.toBeNull()
      expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype);
      expect(singleuser.header_Status,singleuser.res_transferencoding,singleuser.res_encoding)

      
    })
}
)
});
});


xdescribe("updating and delete operation in pet store",function(){


it('updating the user in user module', function () {
  
  return frisby.put(userURL.updatinguser+singleuser.username)
  .expect(updatingusers.req_id,updatingusers.data.id)
  
  .expect(updatingusers.req_username,updatingusers.data.username)
  .expect(updatingusers.req_firstname,updatingusers.data.firstName)
  .expect(updatingusers.req_lastname,updatingusers.data.lastName)
  .expect(updatingusers.req_email,updatingusers.data.email)
  .expect(updatingusers.req_password,updatingusers.data.password)
  .expect(updatingusers.req_userstatus,updatingusers.data.userStatus)
  .expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype)
  .expect(singleuser.req_connection,singleuser.connection)
  //. expect(requestdat.firstName).not.toContain("madhu")
  .then(function(res){

    var responseobj=JSON.parse(res.body)
    expect (reponsepost.code).toEqual(tdata.Successstaus)
        expect(reponsepost.res_messages).toEqual(tdata.message)
        expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype);
        expect(singleuser.header_Status,singleuser.res_transferencoding,singleuser.res_encoding)
   
  })
    

});


xit('deleting  single user in user module', function () {
  
  return frisby.del(userURL.deleteuser+singleuser.username)
  
  .expect(singleuser.header,singleuser.contentType,singleuser.req_contenttype)
  .expect(singleuser.req_connection,singleuser.connection)
    .expect(singleuser.header_Status, singleuser.Notfound);
});



});


