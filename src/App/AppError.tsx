import React, { Component } from 'react';

export interface ErrorProps {
  children: any;
}

export interface ErrorAppState {
  hasError: boolean;
  error: any;
  info: any;
}

export default class ErrorBoundary extends Component<ErrorProps, ErrorAppState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  public componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }

  public render(): JSX.Element {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <>
          <h1>{'Something went wrong.'}</h1>
          <p>{`error: ${error}`}</p>
          <p>{`info: ${JSON.stringify(info)}`}</p>
        </>
      );
    }
    return children;
  }
}
