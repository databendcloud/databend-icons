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
const FolderIcon: FC<IProps | any> = props => {
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
      <path d="M2.083 3.333c0-.46.373-.833.834-.833h5L10 5h7.083c.46 0 .834.373.834.833v10.834c0 .46-.373.833-.834.833H2.917a.833.833 0 01-.834-.833V3.333z"></path>
      <path d="M5.833 9.167l2.084 2.083-2.084 2.083"></path>
      <path d="M10.833 13.333h3.334"></path>
    </svg>
  );
};

FolderIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default FolderIcon;
