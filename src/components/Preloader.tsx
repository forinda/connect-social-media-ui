import config from 'env';
import React from 'react';
import PageLoader from './PageLoader';
import { io } from "socket.io-client";

const Preloader = ({ children }: { children: React.ReactElement }) => {
	const [loaded, setLoaded] = React.useState<boolean>(false);
	const [isOnline, setIsOnline] = React.useState<boolean>(false);
	window.addEventListener('load', (e) => {
		setLoaded(true);
	});

	React.useEffect(() => {
		function offlineStatus() {
			window.navigator.onLine ? setIsOnline(true) : setIsOnline(false);
		}
		offlineStatus();
	}, [isOnline, loaded]);
	React.useEffect(() => {
		const socket = io(config.SOCKET_URL)
		socket.on('connect', () => {
			console.log("Socket conected");

		})
	}, [])
	return !loaded && isOnline ? (
		<PageLoader />
	) : (loaded && isOnline) || (loaded && config.ENV === 'development') ? (
		children
	) : (
		<div className='flex flex-col h-screen w-screen mx-auto items-center justify-center'>
			<h2>You are offline</h2>
		</div>
	);
};

export default React.memo(Preloader);
