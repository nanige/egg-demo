import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const http = axios.create({
    baseURL: 'http://127.0.0.1:7001/',
    timeout: 60000
})

// 添加请求拦截器
http.interceptors.request.use((config: any) => {
  // 在发送请求之前做些什么
  config.headers.token = sessionStorage.getItem("token") || '';
  return config;
}, (error:any) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use((response: AxiosResponse<any>) => {
  // 对响应数据做点什么
  return response;
}, (error:any) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http