import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import TwitterIcon from './twitter-ic.svg';
import FacebookIcon from './facebook-ic.svg';
import InIcon from './in-ic.svg';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div className='container'>
				<div className={styles.footerWrapper}>
					<div className={styles.footerColumn}>
						<h2 className={styles.footerBigTitle}>Contacts</h2>
						<span>2019 Rootz Foundation. All rights reserved</span>
					</div>
					<div className={styles.footerColumn}>
						<h2>Headquarters</h2>
						<span>1234 Taliban <br /> Los Angeles, La 1234567</span>
						<a className={styles.footerLink} href="tel:1234567890">(123) 456-7890</a>
					</div>
					<div className={styles.footerColumn}>
						<h2>Social media</h2>
						<ul className={styles.footerSocialList}>
							<li>
								<a className={styles.footerSocialLink} href="https://twitter.com" target='_blank'>
									<TwitterIcon />
								</a>
							</li>
							<li>
								<a className={styles.footerSocialLink} href="https://facebook.com" target='_blank'>
									<FacebookIcon />
								</a>
							</li>
							<li>
								<a className={styles.footerSocialLink} href="https://linkedin.com" target='_blank'>
									<InIcon />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
