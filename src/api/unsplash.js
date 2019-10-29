import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 1b401beb33965a8c25e6baaf1f1b278f7f7481dee93e09c4789cb0ef44845eb9"
	}
});
