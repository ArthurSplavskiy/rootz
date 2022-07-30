import styles from './Blog.module.scss';
import { IArticle } from '../../interfaces/article.interface';
import { useState } from 'react';
import { Modal } from '../../components';
import PlayIcon from './vectors/play-triangle.svg';

const articles: IArticle[] = [
	{ id: 0,  avatar: './avatar-01.png', tag: 'Stories', title: 'Travel In Japan: The True Experience' },
	{ id: 1, poster: './poster.png', tag: 'VideoTutor', title: 'Helping Wild Turtles', videoUrl: 'https://www.youtube.com/embed/VzgWGZH4RFQ' },
	{ id: 2, avatar: './avatar-02.png', tag: 'Photostory', title: 'Threats of Indusrial World' }
];

export const Blog = (): JSX.Element => {
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [videoUrl, setVideoUrl] = useState<string>('');

	const handleModal = (videoUrl: string | undefined): void => {
		setModalActive(true);
		videoUrl && setVideoUrl(videoUrl);
	};

	return (
		<>
			<section className={styles.blog}>
				<div className='container'>
					<div className={styles.grid}>
						{
							articles && articles.map(article => (
								<div className={styles.item} key={article.id}>
									{article.avatar && <img src={article.avatar} alt={article.title} />}
									{article.poster && <div className={styles.preview} onClick={(): void => handleModal(article.videoUrl)}>
										<div className={styles.videoPlay}>
											<PlayIcon />
										</div>
										<img src={article.poster} alt='poster' />
									</div>}
									<div className={styles.itemContent}>
										<div className={styles.itemTags}><span className={styles.itemTag}><span>#</span> {article.tag}</span></div>
										<h2>{article.title}</h2>
										<a href="#" onClick={(e):void => e.preventDefault()}>see more</a>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</section>
			<Modal active={modalActive} setActive={setModalActive}>
				<iframe width="600" height="345" src={videoUrl} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
			</Modal>
		</>
	);
};