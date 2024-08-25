import { PROJECTS } from '~/models/project';
import styles from './styles.module.css';

export default function Projects() {
	return (
		<section>
			<h2 className={styles.title}>Projects I&apos;ve professionally worked on:</h2>

			<div className={styles.content}>
				{PROJECTS.map((project, projectIndex) => {
					const isRightAlign = Boolean(projectIndex % 2);

					return (
						<div
							className={`${styles['item-project-wrapper']}${
								isRightAlign ? ` ${styles['justify-end']}` : ''
							}`}
							key={projectIndex}
						>
							{!isRightAlign && <span className={styles['item-journey-app']}>🕸</span>}

							<div className={styles['item-project-content-wrapper']}>
								<div className={styles['item-project-header']}>
									<h3
										className={`${styles['item-project-title']}${
											isRightAlign ? ` ${styles['text-end']}` : ''
										}`}
									>
										{project.title} ({project.scope})
									</h3>
									<h4
										className={`${styles['item-project-stack']}${
											isRightAlign ? ` ${styles['text-end']}` : ''
										}`}
									>
										{project.stacks.map((stack, stackIndex) => (
											<span key={stackIndex}>{(stackIndex ? ' - ' : '') + stack}</span>
										))}
									</h4>
								</div>
								<p
									className={`${styles['item-project-desc']}${
										isRightAlign ? ` ${styles['text-end']}` : ''
									}`}
								>
									{project.desc}
								</p>
							</div>

							{isRightAlign && <span className={styles['item-journey-app']}>🕸</span>}
						</div>
					);
				})}
			</div>
		</section>
	);
}
