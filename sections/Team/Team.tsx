import styles from './Team.module.scss';
import Blob1 from './person-01.svg';
import Blob2 from './person-02.svg';
import Blob3 from './person-03.svg';
import VectorIcon from './vector.svg';

export const Team = (): JSX.Element => {

	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h2>Our top team</h2>
						<p>Learn more about how you can save our planet's nature. </p>
					</div>
					<div className={styles.persons}>
						<VectorIcon className={styles.firstVector} />
						<Blob1 className={styles.firstBlob} />
						<Blob2 className={styles.secondBlob} />
						<Blob3 className={styles.thirdBlob} />
						<VectorIcon className={styles.secondVector} />
					</div>
				</div>
			</div>
		</section>
	);
};