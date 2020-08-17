import QS from 'qs'
import EncryptUtils from './encrypt.util'
import Axios, { AxiosResponse, AxiosError } from 'axios'

interface RequestParam {
  // eslint-disable-next-line
  [key:string]: any
}

/**
 * RSA公钥
 */
const RSA_P_K = ''

/**
 * 后端统一服务前缀
 */
const apiUrl = process.env.VUE_APP_SERVICE_API || '/'

/**
 * axios网络请求对象，可直接获取使用
 */
const httpIns = Axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * GET请求，将对预定的api路径发起请求。
 * @param {String} path 后端请求路径，请求时将统一拼接apiUrl前缀和参数
 * @param {Object} param 请求参数，可为空，统一需要的参数可以在方法里边加上，如token
 * @param {function} success 请求成功回调
 * @param {function} faild 请求失败回调
 */
function GET (path:string, param:RequestParam, success?: (resp: AxiosResponse) => void, faild?: (error: AxiosError|Error) => void):void {
  if (path === '') {
    if (faild) {
      faild(new Error('请求路径错误'))
    }
    return
  }
  let url = apiUrl + path
  url = url + '?' + QS.stringify(param)
  httpIns.get(url).then((resp:AxiosResponse) => {
    if (success) success(resp.data)
  }).catch((error:AxiosError) => {
    if (faild) faild(error)
  })
}

/**
 * POST请求，将对预定的api路径发起请求。
 * @param {String} path 后端请求路径，请求时将统一拼接apiUrl前缀
 * @param {Object} param 请求参数，可为空，统一需要的参数可以在方法里边加上，如token
 * @param {function} success 请求成功回调
 * @param {function} faild 请求失败回调
 */
function POST (path:string, param:RequestParam, success?: (resp: AxiosResponse) => void, faild?: (error: AxiosError|Error) => void, needEncrypt = false): void {
  if (path === '') {
    if (faild) faild(new Error('请求路径错误'))
    return
  }
  const url = apiUrl + path
  if (needEncrypt) {
    const aesKey = EncryptUtils.randomHex()
    const content = EncryptUtils.AesEncrypt(aesKey, JSON.stringify(param))
    const key = EncryptUtils.RsaEncrypt(RSA_P_K, aesKey)
    param = {
      aesKey: key,
      content: content
    }
  }
  httpIns.post(url,
    QS.stringify(param), {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then((resp:AxiosResponse) => {
    if (success) success(resp.data)
  }).catch((error:AxiosError) => {
    if (faild) faild(error)
  })
}

/**
 * 普通POST请求。本方法将直接对url发起post请求
 * @param {String} url 请求URL。 如：http://code.cert.cn/interface
 * @param {Object} param 参数对象，要求是k-v形式参数对象，可传null
 * @param {function} success 请求成功后将回调
 * @param {function} faild 请求失败后将回调
 */
function OPOST (url:string, param:RequestParam, success?: (resp: AxiosResponse) => void, faild?: (error: AxiosError|Error) => void): void {
  if (url === '') {
    if (faild) faild(new Error('请求路径错误'))
    return
  }
  httpIns.post(url,
    QS.stringify(param), {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then((resp:AxiosResponse) => {
    if (success) success(resp.data)
  }).catch((error:AxiosError) => {
    if (faild) faild(error)
  })
}

/**
 * 普通GET请求。本方法将直接对url发起get请求
 * @param {String} url 这里要是URL是纯净的URL前缀，不带任何参数！！ 如：http://code.cert.cn/interface
 * @param {Object} param 参数对象，要求是k-v形式参数对象，可传null
 * @param {function} success 请求成功后将回调
 * @param {function} faild 请求失败后将回调
 */
function OGET (url:string, param:RequestParam, success?: (resp: AxiosResponse) => void, faild?: (error: AxiosError|Error) => void): void {
  if (url === '') {
    if (faild) {
      faild(new Error('请求路径错误'))
    }
    return
  }
  const paramSring = QS.stringify(param)
  const endUrl = url + '?' + paramSring
  httpIns.get(endUrl).then((resp:AxiosResponse) => {
    if (success) success(resp.data)
  }).catch((error:AxiosError) => {
    if (faild) faild(error)
  })
}

export default {
  apiUrl,
  httpIns,
  GET,
  POST,
  OPOST,
  OGET
}
