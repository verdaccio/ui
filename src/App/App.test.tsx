import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import storage from '../utils/storage';
import { generateTokenWithTimeRange } from '../../jest/unit/components/__mocks__/token';

import App from './App';
import { AppProps } from './AppContext';

jest.mock('../utils/storage', () => {
  class LocalStorageMock {
    private store: Record<string, string>;
    public constructor() {
      this.store = {};
    }
    public clear(): void {
      this.store = {};
    }
    public getItem(key: string): unknown {
      return this.store[key] || null;
    }
    public setItem(key: string, value: string): void {
      this.store[key] = value.toString();
    }
    public removeItem(key: string): void {
      delete this.store[key];
    }
  }
  return new LocalStorageMock();
});

jest.mock('../utils/api', () => ({
  request: require('../../jest/unit/components/__mocks__/api').default.request,
}));

describe('App', () => {
  let wrapper: ReactWrapper<{}, AppProps, App>;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('toggleLoginModal: should toggle the value in state', () => {
    const { handleToggleLoginModal } = wrapper.instance();
    expect(wrapper.state().showLoginModal).toBeFalsy();
    handleToggleLoginModal();
    expect(wrapper.state('showLoginModal')).toBeTruthy();
    expect(wrapper.state('error')).toEqual(undefined);
  });

  test('isUserAlreadyLoggedIn: token already available in storage', async () => {
    storage.setItem('username', 'verdaccio');
    storage.setItem('token', generateTokenWithTimeRange(24));
    const { isUserAlreadyLoggedIn } = wrapper.instance();

    isUserAlreadyLoggedIn();

    expect(wrapper.state('user').username).toEqual('verdaccio');
  });

  test('handleLogout - logouts the user and clear localstorage', async () => {
    const { handleLogout } = wrapper.instance();
    storage.setItem('username', 'verdaccio');
    storage.setItem('token', 'xxxx.TOKEN.xxxx');

    await handleLogout();
    expect(wrapper.state('user')).toEqual({});
    expect(wrapper.state('isUserLoggedIn')).toBeFalsy();
  });

  test('handleDoLogin - login the user successfully', async () => {
    const { handleDoLogin } = wrapper.instance();
    await handleDoLogin('sam', '1234');
    const result = {
      username: 'sam',
    };
    expect(wrapper.state('isUserLoggedIn')).toBeTruthy();
    expect(wrapper.state('showLoginModal')).toBeFalsy();
    expect(storage.getItem('username')).toEqual('sam');
    expect(storage.getItem('token')).toEqual('TEST_TOKEN');
    expect(wrapper.state('user')).toEqual(result);
  });

  test('handleDoLogin - authentication failure', async () => {
    const { handleDoLogin } = wrapper.instance();
    await handleDoLogin('sam', '12345');
    const result = {
      description: 'bad username/password, access denied',
      title: 'Unable to login',
      type: 'error',
    };
    expect(wrapper.state('user')).toEqual({});
    expect(wrapper.state('error')).toEqual(result);
  });
});
