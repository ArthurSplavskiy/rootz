import { Accordion, Button } from '../../components';
import styles from './Faq.module.scss';

interface IFaq {
	id: number;
	title: string;
	text: string;
}

const faqs: IFaq[] = [
	{ 
		id: 0, 
		title: 'What can I do to protect our planet?', 
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
	},
	{ 
		id: 1, 
		title: 'How to save nature ecology?', 
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
	},
	{ 
		id: 2, 
		title: 'What is nature conservation?', 
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
	}
];

export const Faq = (): JSX.Element => {

	return (
		<section className={styles.section}>
			<div className='container-small'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h2>Ready to Get started?</h2>
						<p>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
						<Button>Contact us</Button>
					</div>
					<div className={styles.faqs}>
						{faqs && faqs.map(faq => (
							<Accordion key={faq.id} title={faq.title}>{faq.text}</Accordion>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};