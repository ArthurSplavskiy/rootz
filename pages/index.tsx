import { withLayout } from '../layout/Layout';
import { Blog, Faq, FirstSlider, Form, Hero, Info, SecondSlider, Team } from '../sections';

function Home() {
	return (
		<>
			<Hero />
			<Blog />
			<FirstSlider />
			<Team />
			<Info />
			<Form />
			<Faq />
			<SecondSlider />
		</>
	);
}

export default withLayout(Home);
