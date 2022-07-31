import styles from './Team.module.scss';
import Blob1 from './vectors/person-first.svg';
import Blob2 from './vectors/person-second.svg';
import Blob3 from './vectors/person-third.svg';
import VectorIcon from './vectors/vector.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const Team = (): JSX.Element => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const blob1Ref = useRef<HTMLDivElement>(null);
	const blob2Ref = useRef<HTMLDivElement>(null);
	const blob3Ref = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.from(blob1Ref?.current, {
			y: -100,
			scrollTrigger: {
				trigger: sectionRef?.current,
				start: 'top bottom',
				end: () => '+=1000',
				scrub: true
			}
		});
		gsap.from(blob2Ref?.current, {
			y: 200,
			scrollTrigger: {
				trigger: sectionRef?.current,
				start: 'top bottom',
				end: () => '+=800',
				scrub: true,
			}
		});
		gsap.from(blob3Ref?.current, {
			y: -150,
			scrollTrigger: {
				trigger: sectionRef?.current,
				start: 'top bottom',
				end: () => '+=900',
				scrub: true,
			}
		});
	}, []);

	return (
		<section ref={sectionRef} className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h2>Our top team</h2>
						<p>Learn more about how you can save our planet's nature. </p>
					</div>
					<div className={styles.persons}>
						<VectorIcon className={styles.firstVector} />
						<div ref={blob1Ref} className={styles.firstBlob}>
							<Blob1 />
						</div>
						<div ref={blob2Ref} className={styles.secondBlob}>
							<Blob2 />
						</div>
						<div ref={blob3Ref} className={styles.thirdBlob}>
							<Blob3 />
						</div>
						<VectorIcon className={styles.secondVector} />
					</div>
				</div>
			</div>
		</section>
	);
};