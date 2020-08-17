import CryptoJS from 'crypto-js'
import { JSEncrypt } from 'jsencrypt'

/**
 * 生成指定位数Hex，默认长度时16位
 * @param {Int} length 长度
 */
function randomHex (length) {
    length = length || 16
    var $chars = 'ABCDEF1234567890'
    var maxPos = $chars.length
    var randomStr = ''
    for (let i = 0; i < length; i++) {
        randomStr += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return randomStr
}
/**
 * 生成指定位数的随机字符串，默认长度时16位
 * @param {Int} length 长度
 */
function randomString (length) {
    length = length || 16
    var $chars = '123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'
    var maxPos = $chars.length
    var randomStr = ''
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
function AesEncrypt (aeskey = '', word = '') {
    while (aeskey.length < 16) {
        aeskey += 'A'
    }
    aeskey = CryptoJS.enc.Utf8.parse(aeskey)
    let cfg = {
        iv: aeskey,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
    let ciphertext = CryptoJS.AES.encrypt(word, aeskey, cfg).toString()
    return ciphertext
}
/**
 * Aes解密方法
 * @param {String} aeskey aeskey 加密key，要求长度是16位，低于16位则后边补A
 * @param {String} word 需要解密的内容
 * @returns {String} 原明文内容
 */
function AesDecrypt(aeskey = '', word = '') {
    while (aeskey.length < 16) {
        aeskey += 'A'
    }
    aeskey = CryptoJS.enc.Utf8.parse(aeskey)
    let cfg = {
        iv: aeskey,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
    let bytes = CryptoJS.AES.decrypt(word, aeskey, cfg)
    return bytes.toString(CryptoJS.enc.Utf8)
}
/**
 * Rsa加密
 * @param {String} publicKey RSA公钥
 * @param {String} content 需加密内容
 * @returns {String} 加密后内容
 */
function RsaEncrypt (publicKey, content) {
    let encryptor = new JSEncrypt()
    encryptor.setPublicKey(publicKey)
    return encryptor.encrypt(content)
}
/**
 * RSA解密
 * @param {String} privateKey RSA私钥
 * @param {String} content 需要解密的内容
 * @returns {String} 解密后的明文
 */
function RsaDecrypt (privateKey, content) {
    let decryptor = new JSEncrypt()
    decryptor.setPrivateKey(privateKey)
    return decryptor.decrypt(content)
}

// 加密相关工具类
export default {
    randomString,
    randomHex,
    AesEncrypt,
    AesDecrypt,
    RsaEncrypt,
    RsaDecrypt,
}
