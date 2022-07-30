import { useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import { AccordionProps } from './Accordion.props';
import cn from 'classnames';

export const Accordion = ({ ...props }: AccordionProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const content = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>('0px');

  const { title, children } = props;

  const toggleAccordion = (): void => {
    setActive(!active);
    setHeight(active ? '0px' : `${content?.current?.scrollHeight}px`);
  };

  return (
    <div className={styles.accordion}>
      <div
        className={cn(styles.title, {
			[styles.active]: active
		})}
        onClick={toggleAccordion}
      >
        <p>{title}</p>
        <span className={styles.flag}>{active ? '-' : '+'}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={styles.content}
      >
        {children}
      </div>
    </div>
  );
};
