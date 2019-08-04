/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

import { handleResponseType } from '../../src/utils/api';

describe('api', () => {
  // no the best mock, but I'd look for a mock library to work with fetch in the future
  // @ts-ignore
  const headers: Headers = {
    // @ts-ignore
    get: () => [],
  };

  describe('handleResponseType', () => {
    test('should test tgz scenario', async () => {
      const blob = new Blob(['foo']);
      const blobPromise = Promise.resolve<Blob>(blob);
      const response: Response = {
        url: 'http://localhost:8080/bootstrap/-/bootstrap-4.3.1.tgz',
        blob: () => blobPromise,
        ok: true,
        headers,
      } as Response;
      const handled = await handleResponseType(response);

      expect(handled).toEqual([true, blob]);
    });
  });
});
