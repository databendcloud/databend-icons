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
const CollaboratorsIcon: FC<IProps | any> = props => {
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
      <path d="M7.917 8.333a2.917 2.917 0 100-5.833 2.917 2.917 0 000 5.833z"></path>
      <path d="M13.586 2.917a2.915 2.915 0 010 5"></path>
      <path d="M1.667 17v.5h12.5V17c0-1.867 0-2.8-.364-3.513a3.333 3.333 0 00-1.456-1.457c-.713-.363-1.647-.363-3.514-.363H7c-1.867 0-2.8 0-3.513.363-.628.32-1.137.83-1.457 1.457-.363.713-.363 1.646-.363 3.513z"></path>
      <path d="M18.333 17.5V17c0-1.867 0-2.8-.363-3.513a3.333 3.333 0 00-1.457-1.457"></path>
    </svg>
  );
};

CollaboratorsIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default CollaboratorsIcon;
