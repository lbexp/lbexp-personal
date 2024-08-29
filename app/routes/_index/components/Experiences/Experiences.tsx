import { useState } from 'react';

import Modal from '~/components/Modal';
import { type Experience, EXPERIENCES } from '~/models/experience';

import styles from './styles.module.css';

function Item(props: {
	title: string;
	subtitle: string;
	date: string;
	active?: boolean;
	withLine?: boolean;
	onClick: () => void;
}) {
	const { active = false, date, subtitle, title, withLine = false, onClick } = props;

	return (
		<div
			className={styles['item-journey-wrapper']}
			role="button"
			tabIndex={0}
			onClick={onClick}
			onKeyUp={onClick}
		>
			<div>
				<span className={styles['item-journey-circle']} data-active={active} />
				{withLine ? <span className={styles['item-journey-line']} /> : null}
			</div>

			<div className={styles['item-journey-content-wrapper']}>
				<div className={styles['item-journey-content-value']}>
					<h3 className={styles['item-journey-title']}>{title}</h3>
					<h4 className={styles['item-journey-subtitle']}>{subtitle}</h4>
					<p className={styles['item-journey-time']}>{date}</p>
				</div>
				<span className={styles['item-journey-content-line']} />
			</div>
		</div>
	);
}

function ModalDetail({
	display,
	experience,
	onClose
}: {
	display: boolean;
	experience: Experience;
	onClose: () => void;
}) {
	if (!display) return null;

	return (
		<Modal className={styles['item-journey-modal-wrapper']} onClose={onClose}>
			<div className={styles['item-journey-content-value']}>
				<h3 className={styles['item-journey-title']}>{experience.title}</h3>
				<h4 className={styles['item-journey-subtitle']}>{experience.subtitle}</h4>
				<p className={styles['item-journey-time']}>{experience.date}</p>
				<p className={styles['item-journey-desc']}>{experience.desc}</p>
			</div>
		</Modal>
	);
}

export default function Experiences() {
	const [detail, setDetail] = useState<{ display: boolean; value: Experience }>({
		display: false,
		value: {
			date: '',
			desc: '',
			subtitle: '',
			title: ''
		}
	});

	const closeDetail = () => {
		setDetail((prev) => ({
			...prev,
			display: false
		}));
	};

	return (
		<>
			<section className={styles.wrapper}>
				<h2 className={styles.title}>
					<span className={styles['title-value']}>
						My journey&nbsp;
						<br className={styles['title-break']} />
						so far:
					</span>
				</h2>

				<div className={styles.content}>
					{EXPERIENCES.map((experience, index) => (
						<div key={index} className={styles['item-wrapper']}>
							<Item
								active={index === 0}
								date={experience.date}
								subtitle={experience.subtitle}
								title={experience.title}
								withLine={index + 1 !== EXPERIENCES.length}
								onClick={() => setDetail({ display: true, value: experience })}
							/>
						</div>
					))}
				</div>
			</section>

			<ModalDetail display={detail.display} experience={detail.value} onClose={closeDetail} />
		</>
	);
}
