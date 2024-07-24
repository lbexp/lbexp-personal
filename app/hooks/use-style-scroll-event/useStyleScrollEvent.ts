import { useEffect } from 'react';

export default function useStyleScrollEvent() {
	useEffect(() => {
		document.body.style.setProperty(
			'--scroll',
			window.scrollY / (document.body.offsetHeight - window.innerHeight)
		);

		const onScroll = () => {
			document.body.style.setProperty(
				'--scroll',
				window.scrollY / (document.body.offsetHeight - window.innerHeight)
			);
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
}
