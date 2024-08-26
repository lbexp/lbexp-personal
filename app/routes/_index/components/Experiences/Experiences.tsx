import { EXPERIENCES } from '~/models/experience';
import styles from './styles.module.css';

function Item(props: {
	title: string;
	subtitle: string;
	date: string;
	active?: boolean;
	withLine?: boolean;
}) {
	const { active = false, date, subtitle, title, withLine = false } = props;

	return (
		<div className={styles['item-journey-wrapper']}>
			<span className={styles['item-journey-circle']} data-active={active} />
			{withLine ? <span className={styles['item-journey-line']} /> : null}

			<div className={styles['item-journey-content-wrapper']}>
				<div className={styles['item-journey-header']}>
					<h3 className={styles['item-journey-title']}>{title}</h3>
					<h4 className={styles['item-journey-subtitle']}>{subtitle}</h4>
					<p className={styles['item-journey-time']}>{date}</p>
				</div>
			</div>
		</div>
	);
}

export default function Experiences() {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>
				My journey
				<br />
				so far:
			</h2>

			<div className={styles.content}>
				{EXPERIENCES.map((experience, index) => (
					<Item
						key={index}
						active={index === 0}
						date={experience.date}
						subtitle={experience.subtitle}
						title={experience.title}
						withLine={index + 1 !== EXPERIENCES.length}
					/>
				))}
			</div>
		</section>
	);
}
