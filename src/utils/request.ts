import axios from "axios";
import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";

//创建一个axios实例
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const { data } = response;

    return data;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    // console.log(status);

    let message = "";

    switch (status) {
      // case 401:
      //   message = "token 失效，请重新登录";
      //   break;
      // case 403:
      // message = "拒绝访问";
      // break;
      case 404:
        message = "请求地址错误";
        break;
      // case 500:
      // message = "服务器故障";
      // break;
      default:
        message = `${error.message}`;
    }

    ElMessage.error(message);
    console.log(message);
    return Promise.reject(error);
  }
);

const request = {
  get<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.get(url, config);
  },
  post<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.post(url, data, config);
  },
  put<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.put(url, data, config);
  },
  delete<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.delete(url, config);
  }
};

export default request;
