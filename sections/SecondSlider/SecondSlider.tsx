import styles from './SecondSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import cn from 'classnames';
import { ReactNode, useRef, useState } from 'react';
import ArrowIcon from './vectors/arrow.svg';
import BlobImage1 from './vectors/blob1.svg';
import BlobImage2 from './vectors/blob2.svg';
import BlobImage3 from './vectors/blob3.svg';
import BlobImage4 from './vectors/blob4.svg';
import BlobImage5 from './vectors/blob5.svg';
import BlobBg from './vectors/blobBg.svg';

interface ISlide {
	id: number;
	title: string;
	text: string;
	image: ReactNode;
}

const slides: ISlide[] = [
	{
		id: 0, 
		title: 'Avoid plastic', 
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		image: <BlobImage1 />
	},
	{
		id: 1, 
		title: 'Choose organic', 
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		image: <BlobImage2 />
	},
	{
		id: 2, 
		title: 'Save watter', 
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		image: <BlobImage3 />
	},
	{
		id: 3, 
		title: 'Plant trees', 
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		image: <BlobImage4 />
	},
	{
		id: 4, 
		title: 'Save energy', 
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		image: <BlobImage5 />
	}
];

export const SecondSlider = (): JSX.Element => {
	const prevBtn = useRef<HTMLButtonElement>(null);
	const nextBtn = useRef<HTMLButtonElement>(null);
	const [activeIndex, setActiveIndex] = useState<number>(1);

	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.sectionWrapper}>
					<div className={styles.sliderPagination}>
						<button className={styles.prev} ref={prevBtn}>
							<ArrowIcon />
						</button>
						<div>
							{activeIndex}
							/
							{slides.length}
						</div>
						<button className={styles.next} ref={nextBtn}>
							<ArrowIcon />
						</button>
					</div>
					<Swiper
						className={styles.slider}
						modules={[Navigation]}
						speed={1000}
						navigation={{
							prevEl: prevBtn.current,
							nextEl: nextBtn.current,
						}}
						spaceBetween={72}
						centeredSlides={true}
						pagination={{ clickable: true }}
						slidesPerView={'auto'}
						onBeforeInit={(swiper: any): void => {
							swiper.params.navigation.prevEl = prevBtn.current;
							swiper.params.navigation.nextEl = nextBtn.current;
						}}
						onSlideChange={(swiper): void => setActiveIndex(swiper.activeIndex + 1)}
					>
						{slides && slides.map(slide => (
							<SwiperSlide key={slide.id} className={styles.swiperSlide}>
								{({ isActive }: any): JSX.Element => (
									<div className={cn(styles.slide)}>
										<div className={cn(styles.slideImage, {
											[styles.isSmall]: isActive
										})}>
											{slide.image}
										</div>
										<div className={cn(styles.slideBg, {
											[styles.isView]: isActive
										})}>
											<BlobBg />
										</div>
										<div className={styles.slideContent}>
											<h3 className={cn({
												[styles.changeColor]: isActive 
											})}>{slide.title}</h3>
											<p className={cn({
												[styles.onTop]: isActive 
											})}>{slide.text}</p>
										</div>
									</div>
								)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};