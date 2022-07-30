import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';
import cn from 'classnames';

export const Modal = ({ className, ...props }: ModalProps): JSX.Element => {

	const { active, setActive, children } = props;

	return (
		<div
			className={cn(className, styles.modal, {
				[styles.active]: active
			})} 
			onClick={(): void => setActive(false)}
		>
			<div
				className={styles.content}
				onClick={(e): void => e.stopPropagation()}
			>
				{active && children}
			</div>
		</div>
	);
};