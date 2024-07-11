import type { MetaFunction } from '@remix-run/node';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
			<Navbar />
			<h1>Welcome to Remix</h1>
			<Footer />
		</div>
	);
}
