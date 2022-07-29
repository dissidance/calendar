import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_END_POINT,
});

class StandardError extends Error {
  code: number | undefined;
  message: string = 'Network error';
  headers: any;
  data: any;

  constructor(errorObj: AxiosError | AxiosResponse) {
    super();
    const error = (errorObj as AxiosError).response ?? (errorObj as AxiosResponse);
    this.code = error.status;
    this.headers = error.headers;
    this.data = error.data;
    this.message =
      (errorObj as AxiosError).name ??
      (errorObj as AxiosResponse).data?.description ??
      (errorObj as AxiosError).message;
  }
}

const responseHandler = (response: AxiosResponse<any>) => {
  if (response.status !== 200 && response.status !== 204) throw new StandardError(response);
  return response.data;
};
const errorHandler = (error: AxiosError) => {
  throw new StandardError(error);
};

const post = (url: string, data?: any) => instance.post(url, data).then(responseHandler).catch(errorHandler);
const put = (url: string, data?: any) => instance.put(url, data).then(responseHandler).catch(errorHandler);
const get = (url: string) => instance.get(url).then(responseHandler).catch(errorHandler);
const del = (url: string) => instance.delete(url).then(responseHandler).catch(errorHandler);

export default {
  post,
  put,
  get,
  del,
};
