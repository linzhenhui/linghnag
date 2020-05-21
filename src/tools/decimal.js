const moneyUtil = function () {
  // 阿拉伯数字金额转成中文大写金额
  let _arabicToChinese = function (arabicNum) {
    var arabicNum = Math.round(arabicNum * 100) + ''; // 数字金额
    let chineseValue = ""; // 转换后的汉字金额
    let String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
    let String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
    let len = arabicNum.length; // arabicNum 的字符串长度
    let Ch1; // 数字的汉语读法
    let Ch2; // 数字位的汉字读法
    let nZero = 0; // 用来计算连续的零值的个数
    let String3; // 指定位置的数值
    if (len > 15) {
      alert("超出计算范围");
      return "";
    }
    if (arabicNum === 0) {
      chineseValue = "零元整";
      return chineseValue;
    }
    String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值
    for (let i = 0; i < len; i++) {
      String3 = parseInt(arabicNum.substr(i, 1), 10); // 取出需转换的某一位的值
      if (i !== (len - 3) && i !== (len - 7) && i !== (len - 11)
        && i !== (len - 15)) {
        if (String3 === 0) {
          Ch1 = "";
          Ch2 = "";
          nZero = nZero + 1;
        } else if (String3 !== 0 && nZero !== 0) {
          Ch1 = "零" + String1.substr(String3, 1);
          Ch2 = String2.substr(i, 1);
          nZero = 0;
        } else {
          Ch1 = String1.substr(String3, 1);
          Ch2 = String2.substr(i, 1);
          nZero = 0;
        }
      } else { // 该位是万亿，亿，万，元位等关键位
        if (String3 !== 0 && nZero !== 0) {
          Ch1 = "零" + String1.substr(String3, 1);
          Ch2 = String2.substr(i, 1);
          nZero = 0;
        } else if (String3 !== 0 && nZero === 0) {
          Ch1 = String1.substr(String3, 1);
          Ch2 = String2.substr(i, 1);
          nZero = 0;
        } else if (String3 === 0 && nZero >= 3) {
          Ch1 = "";
          Ch2 = "";
          nZero = nZero + 1;
        } else {
          Ch1 = "";
          Ch2 = String2.substr(i, 1);
          nZero = nZero + 1;
        }
        if (i === (len - 11) || i === (len - 3)) { // 如果该位是亿位或元位，则必须写上
          Ch2 = String2.substr(i, 1);
        }
      }
      chineseValue = chineseValue + Ch1 + Ch2;
    }
    if (String3 === 0) { // 最后一位（分）为0时，加上“整”
      chineseValue = chineseValue + "整";
    }
    return chineseValue;
  };
  //toFixed js默认Number类型的toFixed方法是 四舍六入，现在改为四舍五入
  let _nativeToFixed = function (origin, s) {
    let e, changeNum, index, i, j;
    // 如果值小于0，先转成正数
    if (origin < 0) {
      e = -origin;
    }
    else {
      e = origin;
    }
    let pointIndex = origin.toString().indexOf('.');
    let addVal = '0.5';
    if (pointIndex > 0) {//尽量减少0.0...01类似的误差，但不能完全排除
      let len = origin.toString().split('.')[1].length - s - 3;
      for (let i = 0; i < len; i++) {
        addVal += '0';
      }
    }
    if (origin.toString().split('.')[0].length + s > 14) {
      addVal += '1';
      changeNum = (parseInt(e * Math.pow(10, s) + Number(addVal)) / Math.pow(10, s)).toString()
    } else {
      changeNum = (parseInt(parseFloat((e * Math.pow(10, s)).toPrecision(14)) + Number(addVal)) / Math.pow(10, s)).toString();
    }
    //如果为科学计数法，先转换为普通数字字符串
    let mtc = changeNum.match(/(\d)(?:\.(\d*))?e([+-]\d+)/);
    if (mtc) {
      let num = mtc[1] + (mtc[2] || '');
      if (Number(mtc[3]) > 0) {
        for (let mm = 0; mm < Number(mtc[3]) - mtc[2].length; mm++) {
          num += '0';
        }
      } else {
        let num1 = '0.';
        for (let mm = 0; mm < -Number(mtc[3]) - 1; mm++) {
          num1 += '0';
        }
        num = num1 + num;
      }
      changeNum = num;
    }
    index = changeNum.indexOf(".");
    if (index < 0 && s > 0) {
      changeNum = changeNum + ".";
      for (i = 0; i < s; i++) {
        changeNum = changeNum + "0";
      }
    } else {
      index = changeNum.length - index;
      for (j = 0; j < (s - index) + 1; j++) {
        changeNum = changeNum + "0";
      }
    }
    if (origin < 0) {
      if (Number(s) > 0) {
        return '-' + changeNum;
      }
      else {
        return -changeNum;
      }
    }
    else {
      return changeNum;
    }
  }
  return {
    arabicToChinese: function () {
      return _arabicToChinese.apply(this, arguments);
    },
    toFixed: function (origin, s) {
      return _nativeToFixed(origin, s);
    }
  }
}();
Number.prototype.toFixed = function (s) {
  return moneyUtil.toFixed(this, s);
};
