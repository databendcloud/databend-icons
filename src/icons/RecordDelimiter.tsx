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
const RecordDelimiterIcon: FC<IProps | any> = props => {
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
      <path d="M3 10.158h14"></path>
      <path d="M8.895 15.316h2.21"></path>
      <path d="M14.79 15.316H17"></path>
      <path d="M8.895 5h2.21"></path>
      <path d="M3 15.316h2.21"></path>
      <path d="M3 5h2.21"></path>
      <path d="M14.79 5H17"></path>
    </svg>
  );
};

RecordDelimiterIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default RecordDelimiterIcon;
