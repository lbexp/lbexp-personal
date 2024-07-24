import { useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';

import useStyleScrollEvent from '~/hooks/use-style-scroll-event';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Introduction from './components/Introduction';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

import styles from './styles.module.css';

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
	useStyleScrollEvent();

	return (
		<div className={styles.wrapper}>
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
		</div>
	);
}
