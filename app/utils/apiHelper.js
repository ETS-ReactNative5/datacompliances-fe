import { call, put } from 'redux-saga/effects';
import { API_BASE, FLIGHT_API_BASE } from 'containers/App/constants';
import ObjectToFormData from './objectToFormData';
import { request, requestJSON } from './request';
// import { logoutSuccess } from 'containers/Login/actions';
// import invalidTokenHelper from 'utils/invalidTokenHelper';

class Api {
  /**
   * Generic api data loader
   */
  static dataLoader(apiUri, onSuccess, onError, data, token, metaData = '', ...actionArguments) {
    return function* () {
      // const baseUrl = metaData === 'flight' ? FLIGHT_API_BASE : API_BASE;
      const baseUrl = API_BASE;
      // const requestURL = `${baseUrl}${apiUri}`;
      let requestURL = '';
      if (/^https?:\/\//i.test(apiUri)) {
        requestURL = apiUri;
      } else {
        requestURL = `${baseUrl}${apiUri}`;
      }
      try {
        let options;
        if (data !== undefined) {
          options = {
            method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST', // PUT requests should have _id in data or should send a string "put" after token
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*',
              Authorization: token, //? `${usertoken}` : undefined
            },
          };
        } else {
          options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*',
              Authorization: token, //? `${usertoken}` : undefined
            },
          };
        }
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, data, metaData, ...actionArguments));
      } catch (err) {
        let error = null;
        try {
          error = yield call(() => err.response.json());
        } catch (a) {
          error = {
            errors: [
              {
                code: a.response.status,
                msg: a.response.statusText,
              },
            ],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  static multipartPost(apiUri, onSuccess, onError, data, document, token = '', metaData = '', ...actionArguments) {
    return function* () {
      const requestURL = `${API_BASE}${apiUri}`;
      let multipartData = new FormData();
      multipartData = ObjectToFormData(data, multipartData);
      if (Object.prototype.toString.call(document) === '[object Array]') {
        for (let i = 0; i < document.length; i++) {
          multipartData.append('file', document[i]);
        }
      } else {
        multipartData.append('file', document);
      }
      try {
        const options = {
          method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
          body: multipartData,
          headers: {
            processData: false,
            // 'Content-Type': 'multipart/form-data',
            contentType: false,
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText,
              },
            ],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }
  static multipartDirectUpload(apiUri, data, document, token, metaData = '') {
    const requestURL = `${API_BASE}${apiUri}`;
    let multipartData = new FormData();
    multipartData = ObjectToFormData(data, multipartData);
    if (Object.prototype.toString.call(document) === '[object Array]') {
      for (let i = 0; i < document.length; i++) {
        multipartData.append('file', document[i]);
      }
    } else {
      multipartData.append('file', document);
    }
    try {
      const options = {
        method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
        body: multipartData,
        headers: {
          processData: false,
          contentType: false,
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: token,
        },
      };
      return fetch(requestURL, options);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /*
   * Shorthand GET function
   */
  static get(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(apiUri, onSuccess, onError, undefined, ...actionArguments);
  }
  /*
   * Shorthand POST function
   */
  static post(apiUri, onSuccess, onError, data, token, metaData, ...actionArguments) {
    return this.dataLoader(apiUri, onSuccess, onError, data, token, metaData, ...actionArguments);
  }
}

export default Api;
