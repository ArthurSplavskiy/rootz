import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';

export interface ActiveLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	children: ReactNode;
	href: string;
}
