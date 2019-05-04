/**
 * @prettier
 */

import { createBrowserHistory } from 'history';
import { getBaseNamePath } from './utils/url';

const history = createBrowserHistory({
  basename: getBaseNamePath(),
});

export default history;
