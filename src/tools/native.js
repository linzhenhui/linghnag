
window.nativeBrowser = {
  versions: function () {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return { //移动终端浏览器版本信息
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 //android终端
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

/*
 移动端(ios,android)回调
 type 请求类型
 result 移动端返回的数据
 isSuccess 是否成功标志
 */

window.nativeCallback = function (type, result, isSuccess) {
  if (this.resultCallback) {
    this.resultCallback(type, result, isSuccess);
  }
}


/*
 根据type调用不同的本地方法,第二个参数为json数据(可不传),第三个参数为callback回调事件(可不传)
 type 请求类型
 json 给移动端的json数据
 resultCallback 完成后的回调
 */

window.nativeFunction = function (type, json, resultCallback) { //此处根据传进来的type调用不同的本地方法,第二个参数为json数据,可不传
  /*  this.resultCallback = resultCallback;*/
  if (nativeBrowser.versions.android) { // 如果是android平台
    android.exec(type, json);
  } else if (nativeBrowser.versions.ios) { // 如果是ios平台
    var content = '';
    if (json) {
      content = '{"type":"' + type + '","argument":' + json + ',"callback":""}';
    } else {
      content = '{"type":"' + type + '","argument":"","callback":""}';
    }
    document.location = "webkitpostnotification:" + content;
  }
}

window.nativeFunctionSpe = function (type, str, resultCallback) { //此处根据传进来的type调用不同的本地方法,第二个参数为json数据,可不传
  /*this.resultCallback = resultCallback;*/
  if (nativeBrowser.versions.android) { // 如果是android平台
    var adObj = {
      data: str
    };
    android.exec(type, JSON.stringify(adObj));
  } else if (nativeBrowser.versions.ios) { // 如果是ios平台
    var content = '';
    var osObj = {
      title: str
    };
    if (str) {
      content = '{"type":"' + type + '","argument":' + JSON.stringify(osObj) + ',"callback":""}';
    } else {
      content = '{"type":"' + type + '","argument":"","callback":""}';
    }
    document.location = "webkitpostnotification:" + content;
  }
}


