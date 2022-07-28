import { useRouter } from 'next/router';
import { ActiveLinkProps } from './ActiveLink.props';

export const ActiveLink = ({ children, href }: ActiveLinkProps): JSX.Element => {
	const router = useRouter();

	const style = {
		fontWeight: router.asPath === href ? 700 : 400
	};

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	);
};