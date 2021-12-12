import axios from "axios";
import jsSHA from "jssha";

const _axios = (baseUrl) =>{
    const instance = axios.create({
        baseURL : baseUrl,
        timeout:15000,
        headers:GetAuthorizationHeader()
    });
    return instance;
}

export {_axios};
export default _axios();

function GetAuthorizationHeader(){
    var AppId = '04de29132d8b46229bfbcf8f78ef2c37';
    var AppKey = '1A6Q1F8RFdo8WlqCsZm0jwlDWEo';

    var GMTString = new Date().toGMTString;
    var ShaObj = new jsSHA("SHA-1","TEXT");
    ShaObj.setHMACKey(AppKey,'TEXT');
    ShaObj.update('x-date: '+ GMTString);
    var HMAC = ShaObj.getHMAC("B64");
    var Autorization = 'hmac username="'+AppId+'",algorithm="hmac-sha1,headers="x-date",signature="'+HMAC+'"';
    return{
        Authorization: Autorization,
        "X-Date":GMTString,
    }
}