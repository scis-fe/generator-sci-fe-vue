/* eslint-disable no-extend-native */
/**
 * 这个文件通过原型链或者挂载全局属性，提供一些通用方法，使用可以直接在main.js中引入
 */

interface String {
  getHashCode(): number;
}

interface Array<T> {
  remove(item: T): void;
  removeByIndex(index: number): void;
}

interface Date {
  format(format: string): string;
  getQuarter(): number;
}

/**
 * 获取当前字符串hashCode
 */
String.prototype.getHashCode = function () {
  let hash = 1315423911
  let i
  let ch
  for (i = this.length - 1; i >= 0; i--) {
    ch = this.charCodeAt(i)
    hash ^= ((hash << 5) + ch + (hash >> 2))
  }
  return (hash & 0x7FFFFFFF)
}

/**
 * 删除数组中对象
 * @param {Object} val - 将要移除的对象
 */
Array.prototype.remove = function (val) {
  const index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}

/**
 * 删除指定index的元素
 * @param {Nubmer} index - 将要删除的元素的下标，默认-1不删除
 */
Array.prototype.removeByIndex = function (index = -1) {
  if (index > -1) {
    this.splice(index, 1)
  }
}

/**
 * 获取格式化时间
 * @param {String} format - 格式化参数，默认：yyyy-MM-dd hh:mm:ss
 */
Date.prototype.format = function (format = 'yyyy-MM-dd hh:mm:ss') {
  const o: any = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}

/**
 * 获取当前的季度
 */
Date.prototype.getQuarter = function () {
  return parseInt(this.getMonth() / 3 + '')
}

/**
 * 定义Cookie对象，便于高效操作Cookie
 */
// window.Cookie = {
//   /**
//    * 获取Cookie
//    * @param {String} key 获取Cookie的key
//    */
//   getItem: function (key: string): string|null {
//     const reg = RegExp(key + '=([^;]+)')
//     const arr = document.cookie.match(reg)
//     if (arr) {
//       return arr[1]
//     } else {
//       return null
//     }
//   },
//   /**
//    * 存储Cookie
//    * @param {String} key key
//    * @param {String} value value
//    * @param {Integer} hour 有效时长，默认24小时
//    */
//   setItem: function (key: string, value: string, hour = 24): void {
//     const date = new Date()
//     date.setTime(date.getTime() + hour * 60 * 60 * 1000)
//     document.cookie = key + '=' + value + ';expires=' + date
//   }
// }
