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
const PreferencesIcon: FC<IProps | any> = props => {
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
      <path d="M17.292 4.167h-2.5"></path>
      <path d="M11.458 2.5v3.333"></path>
      <path d="M11.458 4.167H2.292"></path>
      <path d="M5.625 10H2.292"></path>
      <path d="M8.958 8.333v3.334"></path>
      <path d="M18.125 10H8.958"></path>
      <path d="M17.292 15.833h-2.5"></path>
      <path d="M11.458 14.167V17.5"></path>
      <path d="M11.458 15.833H2.292"></path>
    </svg>
  );
};

PreferencesIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default PreferencesIcon;
