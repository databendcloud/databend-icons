import React from 'react';
// import { FC } from 'react';
import clsx from 'clsx';
/*interface IProps{
    style?: React.CSSProperties;
    className?: string | 'g-icon-defaut-primary';
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode[] | React.ReactNode;
    color: string;
    size: string | number;
  }*/
function DownloadIcon(props) {
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
        clipRule="evenodd"
        d="M10 12.083l-5-5h3.333V2.5h3.334v4.583H15l-5 5z"
      ></path>
      <path d="M17.5 15.417h-15"></path>
      <path d="M14.167 18.333H5.833"></path>
    </svg>
  );
}

DownloadIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DownloadIcon;
