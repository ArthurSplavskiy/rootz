import styles from './MobileMenu.module.scss';
import { MobileMenuProps } from './MobileMenu.props';
import cn from 'classnames';

export const MobileMenu = ({ className, ...props }: MobileMenuProps): JSX.Element => {

	const { active } = props;

	return (
		<div className={cn(className, styles.menu, {
			[styles.active]: active
		})}>
			<a href="/">Apply</a>
		</div>
	);
};
