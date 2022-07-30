import styles from './FirstSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import MockIcon from './vectors/mock.svg';
import cn from 'classnames';
import { ReactNode, useRef } from 'react';
import ArrowIcon from './vectors/arrow.svg';

enum SlideColors {
	ORANGE = 'orange',
	RED = 'red',
	PURPLE = 'purple'
}

interface ISlide {
	id: number;
	title: string;
	text: string;
	image: ReactNode;
	color: SlideColors;
}

const slides: ISlide[] = [
	{
		id: 0, 
		title: 'Travel In Japan: The True Experience', 
		text: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
		image: <MockIcon />,
		color: SlideColors.ORANGE
	},
	{
		id: 1, 
		title: 'Helping Wild Turtles To Travel In Japan', 
		text: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
		image: <MockIcon />,
		color: SlideColors.RED
	},
	{
		id: 2, 
		title: 'Threats of Modern Indusrial World', 
		text: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
		image: <MockIcon />,
		color: SlideColors.PURPLE
	}
];

export const FirstSlider = (): JSX.Element => {
	const prevBtn = useRef<HTMLButtonElement>(null);
	const nextBtn = useRef<HTMLButtonElement>(null);

	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.sectionWrapper}>
					<button className={styles.prev} ref={prevBtn}>
						<ArrowIcon />
					</button>
					<button className={styles.next} ref={nextBtn}>
						<ArrowIcon />
					</button>
					<Swiper
						className={styles.slider}
						modules={[Navigation, Pagination ]}
						speed={1000}
						navigation={{
							prevEl: prevBtn.current,
							nextEl: nextBtn.current,
						}}
						pagination={{ clickable: true }}
						slidesPerView={1}
						onBeforeInit={(swiper: any): void => {
							swiper.params.navigation.prevEl = prevBtn.current;
							swiper.params.navigation.nextEl = nextBtn.current;
						}}
					>
						{slides && slides.map(slide => (
							<SwiperSlide key={slide.id}>
								<div className={cn(styles.slide, {
									[styles.slideOrange]: slide.color === SlideColors.ORANGE,
									[styles.slideRed]: slide.color === SlideColors.RED,
									[styles.slidePurple]: slide.color === SlideColors.PURPLE
								})}>
									<div className={styles.slideContent}>
										<h2>{slide.title}</h2>
										<p>{slide.text}</p>
									</div>
									{slide.image}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};