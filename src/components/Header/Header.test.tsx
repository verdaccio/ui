import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, waitForElementToBeRemoved, waitForElement } from '@testing-library/react';

import Header from './Header';

const headerProps = {
  username: 'verddacio-user',
  scope: 'test scope',
  withoutSearch: true,
  handleToggleLoginModal: jest.fn(),
  handleLogout: jest.fn(),
};

/* eslint-disable react/jsx-no-bind*/
describe('<Header /> component with logged in state', () => {
  test('should load the component in logged out state', () => {
    const { container, queryByTestId, getByText } = render(
      <Router>
        <Header onLogout={headerProps.handleLogout} onToggleLoginModal={headerProps.handleToggleLoginModal} scope={headerProps.scope} />
      </Router>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(queryByTestId('header--menu-acountcircle')).toBeNull();
    expect(getByText('Login')).toBeTruthy();
  });

  test('should load the component in logged in state', () => {
    const { container, getByTestId, queryByText } = render(
      <Router>
        <Header
          onLogout={headerProps.handleLogout}
          onToggleLoginModal={headerProps.handleToggleLoginModal}
          scope={headerProps.scope}
          username={headerProps.username}
        />
      </Router>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('header--menu-acountcircle')).toBeTruthy();
    expect(queryByText('Login')).toBeNull();
  });

  test('should open login dialog', async () => {
    const { getByText } = render(
      <Router>
        <Header onLogout={headerProps.handleLogout} onToggleLoginModal={headerProps.handleToggleLoginModal} scope={headerProps.scope} />
      </Router>
    );

    const loginBtn = getByText('Login');
    fireEvent.click(loginBtn);
    expect(headerProps.handleToggleLoginModal).toHaveBeenCalled();
  });

  test('should logout the user', async () => {
    const { getByText, getByTestId } = render(
      <Router>
        <Header
          onLogout={headerProps.handleLogout}
          onToggleLoginModal={headerProps.handleToggleLoginModal}
          scope={headerProps.scope}
          username={headerProps.username}
        />
      </Router>
    );

    const headerMenuAccountCircle = getByTestId('header--menu-acountcircle');
    fireEvent.click(headerMenuAccountCircle);

    // wait for button Logout's appearance and return the element
    const logoutBtn = await waitForElement(() => getByText('Logout'));
    fireEvent.click(logoutBtn);
    expect(headerProps.handleLogout).toHaveBeenCalled();
  });

  test("The question icon should open a new tab of verdaccio's website - installation doc", async () => {
    const { getByTestId } = render(
      <Router>
        <Header
          onLogout={headerProps.handleLogout}
          onToggleLoginModal={headerProps.handleToggleLoginModal}
          scope={headerProps.scope}
          username={headerProps.username}
        />
      </Router>
    );

    const documentationBtn = getByTestId('header--tooltip-documentation');
    expect(documentationBtn.getAttribute('href')).toBe('https://verdaccio.org/docs/en/installation');
  });

  test('should open the registrationInfo modal when clicking on the info icon', async () => {
    const { getByTestId } = render(
      <Router>
        <Header
          onLogout={headerProps.handleLogout}
          onToggleLoginModal={headerProps.handleToggleLoginModal}
          scope={headerProps.scope}
          username={headerProps.username}
        />
      </Router>
    );

    const infoBtn = getByTestId('header--tooltip-info');
    fireEvent.click(infoBtn);

    // wait for registrationInfo modal appearance and return the element
    const registrationInfoModal = await waitForElement(() => getByTestId('registryInfo--dialog'));
    expect(registrationInfoModal).toBeTruthy();
  });

  test('should close the registrationInfo modal when clicking on the button close', async () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <Router>
        <Header
          onLogout={headerProps.handleLogout}
          onToggleLoginModal={headerProps.handleToggleLoginModal}
          scope={headerProps.scope}
          username={headerProps.username}
        />
      </Router>
    );

    const infoBtn = getByTestId('header--tooltip-info');
    fireEvent.click(infoBtn);

    // wait for Close's button of registrationInfo modal appearance and return the element
    const closeBtn = await waitForElement(() => getByText('CLOSE'));
    fireEvent.click(closeBtn);

    const hasRegistrationInfoModalBeenRemoved = await waitForElementToBeRemoved(() => queryByTestId('registryInfo--dialog'));
    expect(hasRegistrationInfoModalBeenRemoved).toBeTruthy();
  });
  test.todo('autocompletion should display suggestions according to the type value');
});
