// /* eslint no-restricted-syntax: "off", no-param-reassign: "off" */
//
// import axios from 'axios';
// import Qs from 'query-string';
// import { API_URL } from 'shared/constants';
// import { getCurrentLocaleData, getCookie } from 'shared/utils';
//
// const locale = getCurrentLocaleData();
//
// const client = axios.create({
//     baseURL: API_URL,
// });
// /**
//  * The default url param serializer. For all those GET methods with filters.
//  * @param params
//  * @returns {*|string}
//  */
//
// client.interceptors.request.use((config) => {
//     config.headers['X-AuthToken'] = getCookie('X-AuthToken'); // 'ct2u9fa1qr01orrgoj8coj673o', 'kb21a9uj4jvbmmdhckagfcvk3s';
//     return config;
// });
//
// client.interceptors.response.use(
//     (response) => response.data,
//     (error) => {
//         if (error.response !== undefined) {
//             if (error.response.status === 401 || error.response.status === 403) {
//                 console.log('logout');
//                 console.log('redirect to login');
//             } else if (error.response.status === 412) {
//                 console.log('redirect to set password');
//             }
//             throw error.response.data.message;
//         } else {
//             throw error;
//         }
//     }
// );
//
// export default client;
