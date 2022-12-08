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
const CheckIcon: FC<IProps | any> = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.667 10L3.75 7.917l4.167 4.166L16.25 3.75l2.083 2.083L7.917 16.25 1.667 10z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

CheckIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default CheckIcon;
