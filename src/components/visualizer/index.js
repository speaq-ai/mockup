import React, { Component } from "react";
import { connect } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from 'kepler.gl/actions';
import { processCsvData } from 'kepler.gl/processors';
import store from "@/ducks";
import mockupData from '../../data/mockupData';

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
				<button type="button" value="Talk" onClick={this.loadMap} />
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
							label: 'Sacramento Real Estate Transactions',
							id: 'mockup_data'
						},
						data: processCsvData(mockupData)
					}
				]
			})
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Visualizer);
