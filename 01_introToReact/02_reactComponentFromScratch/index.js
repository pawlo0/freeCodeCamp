"use strict";

const e = React.createElement;

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e("h1", {}, "My First React Component!");
  }
}

ReactDOM.render(e(MyComponent), document.getElementById("challenge-node"));
