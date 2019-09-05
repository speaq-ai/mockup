import React, { Component } from "react";
import { connect } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import { processCsvData } from "kepler.gl/processors";
import store from "@/ducks";
import mockupData from "../../data/mockupData";

class Visualizer extends Component {
	constructor(props) {
		super(props);

		// resolve missing this
		this.loadMap = this.loadMap.bind(this);
	}

	render() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;
		return (
			<div>
				<div style={buttonDivStyle}>
					<RecordButton width="25px" height="25px" onClick={this.loadMap} />
				</div>
				<KeplerGl
					id="foo"
					store={store}
					mapboxApiAccessToken={mapboxAccessToken}
					width={width}
					height={height}
				/>
			</div>
		);
	}

	loadMap() {
		// load sample data and process csv file
		this.props.dispatch(
			addDataToMap({
				datasets: [
					{
						info: {
							label: "Sacramento Real Estate Transactions",
							id: "mockup_data",
						},
						data: processCsvData(mockupData),
					},
				],
			})
		);
	}
}

class RecordButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "images/icons/microphone.png",
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { display } = this.state;
		this.setState({
			display: "images/icons/speech.gif",
		});
		setTimeout(() => {
			this.setState({ display: "images/icons/microphone.png" });
			this.props.onClick();
		}, 3000);
	}

	render() {
		return (
			<button onClick={this.handleClick} style={buttonStyle}>
				<img
					src={this.state.display}
					width={this.props.width}
					height={this.props.height}
				/>
			</button>
		);
	}
}

const buttonDivStyle = {
	backgroundColor: "#2f404a",
	textAlign: "center",
};

const buttonStyle = {
	backgroundColor: "#2c2d2d",
	borderColor: "#2c2d2d",
	width: "50px",
	outline: "None",
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Visualizer);
