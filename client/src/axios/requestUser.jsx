import axios from 'axios'
import {getUserToken} from "@/utils/index.jsx";
import {APP_API_URL} from "@/../config.js";

const requestUser = axios.create({
    baseURL: `${APP_API_URL}user`,
    timeout: 5000
})

requestUser.interceptors.request.use(config => {
    if (getUserToken()) {
        config.headers.Authorization = `Bearer ${getUserToken()}`
        config.headers["Content-Type"] = "application/json; charset=utf-8"
    }
    return config
}, error => {
    return Promise.reject(error)
})

requestUser.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export {requestUser}