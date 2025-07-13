import React from 'react';

interface ErrorButtonState {
  hasError: boolean;
}

class ErrorButton extends React.Component<
  Record<string, never>,
  ErrorButtonState
> {
  state = {
    hasError: false,
  };

  throwError = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Test error from button!');
    }

    return (
      <button
        onClick={this.throwError}
        className="w-32 m-auto p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Throw an Error
      </button>
    );
  }
}

export default ErrorButton;
