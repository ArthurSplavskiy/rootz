import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenu } from '../../interfaces/menu.interface';

export interface MobileMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	menu: IMenu[];
	active: boolean;
	setActive?: () => void;
}
