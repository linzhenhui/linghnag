/*jshint esversion:6*/
import Vue from 'vue';

/**
 *
 * @param ruleName 校验规则名称 string
 * @param label 字段名称 string
 * @param required boolean
 * @param trigger string
 * @returns [{}]  array
 */
Vue.prototype.vType = function (type, value) {
    let trimValue = String(value).trim();
    switch (type) {
        case 'number':
            return { flag: /^[0-9]*$/.test(trimValue), tip: '请输入数字' };
        case 'zh'://中文
            return { flag: /^[\u4e00-\u9fa5]+$/.test(trimValue), tip: '请输入中文' };
        case '18X'://身份证
            return { flag: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{2}[0-9Xx]$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[0-9Xx]$/.test(trimValue) && Validate.checkParity(trimValue), tip: '请输入正确的身份证号码' };
        case 'mobile'://mobile移动电话
            return { flag: /^1[3456789]\d{9}$/.test(trimValue), tip: '请输入正确的手机号码' };
        case 'tel'://固定电话
            return { flag: /^(\d{3}-\d{8}|\d{4}-\d{7})$/.test(trimValue), tip: '请输入正确的固定电话' };
        case 'fixed-mobile'://mobile或fixed
            return { flag: /^1[3456789]\d{9}$/.test(trimValue) || /^\d{3,4}-\d{7,8}$/.test(trimValue), tip: '请输入正确的手机号码或固定电话' };
        case 'email'://邮箱
            return { flag: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(trimValue), tip: '请输入正确的电子邮箱' };
        case 'plateNumber'://车牌号
            return { flag: /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(value), tip: '请输入正确的车牌号' };
        case 'enNumber'://英文、数字
            return { flag: /^[0-9a-zA-Z]*$/.test(trimValue), tip: '请输入英文和数字' };
        case 'int'://整数
            return { flag: /^\-?[0-9]+$/.test(trimValue), tip: '请输入整数' };
        case 'positiveInt'://正整数
            return { flag: /^[0-9]+$/.test(trimValue), tip: '请输入正整数' };
        case 'negativeInt'://负整数
            return { flag: /^\-[0-9]+$/.test(trimValue), tip: '请输入负整数' };
        case 'float'://浮点数
            return { flag: /^\-?[0-9]*\.[0-9]+$/.test(trimValue), tip: '请输入小数' };
        case 'positiveFloat'://正小数
            return { flag: /^[0-9]*\.[0-9]+$/.test(trimValue), tip: '请输入正小数' };
        case 'negativeFloat'://负小数
            return { flag: /^\-[0-9]*\.[0-9]+$/.test(trimValue), tip: '请输入负小数' };
        case 'username'://用户名 8到16位 数字、字母或字母数字组合
            return { flag: /^[a-zA-Z][a-zA-Z0-9]{7,15}$/.test(trimValue), tip: '请输入8-16位的数字字母组合' };
        case 'pwd'://密码
            return { flag: /(?:\d.*_)|(?:_.*\d)|(?:[A-Za-z].*_)|(?:_.*[A-Za-z])|(?:[A-Za-z].*\d)|(?:\d.*[A-Za-z])/.test(trimValue), tip: '密码只能是数字，字母和下划线组合' };
        case 'password'://密码
            return { flag: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(trimValue), tip: '密码8-16位的数字和字母组合' };
        case 'nsrsbh'://纳税人识别号 15位到20位数字或字母
            return { flag: /^[a-zA-Z0-9\-]{15,20}$/.test(trimValue), tip: '请输入正确的纳税人识别号' };
        case 'yzbm'://邮政编码 6位数字
            return { flag: /^[0-9]{6}$/.test(trimValue), tip: '请输入6位数字的邮政编码' };
        case 'zjhm'://其他证件号码 20 位之内的数字字母组合
            return { flag: /^([0-9A-Za-z]|[-]){0,20}$/.test(trimValue), tip: '请输入长度在20位之内的数字字母组合' };
        case 'zzjgdm'://组织机构代码（必须为9位数字字母，字母为半角大写）
            return { flag: /^[A-Z0-9]{9}$/.test(trimValue), tip: '请输入9位数字和大写字母组合' };
        case 'money'://最大14位整数，最多两位小数金额
            return { flag: /^(([-]?[0-9]{1,14}[.]{1}[0-9]{1,2})$|([-]?[0-9]{1,14})$)/.test(trimValue), tip: '请输入最大十四位整数，最多两位小数的金额' };
        case 'positive_money'://最大14位整数，最多两位小数金额
            return { flag: /^(\d{1,14}|\d{1,14}\.\d{1,2})$/.test(trimValue), tip: '请输入正的最大十四位整数，最多两位小数的金额' };
        case 'big_money'://最大10位整数，最多六位小数金额
            return { flag: /^(\d{1,10}|\d{1,10}\.\d{1,6})$/.test(trimValue), tip: '请输入最大十位整数，最多六位小数的金额' };
        case 'c'://英文字母 大小写
            return { flag: /^[a-zA-Z]+$/i.test(trimValue), tip: '请输入英文字母' };
        case 'letter_number'://数字字母组合
            return { flag: /^[a-zA-Z0-9]+$/i.test(trimValue), tip: '请输入英文字母和数字组合' };
        case 'letter_number_dash'://含有下划线的字母、数字或者数字字母组合
            return { flag: /^[a-zA-Z0-9\-?]+$/i.test(trimValue), tip: '请输入下划线加英文字母和数字组合' };
        case 'chinese'://中文字符
            return { flag: /^[\u4e00-\u9fa5]+$/.test(trimValue), tip: '请输入中文' };
        case 'xm'://姓名
            return { flag: /[\u4e00-\u9fa5]|[a-zA-Z]$/.test(trimValue), tip: '请输入正确的姓名' };
        case 'sfzhm'://身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            return { flag: /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(trimValue), tip: '请输入正确的身份证号码' };
        case 'specialEn'://特殊字符  英文
            return { flag: !/[`~!@#$%^&*()_+=<>?:"{},.\/;'[\]]/im.test(trimValue), tip: '不能包含英文特殊字符，如~、!、@、#、$、%、^、&、*等' };
        case 'specialCn'://特殊字符  中文
            return { flag: !/[~！@#￥%…&*=+（——）·：；“”‘、，|《。》？、【】[\]]/im.test(trimValue), tip: '不能包含中文特殊字符，如中文标点、·、！、#、￥、等' };
        case 'cz'://传真
            return { flag: /^(\d{3,4}-)?\d{7,8}$/.test(trimValue), tip: '请输入正确的传真号码' };
        case 'url'://url
            return { flag: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(trimValue), tip: '正确格式：http://www.baidu.com' };
        default:
            return { flag: true, tip: '' };
    }
}
