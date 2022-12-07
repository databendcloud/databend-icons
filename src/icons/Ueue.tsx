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
const UeueIcon: FC<IProps | any> = props => {
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
      <path d="M10 12.333V10"></path>
      <path d="M3 12.333h14V17H3v-4.667z"></path>
      <path d="M3 5.528v-.39"></path>
      <path d="M3 7.667v-.39"></path>
      <path d="M3 3.389V3"></path>
      <path d="M17 5.528v-.39"></path>
      <path d="M17 7.667v-.39"></path>
      <path d="M17 3.389V3"></path>
      <path d="M17 7.667h-.389"></path>
      <path d="M3.389 7.667H3"></path>
      <path d="M3.389 3H3"></path>
      <path d="M6.111 3h-.389"></path>
      <path d="M8.833 3h-.389"></path>
      <path d="M8.833 7.667h-.389"></path>
      <path d="M11.556 3h-.39"></path>
      <path d="M6.111 7.667h-.389"></path>
      <path d="M11.556 7.667h-.39"></path>
      <path d="M14.278 3h-.39"></path>
      <path d="M14.278 7.667h-.39"></path>
      <path d="M17 3h-.389"></path>
    </svg>
  );
};

UeueIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default UeueIcon;
