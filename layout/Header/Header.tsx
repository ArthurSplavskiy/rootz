import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../logo.svg';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { IMenu } from '../../interfaces/menu.interface';
import { useState } from 'react';
import { ActiveLink } from '../../components';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const menuLinks: IMenu[] = [
	{ id: 0, title: 'Home', route: '/' },
	{ id: 1, title: 'Our mission', route: '/mission' },
	{ id: 2, title: 'Places', route: '/places' },
	{ id: 3, title: 'Team', route: '/team' }
];

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [menuActive, setMenuActive] = useState<boolean>(false);
	const [logoOnHover, setLogoOnHover] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		headerRef?.current?.classList.add('headerAnimateStart');
	}, []);

	const hoverOnLogo = (): void => setLogoOnHover(true);
	const leaveOnLogo = (): void => setLogoOnHover(false);
	
	return (
		<>
			<header ref={headerRef} className={cn(className, styles.header)} {...props}>
				<div className='container'>
					<div className={cn(styles.headerWrapper, 'headerWrapper')}>
						<Link href="/">
							<a
								ref={logoRef}
								className={cn(styles.headerLogo, {
									[styles.logoOnHover]: logoOnHover
								})}
								aria-label='Rootz logotype'
								onMouseEnter={hoverOnLogo}
								onMouseLeave={leaveOnLogo}
							>
								<Logo />
							</a>
						</Link>
						<div className={styles.headerActions}>
							<nav className={styles.headerNav} aria-label='Main navigation'>
								<ul>
									{
										menuLinks && menuLinks.map(m => (
											<li key={m.id}>
												<ActiveLink href={m.route}>{m.title}</ActiveLink>
											</li>
										))
									}
								</ul>
							</nav>
							<a className={styles.headerBtn} href="/">Apply</a>
						</div>
						<div className={cn(styles.burgerBtn, {
							[styles.open]: menuActive
						})} onClick={(): void => setMenuActive(!menuActive)}>
							<span></span>
						</div>
					</div>
				</div>
			</header>
			<MobileMenu menu={menuLinks} active={menuActive} />
		</>
	);
};
