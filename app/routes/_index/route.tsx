import { useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';

import useStyleScrollEvent from '~/hooks/use-style-scroll-event';

import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';
import Introduction from './components/Introduction';
import Experiences from './components/Experiences';

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
	useStyleScrollEvent();

	return (
		<>
			{/* <Navbar /> */}
			<Introduction />
			{/* <Experiences /> */}
			{/* <Footer /> */}
		</>
	);
}
