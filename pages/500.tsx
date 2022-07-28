import { withLayout } from '../layout/Layout';

export function Error500(): JSX.Element {

	return (
		<div className='container'>
			<h1>Помилка 500</h1>
		</div>
	);
}

export default withLayout(Error500);