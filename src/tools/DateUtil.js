/*
 * 日期格式化
 * @param [formatStr]
 * @returns String
 * */
Date.prototype.format = function (formatStr) { //此处不能用箭头函数
    let o = {
        'M+': this.getMonth() + 1, //month 月
        'd+': this.getDate(), //day 日
        'h+': this.getHours(), //hour 时
        'm+': this.getMinutes(), //minute 分
        's+': this.getSeconds(), //second 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //quarter季度
        'S': this.getMilliseconds() //millisecond毫秒
    }

    if (/(y+)/.test(formatStr)) {
        formatStr = formatStr.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (let k in o) {
        if (new RegExp('(' + k + ')').test(formatStr)) {
            formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return formatStr
}
/*
 * 获取当月第一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getFirstDateOfMonth = function (formatStr) {
    let year = this.getFullYear()
    let month = this.getMonth()
    if (formatStr) {
        return new Date(year, month, 1).format(formatStr)
    }
    return new Date(year, month, 1)
}
/*
 * 获取当月最后一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getLastDateOfMonth = function (formatStr) {
    let year = this.getFullYear()
    let month = this.getMonth() + 1
    if (formatStr) {
        return new Date(year, month, 0).format(formatStr)
    }
    return new Date(year, month, 0)
}
/*
 * 获取下个月的第一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getFirstDateOfNextMonth = function (formatStr) {
    if (formatStr) {
        return new Date(this.getLastDateOfMonth().getTime() + 24 * 60 * 60 * 1000).format(formatStr)
    }
    return new Date(this.getLastDateOfMonth().getTime() + 24 * 60 * 60 * 1000)
}
/*
 * 获取下个月的最后一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getLastDateOfNextMonth = function (formatStr) {
    if (formatStr) {
        return this.getFirstDateOfNextMonth().getLastDateOfMonth(formatStr)
    }
    return this.getFirstDateOfNextMonth().getLastDateOfMonth()
}
/*
 * 获取上个月的第一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getFirstDateOfPrevMonth = function (formatStr) {
    if (formatStr) {
        return new Date(this.getFirstDateOfMonth().getTime() - 24 * 60 * 60 * 1000).getFirstDateOfMonth(formatStr)
    }
    return new Date(this.getLastDateOfMonth().getTime() + 24 * 60 * 60 * 1000)
}
/*
 * 获取上个月的最后一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getLastDateOfPrevMonth = function (formatStr) {
    if (formatStr) {
        return new Date(this.getFirstDateOfMonth().getTime() - 24 * 60 * 60 * 1000).format(formatStr)
    }
    return new Date(this.getFirstDateOfMonth().getTime() - 24 * 60 * 60 * 1000)
}
/*
 * 获取本年第一季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfFirstSeason = function (formatStr) {
    let year = this.getFullYear()
    let beginDate = new Date(year, 0, 1)
    let endDate = new Date(year, 2, 31)
    if (formatStr) {
        return [beginDate.format(formatStr), endDate.format(formatStr)]
    }
    return [beginDate, endDate]
}
/*
 * 获取本年第二季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfSecondSeason = function (formatStr) {
    let year = this.getFullYear()
    let beginDate = new Date(year, 3, 1)
    let endDate = new Date(year, 5, 30)
    if (formatStr) {
        return [beginDate.format(formatStr), endDate.format(formatStr)]
    }
    return [beginDate, endDate]
}
/*
 * 获取本年第三季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfThirdSeason = function (formatStr) {
    let year = this.getFullYear()
    let beginDate = new Date(year, 6, 1)
    let endDate = new Date(year, 8, 30)
    if (formatStr) {
        return [beginDate.format(formatStr), endDate.format(formatStr)]
    }
    return [beginDate, endDate]
}
/*
 * 获取本年第四季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfForthSeason = function (formatStr) {
    let year = this.getFullYear()
    let beginDate = new Date(year, 9, 1)
    let endDate = new Date(year, 11, 31)
    if (formatStr) {
        return [beginDate.format(formatStr), endDate.format(formatStr)]
    }
    return [beginDate, endDate]
}
/*
 * 日期比较-早于
 * */
Date.prototype.earlierThan = function (date) {
    let thisTime = this.getTime()
    let dateTime
    if (typeof date === 'number') {
        dateTime = new Date(parseInt(date)).getTime()
    } else if (typeof date === 'string') {
        dateTime = new Date(date).getTime()
    } else if (typeof date === 'object' && date instanceof Date) {
        dateTime = date.getTime()
    }
    return thisTime < dateTime
}
/*
 * 日期比较-晚于
 * @param Int/String/Date date
 * @return boolean
 * */
Date.prototype.laterThan = function (date) {
    let thisTime = this.getTime()
    let dateTime
    if (typeof date === 'number') {
        dateTime = new Date(parseInt(date)).getTime()
    } else if (typeof date === 'string') {
        dateTime = new Date(date).getTime()
    } else if (typeof date === 'object' && date instanceof Date) {
        dateTime = date.getTime()
    }
    return thisTime > dateTime
}
/*
 * 获取本地时间
 * @return Date
 * */
Date.localDate = null
Date.getLocalDate = function (formatStr) {
    if (formatStr) {
        Date.localDate = new Date().format(formatStr)
    } else {
        Date.localDate = new Date()
    }
    return Date.localDate
}
/*
 * 获取服务器时间
 * @return Date
 * */
/*Date.serverDate = null;
Date.getServerDate = (formatStr, url) {
    let _url='/sbzx-web/api/base/getSysTime';//后端接口
    if(!!url){
        _url = url;
    }
    if(!Date.serverDate){
        ajax('get',{url: url}).then((response) {
            Date.serverDate = response;
        });
    }
    if(!!formatStr){
        Date.serverDate =  Date.serverDate.format(formatStr);
    }
    return Date.serverDate;
};*/
