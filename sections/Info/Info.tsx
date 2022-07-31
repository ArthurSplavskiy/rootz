import styles from './Info.module.scss';
import PersonIcon from './vectors/person.svg';
import CreditIcon from './vectors/credit.svg';
import WmIcon from './vectors/wm.svg';
import LeftLeafsIcon from './vectors/left-leafs.svg';
import RightLeafsIcon from './vectors/right-leafs.svg';
import LeftLeafsMobileIcon from './vectors/left-leafs-mobile.svg';
import RightLeafsMobileIcon from './vectors/right-leafs-mobile.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const Info = (): JSX.Element => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const leftLeafRef = useRef<HTMLDivElement>(null);
	const rightLeafRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const leftLeafPaths = leftLeafRef?.current?.children[0]?.children || '';
		const rightLeafPaths = rightLeafRef?.current?.children[0]?.children || '';
		gsap.from([leftLeafPaths, rightLeafPaths], {
			scale: 0,
			duration: 2,
			scrollTrigger: {
				trigger: sectionRef?.current,
				start: 'top center',
			}
		});
	}, []);

	return (
		<section ref={sectionRef} className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<LeftLeafsMobileIcon className={styles.leafsMobile} />
					<div className={styles.leafs} ref={leftLeafRef}>
						<LeftLeafsIcon  />
					</div>
					<div className={styles.content}>
						<h2>The scale of the challenges facing our planet can seem daunting, but we can all do something.</h2>
						<hr />
						<ul className={styles.infoList}>
							<li>
								<PersonIcon />
								<span>Assets value COMPOSer</span>
							</li>
							<li>
								<CreditIcon />
								<span>GRAPH BUDGET ANALYZER</span>
							</li>
							<li>
								<WmIcon />
								<span>MONTHLY AVG. REVENUE</span>
							</li>
						</ul>
					</div>
					<div className={styles.leafs} ref={rightLeafRef}>
						<RightLeafsIcon />
					</div>
					<RightLeafsMobileIcon className={styles.leafsMobile} />
				</div>
			</div>
		</section>
	);
};