import QS from 'querystring'
export default {
    openLog: false,
    // 后端统一服务前缀
    apiUrl: process.env.VUE_APP_SERVICE_API || '/',
    // axios网络请求对象，可直接获取使用
    httpIns: require('axios').default.create({
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    /**
     * GET请求，将对预定的api路径发起请求。
     * @param {String} path 后端请求路径，请求时将统一拼接apiUrl前缀
     * @param {Object} param 请求参数，可为空，统一需要的参数可以在方法里边加上，如token
     * @param {function} success 请求成功回调
     * @param {function} faild 请求失败回调
     */
    GET: function(path = '', param = {}, success, faild) {
        if (path === '') {
            if (faild) {
                faild(new Error('请求路径错误'))
            }
            return
        }
        let url = this.apiUrl + path
        if (this.openLog) {
            console.log(url, param)
        }
        url = url + '?' + QS.stringify(param)
        this.httpIns.get(url).then(resp => {
            if (this.openLog) {
                console.log(resp.data)
            }
            if (success) {
                success(resp.data)
            }
        }).catch(error => {
            if (faild) {
                faild(error)
            }
        })
    },
    /**
     * POST请求，将对预定的api路径发起请求。
     * @param {String} path 后端请求路径，请求时将统一拼接apiUrl前缀
     * @param {Object} param 请求参数，可为空，统一需要的参数可以在方法里边加上，如token
     * @param {function} success 请求成功回调
     * @param {function} faild 请求失败回调
     */
    POST: function(path = '', param = {}, success, faild) {
        if (path === '') {
            if (faild) {
                faild(new Error('请求路径错误'))
            }
            return
        }
        let url = this.apiUrl + path
        if (this.openLog) {
            console.log(url, param)
        }
        this.httpIns.post(url,
            QS.stringify(param),
            { 'headers': { 'Content-Type': 'multipart/form-data' } }
        ).then(resp => {
            if (this.openLog) {
                console.log(resp.data)
            }
            if (success) {
                success(resp.data)
            }
        }).catch(error => {
            if (faild) {
                faild(error)
            }
        })
    },
    /**
     * 普通POST请求。本方法将直接对url发起post请求
     * @param {String} url 请求URL。 如：http://code.cert.cn
     * @param {Object} param 参数对象，要求是k-v形式参数对象，可传null
     * @param {function} success 请求成功后将回调
     * @param {function} faild 请求失败后将回调
     */
    OPOST: function (url = '', param = {}, success, faild) {
        if (url === '') {
            if (faild) {
                faild(new Error('请求路径错误'))
            }
            return
        }
        if (this.openLog) {
            console.log(url, param)
        }
        this.httpIns.post(url,
            QS.stringify(param),
            { 'headers': { 'Content-Type': 'multipart/form-data' } }
        ).then(resp => {
            if (this.openLog) {
                console.log(resp.data)
            }
            if (success) {
                success(resp.data)
            }
        }).catch(error => {
            if (faild) {
                faild(error)
            }
        })
    },
    /**
     * 普通GET请求。本方法将直接对url发起get请求
     * @param {String} url 这里要是URL是纯净的URL前缀，不带任何参数！！ 如：http://code.cert.cn
     * @param {Object} param 参数对象，要求是k-v形式参数对象，可传null
     * @param {function} success 请求成功后将回调
     * @param {function} faild 请求失败后将回调
     */
    OGET: function (url = '', param = {}, success, faild) {
        if (url === '') {
            if (faild) {
                faild(new Error('请求路径错误'))
            }
            return
        }
        if (this.openLog) {
            console.log(url, param)
        }
        let paramSring = QS.stringify(param)
        url = url + '?' + paramSring
        this.httpIns.get(url).then(resp => {
            if (this.openLog) {
                console.log(resp.data)
            }
            if (success) {
                success(resp.data)
            }
        }).catch(error => {
            if (faild) {
                faild(error)
            }
        })
    }
}
