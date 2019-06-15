import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3300/api',
  // setting headers here to pass a token to
  //  authorization key, (localStorage is used to get the
  //   token). With this axios helper set up, this header
  //    will always be sent even in endpoints that do not
  //     need it. Would need logic to send only
  //      if token is present
  headers: {
    authorization: localStorage.getItem('token'),
  },

})

export default axiosInstance;
