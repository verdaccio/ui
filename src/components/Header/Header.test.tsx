import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';

import Header from './Header';

const headerProps = {
  username: 'verddacio-user',
  scope: 'test scope',
  withoutSearch: true,
  handleToggleLoginModal: () => {},
  handleLogout: () => {},
};

/* eslint-disable react/jsx-no-bind*/
describe('<Header /> component with logged in state', () => {
  test('should load the component in logged out state', () => {
    const { container } = render(
      <Router>
        <Header onLogout={headerProps.handleLogout} onToggleLoginModal={headerProps.handleToggleLoginModal} scope={headerProps.scope} />
      </Router>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should load the component in logged in state', () => {
    const { container } = render(
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
  });
});
