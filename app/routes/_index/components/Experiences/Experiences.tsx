import { EXPERIENCES, type Experience } from '~/models/experience';
import styles from './styles.module.css';

function Item(props: Experience) {
	return (
		<div className={styles['item-journey-wrapper']}>
			<div className={styles['item-journey-content-wrapper']}>
				<div className={styles['item-journey-header']}>
					<h3 className={styles['item-journey-title']}>{props.title}</h3>
					<h4 className={styles['item-journey-subtitle']}>{props.subtitle}</h4>
					<p className={styles['item-journey-time']}>{props.time}</p>
				</div>
			</div>
		</div>
	);
}

export default function Experiences() {
	return (
		<section>
			<h2 className={styles.title}>My journey so far:</h2>

			<div className={styles.content}>
				{EXPERIENCES.map((experience, index) => (
					<Item key={index} {...experience} />
				))}
			</div>
		</section>
	);
}
