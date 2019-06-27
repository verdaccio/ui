import React, { ComponentClass } from 'react';

export function asyncComponent(getComponent): ComponentClass {
  return class AsyncComponent extends React.Component {
    public static Component = null;
    public state = { Component: AsyncComponent.Component };

    public componentDidMount(): void {
      const { Component } = this.state;
      if (!Component) {
        getComponent()
          .then(({ default: Component }) => {
            AsyncComponent.Component = Component;
            /* eslint react/no-did-mount-set-state:0 */
            this.setState({ Component });
          })
          .catch(err => {
            console.error(err);
          });
      }
    }

    public render(): JSX.Element | null {
      const { Component } = this.state;
      if (Component) {
        // eslint-disable-next-line verdaccio/jsx-spread
        // @ts-ignore
        return <Component {...this.props} />;
      }

      return null;
    }
  };
}
