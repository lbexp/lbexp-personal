import { useState } from 'react';
import { Link } from '@remix-run/react';

import useScrollEvent from '~/hooks/use-scroll-event';
import { CONTACTS_ELEMENT_ID } from '~/models/common';

import styles from './styles.module.css';

export default function Header() {
	const [hideNav, setHideNav] = useState(false);

	useScrollEvent(() => {
		if (window.scrollY > 0) {
			setHideNav(true);
		} else {
			setHideNav(false);
		}
	});

	return (
		<>
			<div
				className={styles.container}
				{...(hideNav && { style: { transform: `translateY(-100%)` } })}
			>
				<div className={styles.wrapper}>
					<Link to="/" className={styles['logo-wrapper']}>
						<h1 className={styles.logo}>lbexp</h1>
					</Link>

					<nav className={styles.nav}>
						<Link to={`#${CONTACTS_ELEMENT_ID}`}>Contacts</Link>
					</nav>
				</div>

				<div className={styles.pin}>
					<div
						role="button"
						tabIndex={0}
						className={styles['pin-dot']}
						onClick={() => setHideNav(false)}
						onFocus={() => setHideNav(false)}
						onMouseEnter={() => setHideNav(false)}
						onKeyDown={() => setHideNav(false)}
					/>
				</div>
			</div>
			<span className={styles.spacer} />
		</>
	);
}
