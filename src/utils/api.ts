import storage from './storage';
import '../../types';

/**
 * Handles response according to content type
 * @param {object} response
 * @returns {promise}
 */
function handleResponseType(response: Response): Promise<[boolean, Blob | string]> | Promise<void> {
  if (response.headers) {
    const contentType = response.headers.get('Content-Type') as string;
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

  return Promise.resolve();
}

class API {
  public request<T>(url: string, method = 'GET', options?: RequestInit): Promise<T> {
    if (!window.VERDACCIO_API_URL) {
      throw new Error('VERDACCIO_API_URL is not defined!');
    }

    const token = storage.getItem('token');
    const headers = new Headers(options && options.headers);
    if (token && options && options.headers) {
      headers.set('Authorization', `Bearer ${token}`);
      options.headers = Object.assign(options.headers, headers);
    }

    if (!['http://', 'https://', '//'].some(prefix => url.startsWith(prefix))) {
      // @ts-ignore
      url = window.VERDACCIO_API_URL + url;
    }

    return new Promise((resolve, reject) => {
      fetch(url, {
        method,
        credentials: 'same-origin',
        ...options,
      })
        // @ts-ignore
        .then(handleResponseType)
        .then(([responseOk, body]) => {
          if (responseOk) {
            resolve(body);
          } else {
            reject(body);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default new API();
