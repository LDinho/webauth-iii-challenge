import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3300/api',
  // setting headers here to pass a token to
  //  authorization key, (localStorage is used to get the
  //   token). With this axios helper set up, this header
  //    will be sent even in endpoints that do not
  //     need it. Would need logic to send only
  //      if token is present
  // headers: {
  //   authorization: localStorage.getItem('token'),
  // },

}) // gets called once


// this function will run every time a request is made,
// so the headers.authorization token will be available, as opposed to
// having the headers above in the create function
// where the request happens only once
// (if that is used then the browser page would
// need to be refreshed, unless we use the interceptors below)
axiosInstance.interceptors.request.use(

  (config) => {
    config.headers.authorization =
      localStorage.getItem('token');

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }

) // gets called each time an api request is made

export default axiosInstance;
