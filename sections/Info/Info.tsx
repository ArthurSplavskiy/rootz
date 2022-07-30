import styles from './Info.module.scss';
import PersonIcon from './vectors/person.svg';
import CreditIcon from './vectors/credit.svg';
import WmIcon from './vectors/wm.svg';
import LeftLeafsIcon from './vectors/left-leafs.svg';
import RightLeafsIcon from './vectors/right-leafs.svg';
import LeftLeafsMobileIcon from './vectors/left-leafs-mobile.svg';
import RightLeafsMobileIcon from './vectors/right-leafs-mobile.svg';

export const Info = (): JSX.Element => {

	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<LeftLeafsMobileIcon className={styles.leafsMobile} />
					<LeftLeafsIcon className={styles.leafs} />
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
					<RightLeafsIcon className={styles.leafs} />
					<RightLeafsMobileIcon className={styles.leafsMobile} />
				</div>
			</div>
		</section>
	);
};