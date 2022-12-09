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
function SlackIcon(props) {
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
      <g
        clipPath="url(#clip0_303_60)"
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity=".8"
      >
        <path d="M7.855 2c-.883 0-1.597.717-1.597 1.6 0 .882.715 1.599 1.597 1.6h1.597V3.6A1.6 1.6 0 007.855 2zm0 4.267H3.597c-.883 0-1.598.717-1.597 1.6a1.598 1.598 0 001.596 1.6h4.259c.882-.001 1.597-.717 1.597-1.6 0-.883-.715-1.6-1.597-1.6z"></path>
        <path d="M17.968 7.866c0-.882-.714-1.599-1.597-1.6-.883.001-1.598.718-1.597 1.6v1.6h1.597c.883 0 1.598-.716 1.597-1.6zm-4.258 0V3.6c0-.882-.714-1.599-1.597-1.6-.882 0-1.597.717-1.597 1.6v4.266a1.598 1.598 0 001.597 1.6c.883 0 1.598-.716 1.597-1.6z"></path>
        <path d="M12.113 18c.883 0 1.598-.717 1.597-1.6 0-.882-.715-1.599-1.597-1.6h-1.597v1.6a1.6 1.6 0 001.597 1.6zm0-4.267h4.258c.883-.001 1.598-.717 1.597-1.6a1.598 1.598 0 00-1.596-1.6h-4.259c-.882 0-1.597.717-1.597 1.6 0 .883.714 1.599 1.597 1.6z"></path>
        <path d="M2 12.133c0 .883.714 1.599 1.597 1.6.883-.001 1.598-.717 1.597-1.6v-1.6H3.597c-.883.001-1.598.717-1.597 1.6zm4.258 0V16.4A1.598 1.598 0 007.855 18c.882 0 1.597-.717 1.597-1.6v-4.266a1.597 1.597 0 10-3.193-.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_303_60">
          <rect width="15.968" height="16" transform="translate(2 2)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

SlackIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SlackIcon;
