import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	active: boolean;
	setActive: (active: boolean) => void;
}