import React from 'react'

function Child() {
    return <input />;
  }
  
  class FunctionalRefsproblem extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
    }
    render() {
      // This will *not* work!
      return (
        <Child ref={this.textInput} />
      );
    }
  }
  export default FunctionalRefsproblem;