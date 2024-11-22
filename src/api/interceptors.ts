import axiosInstance from './axiosConfig';
import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

// request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2ZmNjBmNTY1NTVjMzVhMDkxODJlYzJmNGJhZTE4NCIsIm5iZiI6MTczMjI4NTYwNS45NzM1Njc1LCJzdWIiOiI2NmNlZGVmZjlhMWI5NTk4OGI2OWYyM2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TU1jFuTnTcovGdRiiWxqqJk4Wnv6vtY9JjVnd9v-vp4';
    if (token) {
      config.headers = config.headers || {};
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    console.error('Response Error:', error);
    if (error.response) {
      const {status} = error.response;
      if (status === 401) {
        // unauthorized errors
        console.error('Unauthorized: Token might be invalid or expired.');
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
