import { useEffect } from 'react';
import styles from './styles.module.css';

export default function Introduction() {
	return (
		<div className={styles.wrapper}>
			<div className={styles['title-wrapper']}>
				<h2 className={styles.title}>SOFTWARE ENGINEER - BASED IN INDONESIA -</h2>
			</div>

			<h1 className={styles.name}>FIQAR APRIALIM</h1>

			<div className={styles['title-wrapper']}>
				<h2 className={styles.title}>BASED IN INDONESIA - SOFTWARE ENGINEER -</h2>
			</div>
			<div className={styles.transition} />
		</div>
	);
}
