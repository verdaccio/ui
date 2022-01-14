import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  cleanup,
  fireEvent,
  renderWithStore,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'verdaccio-ui/utils/test-react-testing-library';

import translationEN from '../../i18n/crowdin/ui.json';
import { store } from '../../store';
import Header from './Header';

/* eslint-disable react/jsx-no-bind*/
describe('<Header /> component with logged in state', () => {
  afterEach(cleanup);

  test('should load the component in logged out state', () => {
    renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );

    expect(screen.queryByTestId('logInDialogIcon')).toBeNull();
    expect(screen.getByText('Login')).toBeTruthy();
    expect(screen.queryByTestId('header--button-login')).toBeInTheDocument();
  });

  test('should load the component in logged in state', async () => {
    renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );
    store.dispatch.login.logInUser({ username: 'store', token: '12345' });

    await waitFor(() => {
      expect(screen.getByTestId('logInDialogIcon')).toBeTruthy();
      expect(screen.queryByText('Login')).toBeNull();
    });
  });

  test('should open login dialog', async () => {
    renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );

    store.dispatch.login.logOutUser();

    const loginBtn = screen.getByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await waitFor(() => screen.getByTestId('login--dialog'));
    expect(loginDialog).toBeTruthy();
  });

  test('should logout the user', async () => {
    const { getByText, getByTestId } = renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );

    store.dispatch.login.logInUser({ username: 'store', token: '12345' });

    const headerMenuAccountCircle = getByTestId('logInDialogIcon');
    fireEvent.click(headerMenuAccountCircle);

    // wait for button Logout's appearance and return the element
    const logoutBtn = await waitFor(() => getByText('Logout'));
    fireEvent.click(logoutBtn);
    expect(getByText('Login')).toBeTruthy();
  });

  test("The question icon should open a new tab of verdaccio's website - installation doc", () => {
    const { getByTestId } = renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );

    const documentationBtn = getByTestId('header--tooltip-documentation');
    expect(documentationBtn.getAttribute('href')).toBe(
      'https://verdaccio.org/docs/en/installation'
    );
  });

  test('should open the registrationInfo modal when clicking on the info icon', async () => {
    const { getByTestId } = renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );

    const infoBtn = getByTestId('header--tooltip-info');
    fireEvent.click(infoBtn);

    // wait for registrationInfo modal appearance and return the element
    const registrationInfoModal = await waitFor(() => getByTestId('registryInfo--dialog'));
    expect(registrationInfoModal).toBeTruthy();
  });

  test('should close the registrationInfo modal when clicking on the button close', async () => {
    const { getByTestId, getByText, queryByTestId } = renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );

    const infoBtn = getByTestId('header--tooltip-info');
    fireEvent.click(infoBtn);

    // wait for Close's button of registrationInfo modal appearance and return the element
    const closeBtn = await waitFor(() => getByText(translationEN.button.close));
    fireEvent.click(closeBtn);

    const hasRegistrationInfoModalBeenRemoved = await waitForElementToBeRemoved(() =>
      queryByTestId('registryInfo--dialog')
    );
    expect(hasRegistrationInfoModalBeenRemoved).not.toBeDefined();
  });

  test('should hide login if is disabled', () => {
    window.__VERDACCIO_BASENAME_UI_OPTIONS = {
      base: 'foo',
      login: false,
    };
    renderWithStore(
      <Router>
        <Header />
      </Router>,
      store
    );

    expect(screen.queryByTestId('header--button-login')).not.toBeInTheDocument();
  });

  test.todo('autocompletion should display suggestions according to the type value');
});
