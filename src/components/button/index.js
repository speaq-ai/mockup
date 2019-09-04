import React, { Component } from "react";

class Button extends Component {
    render() {
        <button onClick={this.props.onClick}>{this.props.text}</button>
    }
}