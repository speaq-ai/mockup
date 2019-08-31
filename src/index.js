import React, { Component } from "react";
import ReactDOM from "react-dom";

class Root extends Component {
	render() {
		return <h1>I'm working!</h1>;
	}
}

ReactDOM.render(<Root />, document.getElementById("root"));
