/**
 * @prettier
 */

import { theme } from './theme';

interface Value<T extends number | string> {
  [key: string]: T | Value<T>;
}

function responsiveProp<T extends number | string>(name: string, values: undefined | T | Array<T>): Value<T> {
  if (!values) {
    return {};
  }

  if (Array.isArray(values)) {
    const result: Value<T> = {};
    for (let i = 0; i < values.length; i++) {
      result[theme.breakpoints.up(theme.breakpoints.keys[i])] = {
        [name]: values[i],
      };
    }
    return result;
  }

  return { [name]: values };
}

export default responsiveProp;
