import { useEffect } from 'react';

function useScrollEvent(onScroll: () => void) {
	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);
}

export default useScrollEvent;
