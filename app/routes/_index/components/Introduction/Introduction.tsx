import { LinksFunction } from '@remix-run/node';

import injectedStyles from './styles.css?url';
import styles from './styles.module.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: injectedStyles }];

export default function Introduction() {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>
				{Array.from("Fiqar 'lbexp' Aprialim").map((char, index) => (
					<span
						key={index}
						style={{
							display: 'inline-block',
							animation: `textdrop 0.5s ease ${index / 20}s normal both`
						}}
						dangerouslySetInnerHTML={{ __html: char === ' ' ? '&nbsp;' : char }}
					/>
				))}
			</h2>
			<p className={styles.desc}>Software Engineer based in Indonesia</p>
		</section>
	);
}
