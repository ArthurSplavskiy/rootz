import styles from './MobileMenu.module.scss';
import { MobileMenuProps } from './MobileMenu.props';
import cn from 'classnames';
import { ActiveLink } from '../../components';

export const MobileMenu = ({ className, ...props }: MobileMenuProps): JSX.Element => {

	const { active, menu } = props;

	return (
		<div className={cn(className, styles.menu, {
			[styles.open]: active
		})}>
			<ul className={styles.menuLinks}>
				{
					menu && menu.map(m => (
						<li key={m.id}>
							<ActiveLink href={m.route}>{m.title}</ActiveLink>
						</li>
					))
				}
			</ul>
			<a className={styles.menuBtn} href="/">Apply</a>
		</div>
	);
};
