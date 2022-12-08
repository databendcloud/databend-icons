import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps {
  style?: React.CSSProperties;
  className?: string | 'g-icon-defaut-primary';
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode[] | React.ReactNode;
  color: string;
  size: string | number;
}
const FieldDelimiterIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      {...otherProps}
    >
      <path d="M4 3v14"></path>
      <path d="M16.6 3v14"></path>
      <path d="M6.8 6.85h7"></path>
      <path d="M6.8 13.15h9.8"></path>
    </svg>
  );
};

FieldDelimiterIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default FieldDelimiterIcon;
