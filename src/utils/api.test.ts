/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

import { handleResponseType } from '../../src/utils/api';

describe('api', () => {
  describe('handleResponseType', () => {
    test('should handle missing Content-Type', async () => {
      const response: Response = {
        url: 'http://localhost:8080/-/packages',
        ok: false,
        headers: new Headers(),
      } as Response;

      const handled = await handleResponseType(response);

      // Should this actually return [false, null] ?
      expect(handled).toBeUndefined();
    });

    test('should test tgz scenario', async () => {
      const blob = new Blob(['foo']);
      const blobPromise = Promise.resolve<Blob>(blob);
      const response: Response = {
        url: 'http://localhost:8080/bootstrap/-/bootstrap-4.3.1.tgz',
        blob: () => blobPromise,
        ok: true,
        headers: new Headers(),
      } as Response;
      const handled = await handleResponseType(response);

      expect(handled).toEqual([true, blob]);
    });
  });
});
