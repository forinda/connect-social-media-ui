import React from 'react';
import PageLoader from './PageLoader';

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
	});
	return !loaded && isOnline ? (
		<PageLoader/>
	) : loaded && isOnline ? (
		children
	) : (
		<div className='flex flex-col h-screen w-screen mx-auto items-center justify-center'>
        </div>
	);
};

export default React.memo(Preloader);
