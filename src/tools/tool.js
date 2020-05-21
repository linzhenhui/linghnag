// creact Tools Object
function Tools() {
}

window.Tools = Tools;

Tools.prototype = {
    constructor: Tools,
    closeWin: function (action) {
        if (window.CloseOwnerWindow) {
            return window.CloseOwnerWindow(action);
        }
        else {
            if (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('Chrome') != -1) {
                window.location.href = 'about:blank';
                window.close();
            } else {
                window.opener = null;
                window.open('', '_self');
                window.close();
            }
        }
    },

    /**
     * @description  简单的浏览器检查结果。
     *
     * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
     * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
     * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
     * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
     * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
     * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
     *
     * @property {Object} [browser]
     */
    extend: (function () {
        for (var p in { toString: null }) {
            //检查当前浏览器是否支持forin循环去遍历出一个不可枚举的属性，比如toString属性，如果不能遍历不可枚举的属性(IE浏览器缺陷)，那么forin循环不会进来
            return function extend(o) {
                for (var i = 1, len = arguments.length; i < len; i++) {
                    var source = arguments[i];
                    for (prop in source) {
                        o[prop] = source[prop];
                    }
                }
            };
        }
        //这些属性需要特殊检查一下，因为有的IE浏览器不支持for in去遍历这些属性
        var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty', 'isPropertyOf', 'propertyIsEnumerable', 'toLocalString'];
        return function patched_extend(o) {
            for (var i = 1, len = arguments.length; i < len; i++) {
                var source = arguments[i];
                for (prop in source) {//先遍历常规的属性
                    o[prop] = source[prop];
                }
                //检查是否有特殊属性，防止漏掉
                for (var j = 0, len = protoprops.length; j < len; j++) {
                    prop = protoprops[j];
                    if (source.hasOwnProperty(prop)) {
                        o[prop] = source[prop];
                    }
                }
            }
            return o;
        };
    }()),

    browser: (function (ua) {
        var ret = {},
            webkit = ua.match(/WebKit\/([\d.]+)/),
            chrome = ua.match(/Chrome\/([\d.]+)/) ||
                ua.match(/CriOS\/([\d.]+)/),

            ie = ua.match(/MSIE\s([\d\.]+)/) ||
                ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
            firefox = ua.match(/Firefox\/([\d.]+)/),
            safari = ua.match(/Safari\/([\d.]+)/),
            opera = ua.match(/OPR\/([\d.]+)/);

        webkit && (ret.webkit = parseFloat(webkit[1]));
        chrome && (ret.chrome = parseFloat(chrome[1]));
        ie && (ret.ie = parseFloat(ie[1]));
        firefox && (ret.firefox = parseFloat(firefox[1]));
        safari && (ret.safari = parseFloat(safari[1]));
        opera && (ret.opera = parseFloat(opera[1]));

        return ret;
    })(navigator.userAgent),

    /**
     * @description  操作系统检查结果。
     *
     * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
     * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
     * @property {Object} [os]
     */
    os: (function (ua) {
        var ret = {},

            // osx = !!ua.match( /\(Macintosh\; Intel / ),
            android = ua.match(/(?:Android);?[\s\/]+([\d.]+)?/),
            ios = ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);

        // osx && (ret.osx = true);
        android && (ret.android = parseFloat(android[1]));
        ios && (ret.ios = parseFloat(ios[1].replace(/_/g, '.')));

        return ret;
    })(navigator.userAgent),

    /**
     * [isSupportTransition description]
     * 是否支持css3 transition动画属性
     * @return {Boolean} [description]
     */
    isSupportTransition: function () {
        var s = document.createElement('p').style,
            r = 'transition' in s ||
                'WebkitTransition' in s ||
                'MozTransition' in s ||
                'msTransition' in s ||
                'OTransition' in s;
        s = null;
        return r;
    },

    isIE: function () {
        if (!!window.ActiveXObject || 'ActiveXObject' in window) {
            return true;
        } else {
            return false;
        }
    },

    // 检测是否已经安装flash，检测flash的版本
    flashVersion: function () {
        var version;
        try {
            version = navigator.plugins['Shockwave Flash'];
            version = version.description;
        } catch (ex) {
            try {
                version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                    .GetVariable('$version');
            } catch (ex2) {
                version = '0.0';
            }
        }
        version = version.match(/\d+/g);
        return parseFloat(version[0] + '.' + version[1], 10);
    },

    /**
     * [isSupportBase64 description]
     * @return {Boolean} 判断浏览器是否支持图片base64
     */
    isSupportBase64: function () {
        var data = new Image();
        var support = true;
        data.onload = data.onerror = function () {
            if (this.width != 1 || this.height != 1) {
                support = false;
            }
        };
        data.src =
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        return support;
    },
    /**
     * [trim description]去除前后空格
     * @param  {[type]} str
     * @return {[string]}
     */
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },

    /**
     * [extend description]扩张对象方法
     * @return {[Object]} [description]
     */
    extend: function () {
        var arr = arguments,
            result = {},
            i;
        if (!arr.length) return {};
        for (i = arr.length - 1; i >= 0; i--) {
            if (_isObject(arr[i])) {
                _extend(arr[i], result);
            }
        }
        arr[0] = result;
        return result;
    },
    /**
     * url通过名字获取参数
     * @param attrName
     * @returns {*}
     */
    getUrlParamByName: function (attrName) {
        let locs = location.href.split('?');
        if (locs.length < 2) {
            return null;
        }
        let params = locs[1].split('&');
        let value = null;
        for (let i = 0; i < params.length; i++) {
            let param = params[i].split('=');
            if (param[0] === attrName) {
                value = param[1].split('#')[0];
                break;
            }
        }
        if (value === null && locs.length > 2) {
            params = locs[2].split('&');
            for (let j = 0; j < params.length; j++) {
                let param = params[j].split('=');
                if (param[0] === attrName) {
                    value = param[1].split('#')[0];
                    break;
                }
            }
        }
        return value;
    },

    getElemPos: function (obj) {
        var pos = { 'top': 0, 'left': 0 };
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                pos.top += obj.offsetTop;
                pos.left += obj.offsetLeft;
                obj = obj.offsetParent;
            }
        } else if (obj.x) {
            pos.left += obj.x;
        } else if (obj.x) {
            pos.top += obj.y;
        }
        return { x: pos.left, y: pos.top };
    },

    encode: function () {
        var ec;
        return function (o, dateFormat) {
            var sb = [], _dateFormat;
            _dateFormat = dateFormat;
            this.doEncode(o, sb);
            _dateFormat = null;
            return sb.join('');
        };
    }(),

    doEncode: function (o, sb, field) {
        var useHasOwn = !!{}.hasOwnProperty;
        let strReg1 = /["\\\x00-\x1f]/;
        let strReg2 = /([\x00-\x1f\\"])/g;
        if (o === null) {
            sb[sb.length] = 'null';
            return;
        }
        var t = typeof o;
        if (t == 'undefined') {
            sb[sb.length] = 'null';
            return;
        } else if (o.push) {

            sb[sb.length] = '[';
            var b, i, l = o.length, v;
            for (i = 0; i < l; i += 1) {
                v = o[i];
                t = typeof v;
                if (t == 'undefined' || t == 'function' || t == 'unknown') {
                } else {
                    if (b) {
                        sb[sb.length] = ',';
                    }
                    tools.doEncode(v, sb);

                    b = true;
                }
            }
            sb[sb.length] = ']';
            return;
        } else if (o.getFullYear) {
            if (_dateFormat) {
                sb[sb.length] = '"';
                if (typeof _dateFormat == 'function') {
                    sb[sb.length] = _dateFormat(o, field);
                } else {
                    sb[sb.length] = mini.formatDate(o, _dateFormat);
                }
                sb[sb.length] = '"';
            } else {
                var n;
                sb[sb.length] = '"';
                sb[sb.length] = o.getFullYear();
                sb[sb.length] = '-';
                n = o.getMonth() + 1;
                sb[sb.length] = n < 10 ? '0' + n : n;
                sb[sb.length] = '-';
                n = o.getDate();
                sb[sb.length] = n < 10 ? '0' + n : n;
                sb[sb.length] = 'T';
                n = o.getHours();
                sb[sb.length] = n < 10 ? '0' + n : n;
                sb[sb.length] = ':';
                n = o.getMinutes();
                sb[sb.length] = n < 10 ? '0' + n : n;
                sb[sb.length] = ':';
                n = o.getSeconds();
                sb[sb.length] = n < 10 ? '0' + n : n;
                sb[sb.length] = '"';
            }
            return;
        } else if (t == 'string') {
            if (strReg1.test(o)) {
                sb[sb.length] = '"';

                sb[sb.length] = o.replace(strReg2, replaceString);
                sb[sb.length] = '"';
                return;
            }
            sb[sb.length] = '"' + o + '"';
            return;
        } else if (t == 'number') {
            sb[sb.length] = o;
            return;
        } else if (t == 'boolean') {
            sb[sb.length] = String(o);
            return;
        } else {
            sb[sb.length] = '{';
            var b, i, v;
            for (i in o) {
                if (!useHasOwn || (o.hasOwnProperty && o.hasOwnProperty(i))) {
                    v = o[i];
                    t = typeof v;
                    if (t == 'undefined' || t == 'function' || t == 'unknown') {
                    } else {
                        if (b) {
                            sb[sb.length] = ',';
                        }
                        tools.doEncode(i, sb);
                        sb[sb.length] = ':';
                        tools.doEncode(v, sb, i);

                        b = true;
                    }
                }
            }
            sb[sb.length] = '}';
            return;
        }
    },
    /**
     * 数组 里面是对象，根据对象的某个属性，对数组去重
     * @param array
     * @param keys
     */
    uniqueArrayByKeys: function (array, keys) {
        var _objkey = function (obj, keys) {
            var n = keys.length,
                key = [];
            while (n--) {
                key.push(obj[keys[n]]);
            }
            return key.join('|');
        };

        var arr = [];
        var hash = {};
        for (var i = 0, j = array.length; i < j; i++) {
            var k = _objkey(array[i], keys);
            if (!(k in hash)) {
                hash[k] = true;
                arr.push(array[i]);
            }
        }
        return arr;
    },
    session: {
        setSession: function (name, data) {
            sessionStorage.setItem(name, data);
        },
        getSession: function (name) {
            return sessionStorage.getItem(name);
        },
        clearSession: function () {
            sessionStorage.clear();
        },
        getLocal: function (name) {
            return localStorage.getItem(name);
        }
    },
    zeroFill: (value, length) => {
        let i = (value + "").length;
        while (i++ < length) {
            value = "0" + value;
        }
        return value;
    }
};

window.tools = new Tools();
