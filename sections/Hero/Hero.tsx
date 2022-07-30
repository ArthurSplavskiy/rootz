import { useForm } from 'react-hook-form';
import styles from './Hero.module.scss';
import Headline from './vectors/headline.svg';
import Parrot from './vectors/parrot.svg';
import HeroCard from './vectors/herocard.svg';
import { Button, Input } from '../../components';
import { ISearchForm } from '../../interfaces/form.interface';
import MarkerIcon from './vectors/marker.svg';
import LeafIcon1 from './vectors/leaf-01.svg';
import LeafIcon2 from './vectors/leaf-02.svg';
import LeafIcon3 from './vectors/leaf-03.svg';
import LeafIcon4 from './vectors/leaf-04.svg';
import LeafIcon5 from './vectors/leaf-05.svg';
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { useEffect, useRef } from 'react';
import cn from 'classnames';
import gsap from 'gsap';

export const Hero = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<ISearchForm>();
	const heroMediaRef = useRef<HTMLDivElement>(null);
	const heroHeadlineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		heroMediaRef?.current?.classList.add('heroAnimateStart');
		if(heroHeadlineRef?.current?.children[0]) {
			const svgPath = heroHeadlineRef?.current?.children[0].children;
			gsap.fromTo(svgPath, { scale: 0 }, { scale: 1, stagger: 0.1 });
		}
	}, []);

	const onSubmit = async (formData: ISearchForm): Promise<void> => {
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

	return (
		<div className={styles.hero}>
			<div className='container'>
				<div className={styles.heroWrapper}>
					<div className={styles.heroText}>
						<div ref={heroHeadlineRef}>
							<Headline  className={styles.heroHeadline} />
						</div>
						<p>The scale of the challenges facing our planet can seem daunting, but we can all do something.</p>
						<form className={styles.searchForm} onSubmit={handleSubmit(onSubmit)}>
							<MarkerIcon />
							<Input
								{...register('name')}
								placeholder="Find the place to help"
								error={errors.name}
								aria-invalid={errors.name ? true : false}
							/>
							<Button onClick={(): void => clearErrors()}>search</Button>
						</form>
					</div>
					<div ref={heroMediaRef} className={styles.heroMedia}>
						<MouseParallaxContainer
							className='parallax'
						>
							<Parrot className={styles.heroParrot} />
							<div className={styles.heroCard}>
								<div className={styles.heroCardWrapper}>
									<HeroCard className={styles.heroCardSvg} />
									<div className={styles.heroCardText}>
										<span>Members</span>
										<span>29 128</span>
									</div>
								</div>
							</div>
							<MouseParallaxChild
								factorX={0.1}
								factorY={0.05}
								className={cn(styles.heroLeaf1, 'leaf1')}
							>
								<LeafIcon1 />
							</MouseParallaxChild>
							<MouseParallaxChild
								factorX={0.05}
								factorY={0.12}
								className={cn(styles.heroLeaf2, 'leaf2')}
							>
								<LeafIcon2 />
							</MouseParallaxChild>
							<MouseParallaxChild
								factorX={0.13}
								factorY={0.04}
								className={cn(styles.heroLeaf3, 'leaf3')}
							>
							<LeafIcon3 />
							</MouseParallaxChild>
							<MouseParallaxChild
								factorX={0.19}
								factorY={0.15}
								className={cn(styles.heroLeaf4, 'leaf4')}
							>
								<LeafIcon4 />
							</MouseParallaxChild>
							<MouseParallaxChild
								factorX={0.08}
								factorY={0.1}
								className={cn(styles.heroLeaf5, 'leaf5')}
							>
								<LeafIcon5 />
							</MouseParallaxChild>
						</MouseParallaxContainer>
					</div>
				</div>
			</div>
		</div>
	);
};