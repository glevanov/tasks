import { useState, useEffect } from "react";

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
	return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (to: string) => (window.location.hash = to);

// hash navigation hook implementation from Wouter docs
export const useHashLocation = (): [string, (to: string) => string] => {
	const [loc, setLoc] = useState(currentLocation());

	useEffect(() => {
		// this function is called whenever the hash changes
		const handler = () => setLoc(currentLocation());

		// subscribe to hash changes
		window.addEventListener("hashchange", handler);
		return () => window.removeEventListener("hashchange", handler);
	}, []);

	return [loc, navigate];
};
