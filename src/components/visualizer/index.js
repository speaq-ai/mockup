import React, { Component } from "react";
import KeplerGl from "kepler.gl";
import store from "@/ducks";

export default class Visualizer extends Component {
	render() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;
		return (
			<div>
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
}
