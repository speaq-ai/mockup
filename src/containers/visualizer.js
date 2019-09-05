import React, { Component } from "react";
import { connect } from "react-redux";
import Visualizer from "@/components/visualizer";

class VisualizerContainer extends Component {
    render() {
        return (
        <div>
            <div style={buttonDivStyle}>
                <RecordButton width="25px" height="25px"/>
            </div>
            <div>
                <Visualizer />
            </div>
        </div>
        );
    }
}
 
class RecordButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "images/icons/microphone.png"
        }
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick() {
        setTimeout(loadData, 3000)      
    }
 
    render() {
        return (
            <button onClick={this.handleClick} style={buttonStyle}>
                <img src={this.state.display} width={this.props.width} height={this.props.height}/>
            </button>
        )
    } 
}
 
const buttonDivStyle = {
    backgroundColor: '#2f404a',
    textAlign: 'center'
};
 
const buttonStyle = {
    backgroundColor: '#2c2d2d',
    borderColor: '#2c2d2d',
    width: '50px'
}
 
function loadData() {
    alert("Hello World");
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VisualizerContainer);
