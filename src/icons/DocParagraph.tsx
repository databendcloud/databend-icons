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
const DocParagraphIcon: FC<IProps | any> = props => {
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
      <path d="M10 5h6"></path>
      <path d="M10 8.333h6"></path>
      <path d="M4 11.667h12"></path>
      <path d="M4 15h12"></path>
      <path d="M6.596 7.417H4.738l.929-1.858.929 1.858z"></path>
      <path d="M4 8.333l.333-.666m3 .666L7 7.667m-2.667 0L5.667 5 7 7.667m-2.667 0H7"></path>
    </svg>
  );
};

DocParagraphIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DocParagraphIcon;
