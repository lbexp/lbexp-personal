import { EXPERIENCES } from '~/routes/_index/constants';
import styles from './styles.module.css';

export default function Experiences() {
	return (
		<section>
			<h2 className={styles.title}>My journey so far:</h2>

			<div className={styles.content}>
				{EXPERIENCES.map((experience) => (
					<div className={styles['item-journey-wrapper']}>
						<div className={styles['item-journey-content-wrapper']}>
							<div className={styles['item-journey-header']}>
								<h3 className={styles['item-journey-title']}>{experience.title}</h3>
								<h4 className={styles['item-journey-subtitle']}>{experience.subtitle}</h4>
								<p className={styles['item-journey-time']}>{experience.time}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
