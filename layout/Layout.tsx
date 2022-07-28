import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {

	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<main className={styles.main} tabIndex={0} role='main'>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): typeof Component => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};