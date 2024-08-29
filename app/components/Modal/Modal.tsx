import { type ReactNode, useState } from 'react';
import styles from './styles.module.css';

interface ModalProps {
	children: ReactNode | ((props: { close: () => void }) => ReactNode);
	className?: string;
	onClose: () => void;
}

export default function Modal(props: ModalProps) {
	const { children, className = '', onClose } = props;
	const [display, setDisplay] = useState(true);

	const handleClose = () => {
		setDisplay(false);
		setTimeout(() => {
			onClose();
		}, 300);
	};

	return (
		<div
			role="button"
			tabIndex={0}
			className={`${styles.overlay}${display ? ` ${styles.active}` : ''}`}
			onClick={handleClose}
			onKeyUp={handleClose}
		>
			<style dangerouslySetInnerHTML={{ __html: 'body { overflow: hidden }' }} />

			<div
				role="button"
				tabIndex={-1}
				className={`${styles.wrapper}${display ? ` ${styles.active}` : ''}${
					className ? ` ${className}` : ''
				}`}
				onClick={(event) => event.stopPropagation()}
				onKeyUp={(event) => event.stopPropagation()}
			>
				<button className={styles.close} onClick={handleClose}>
					❌
				</button>
				{typeof children === 'function' ? children({ close: handleClose }) : children}
			</div>
		</div>
	);
}
