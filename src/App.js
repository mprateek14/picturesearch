import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

class App extends Component {
	onSearchSubmit = term => {
		axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization:
					"Client-ID 1b401beb33965a8c25e6baaf1f1b278f7f7481dee93e09c4789cb0ef44845eb9"
			}
		});
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
