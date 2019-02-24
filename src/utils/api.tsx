// @ts-ignore
import storage from './storage';

class API {
  // @ts-ignore
  request(url, method = 'GET', options = {}) {
    // @ts-ignore
    if (!window.VERDACCIO_API_URL) {
      throw new Error('VERDACCIO_API_URL is not defined!');
    }
    // @ts-ignore
    const token = storage.getItem('token');
    if (token) {
      // @ts-ignore
      if (!options.headers) options.headers = {};
    // @ts-ignore
      options.headers.authorization = `Bearer ${token}`;
    }

    if (!['http://', 'https://', '//'].some((prefix) => url.startsWith(prefix))) {
      // @ts-ignore
      url = window.VERDACCIO_API_URL + url;
    }

    /**
     * Handles response according to content type
     * @param {object} response
     * @returns {promise}
     */
    // @ts-ignore
    function handleResponseType(response) {
      if (response.headers) {
        const contentType = response.headers.get('Content-Type');
        if (contentType.includes('application/pdf')) {
          return Promise.all([response.ok, response.blob()]);
        }
        if (contentType.includes('application/json')) {
          return Promise.all([response.ok, response.json()]);
        }
        // it includes all text types
        if (contentType.includes('text/')) {
          return Promise.all([response.ok, response.text()]);
        }
      }
    }

    return new Promise((resolve, reject) => {
      fetch(url, {
        method,
        credentials: 'same-origin',
        ...options,
      })
      // @ts-ignore
        .then(handleResponseType)
        // @ts-ignore
        .then(([responseOk, body]) => {
          if (responseOk) {
            resolve(body);
          } else {
            reject(body);
          }
        })
        // @ts-ignore
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new API();
