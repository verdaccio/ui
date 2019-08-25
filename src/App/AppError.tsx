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

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error, info });
  }

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
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
