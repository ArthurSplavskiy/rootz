import { withLayout } from '../layout/Layout';

export function Error404(): JSX.Element {

	return (
		<div className='container'>
			<h1>Помилка 404</h1>
		</div>
	);
}

export default withLayout(Error404);