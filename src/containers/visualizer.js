import React, { Component } from "react";
import { connect } from "react-redux";
import Visualizer from "@/components/visualizer";
import Button from "@/components/button"

class VisualizerContainer extends Component {
	render() {
		return (
			<div>
				<div class="button">
					<button onClick="clickButton()">
						<img src="/icons/microphone.png" width="25px" height="25px"/>
					</button>
				</div>
				<div class="visualizer">
					<Visualizer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VisualizerContainer);

function clickButton() {
	setTimeout(loadData, 3000)
}
