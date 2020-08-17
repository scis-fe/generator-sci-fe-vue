import CryptoJS from 'crypto-js'
import { JSEncrypt } from 'jsencrypt'

/**
 * 生成指定位数Hex，默认长度时16位
 * @param {Number} length 长度
 */
function randomHex (length?: number):string {
  length = length || 16
  const $chars = 'ABCDEF1234567890'
  const maxPos = $chars.length
  let randomStr = ''
  for (let i = 0; i < length; i++) {
    randomStr += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return randomStr
}
/**
 * 生成指定位数的随机字符串，默认长度时16位
 * @param {Int} length 长度
 */
function randomString (length: number):string {
  length = length || 16
  const $chars = '123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'
  const maxPos = $chars.length
  let randomStr = ''
  for (let i = 0; i < length; i++) {
    randomStr += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return randomStr
}
/**
 * Aes加密方法
 * @param {String} aeskey 加密key，要求长度是16位，低于16位则后边补A
 * @param {String} word 需要加密的内容
 */
function AesEncrypt (aeskey = '', word = ''):string {
  while (aeskey.length < 16) {
    aeskey += 'A'
  }
  aeskey = CryptoJS.enc.Utf8.parse(aeskey)
  const cfg = {
    iv: aeskey,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }
  const ciphertext = CryptoJS.AES.encrypt(word, aeskey, cfg).toString()
  return ciphertext
}
/**
 * Aes解密方法
 * @param {String} aeskey aeskey 加密key，要求长度是16位，低于16位则后边补A
 * @param {String} word 需要解密的内容
 * @returns {String} 原明文内容
 */
function AesDecrypt (aeskey = '', word = ''):string {
  while (aeskey.length < 16) {
    aeskey += 'A'
  }
  aeskey = CryptoJS.enc.Utf8.parse(aeskey)
  const cfg = {
    iv: aeskey,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }
  const bytes = CryptoJS.AES.decrypt(word, aeskey, cfg)
  return bytes.toString(CryptoJS.enc.Utf8)
}
/**
 * Rsa加密
 * @param {String} publicKey RSA公钥
 * @param {String} content 需加密内容
 * @returns {String} 加密后内容
 */
function RsaEncrypt (publicKey: string, content: string):string {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)
  return encryptor.encrypt(content)
}
/**
 * RSA解密
 * @param {String} privateKey RSA私钥
 * @param {String} content 需要解密的内容
 * @returns {String} 解密后的明文
 */
function RsaDecrypt (privateKey: string, content: string):string {
  const decryptor = new JSEncrypt()
  decryptor.setPrivateKey(privateKey)
  return decryptor.decrypt(content)
}

/**
 * 加密工具类
 */
export default {
  randomString,
  randomHex,
  AesEncrypt,
  AesDecrypt,
  RsaEncrypt,
  RsaDecrypt
}
