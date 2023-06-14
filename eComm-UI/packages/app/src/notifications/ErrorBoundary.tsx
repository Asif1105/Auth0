import React, { Component } from 'react';
import ErrorState from './ErrorState';

/* eslint-disable react/jsx-handler-names */

type State = {
  error: Error | null;
};

type Props = {
  onRefresh?: Function;
  children: unknown;
};

export class ErrorBoundary extends Component<Props, State> {
  state = { error: null };

  reload = () => {
    window.location.reload();
  };

  componentDidCatch(e, info) {
    console.error(`Unhandled Runtime Error: ${e.message}`, info);
    this.setState({ error: e });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ marginTop: '15%' }}>
          <ErrorState onRefresh={this.reload} show />
        </div>
      );
    }
    return this.props.children;
  }
}
