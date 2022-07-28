import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({
	appearance,
	children,
	className,
	arrow = 'none',
	...props
}: ButtonProps): JSX.Element => {
	return (
		<ArrowIcon />
	);
};
