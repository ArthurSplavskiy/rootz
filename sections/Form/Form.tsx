import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../interfaces/form.interface';
import { Button, Input } from '../../components';
import LeafsIcon from './vectors/leafs.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

export const Form = (): JSX.Element => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const leafRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(ScrollTrigger);

	const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<ILoginForm>();

	const onSubmit = async (formData: ILoginForm): Promise<void> => {
		try {
			const data = 'send on server';
			// send on server

			if(data) {
				reset();
			} else {
				// set error
			}
		} catch (e) {
			if(e instanceof Error) {
				// set error
			}
		}
	};

	useEffect(() => {
		const leafPaths = leafRef?.current?.children[0]?.children || '';
		gsap.from(leafPaths, {
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
			<div className={styles.content}>
				<div className={styles.text}>
					<h2>Get started today!</h2>
					<p>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
				</div>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div ref={leafRef} className={styles.leafs} >
						<LeafsIcon  />
					</div>
					<h3>Log in</h3>
					<Input
						{...register('name')}
						placeholder="Name"
						error={errors.name}
						aria-invalid={errors.name ? true : false}
					/>
					<Input
						{...register('email')}
						placeholder="Email"
						error={errors.email}
						aria-invalid={errors.email ? true : false}
					/>
					<Button onClick={(): void => clearErrors()}>Book a demo</Button>
				</form>
			</div>
		</section>
	);
};