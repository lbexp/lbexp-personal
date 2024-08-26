import type { LinksFunction, MetaFunction } from '@remix-run/node';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Introduction, { links as introductionLinks } from './components/Introduction';
import Experiences from './components/Experiences';

import styles from './styles.module.css';

export const meta: MetaFunction = () => {
	return [{ title: 'Lbexp' }, { name: 'description', content: "Lbexp's site" }];
};

export const links: LinksFunction = () => [...introductionLinks()];

export default function Index() {
	return (
		<>
			<Header />
			<div className={styles['content-wrapper']}>
				<section className={styles.section} id="introduction">
					<Introduction />
				</section>
				<section className={styles.section} id="experiences">
					<Experiences />
				</section>
			</div>
			<Footer />
		</>
	);
}
