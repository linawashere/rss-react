import React from 'react';

class ErrorButton extends React.Component {
  throwAnErorr = (): void => {
    throw new Error('Error!');
  };

  render() {
    return (
      <button
        onClick={this.throwAnErorr}
        className="w-32 m-auto p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Throw an Error
      </button>
    );
  }
}

export default ErrorButton;
