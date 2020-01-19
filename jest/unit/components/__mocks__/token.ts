/**
 * Token Utility
 */

import { Base64 } from 'js-base64';
import dayjs from 'dayjs';

export function generateTokenWithTimeRange(amount = 0) {
  const payload = {
    username: 'verdaccio',
    exp: Number.parseInt(
      String(
        dayjs(new Date())
          .add(amount, 'hour')
          .valueOf() / 1000
      ),
      10
    ),
  };
  return `xxxxxx.${Base64.encode(JSON.stringify(payload))}.xxxxxx`;
}

export function generateTokenWithExpirationAsString() {
  const payload = { username: 'verdaccio', exp: 'I am not a number' };
  return `xxxxxx.${Base64.encode(JSON.stringify(payload))}.xxxxxx`;
}

export function generateInvalidToken() {
  const payload = `invalidtoken`;
  return `xxxxxx.${Base64.encode(payload)}.xxxxxx`;
}

export function generateTokenWithOutExpiration() {
  const payload = {
    username: 'verdaccio',
  };
  return `xxxxxx.${Base64.encode(JSON.stringify(payload))}.xxxxxx`;
}
