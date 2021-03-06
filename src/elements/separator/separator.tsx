import React from 'react';
import classNames from 'classnames';
import styles from './separator.module.scss';

export type SeparatorProps = {
	/**
	 * set as vertical / horizontal separator
	 */
	layout: 'vertical' | 'horizontal',
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Separating line.
 *
 * Use these implicit CSS variables to style:
 * -   `--separator-color`
 * @name Separator
 * @example
 * <Separator />
 */
export function Separator({ layout, className, ...rest }: SeparatorProps) {
	return (
		<div
			data-bit-id="bit.base-ui/elements/separator"
			className={classNames(styles.separator, styles[layout], className)}
			{...rest}
		/>
	);
}

Separator.defaultProps = {
	layout: 'horizontal',
};
