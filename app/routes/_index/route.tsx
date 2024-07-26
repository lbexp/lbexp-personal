import { useEffect } from 'react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';

import useStyleScrollEvent from '~/hooks/use-style-scroll-event';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Introduction, { links as introductionLinks } from './components/Introduction';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

import styles from './styles.module.css';

export const meta: MetaFunction = () => {
	return [{ title: 'Lbexp' }, { name: 'description', content: "Lbexp's site" }];
};

export const links: LinksFunction = () => [...introductionLinks()];

export default function Index() {
	// useStyleScrollEvent();

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
				<section className={styles.section} id="projects">
					<Projects />
				</section>
			</div>
			<Footer />
		</>
	);
}
