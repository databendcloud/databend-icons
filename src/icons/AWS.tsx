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
const AwsIcon: FC<IProps | any> = props => {
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
        d="M6.51 9.075c-.018.567.265.817.272.977a.204.204 0 01-.102.156l-.32.224a.267.267 0 01-.141.048c-.01 0-.205.046-.512-.64a1.965 1.965 0 01-1.565.736c-.407.022-1.51-.23-1.453-1.405-.04-.957.851-1.551 1.773-1.501.177 0 .54.009 1.175.157v-.391c.067-.661-.368-1.175-1.12-1.098-.06 0-.486-.012-1.147.253-.184.085-.207.07-.268.07-.186 0-.11-.536-.074-.604.13-.16.897-.46 1.649-.455a1.921 1.921 0 011.392.432 1.757 1.757 0 01.442 1.309v1.732zm-2.16.81c.81-.012 1.154-.5 1.232-.762.062-.251.051-.41.051-.685a4.297 4.297 0 00-.989-.121c-.378-.029-1.07.14-1.043.806a.694.694 0 00.749.762zm4.273.576c-.197.018-.288-.121-.317-.259L7.06 6.086a.955.955 0 01-.048-.215.115.115 0 01.096-.131h.557c.219-.022.29.15.313.26l.893 3.52.83-3.52c.013-.081.073-.277.32-.257h.428c.055-.004.278-.012.317.26l.836 3.565.922-3.565c.011-.055.068-.285.316-.26h.494c.02-.003.153-.02.13.215-.01.046.086-.267-1.318 4.247-.029.138-.12.277-.317.26h-.467c-.274.028-.313-.242-.317-.27l-.83-3.427-.819 3.424c-.004.027-.043.298-.317.269h-.457zm6.837.141c-.147 0-.848-.008-1.434-.307a.32.32 0 01-.195-.298v-.269c0-.211.155-.172.22-.147.251.102.412.179.72.24.917.188 1.32-.057 1.419-.112a.575.575 0 00.13-.874c-.261-.22-.386-.228-1.328-.525-.116-.032-1.092-.34-1.094-1.309-.015-.706.626-1.404 1.738-1.398.317 0 1.16.103 1.389.39.034.052.05.114.048.176v.253c0 .11-.04.166-.122.166-.192-.021-.535-.279-1.229-.268-.172-.01-.997.022-.96.624-.01.474.665.652.742.672.912.274 1.217.32 1.579.74.428.556.197 1.207.108 1.386-.477.937-1.71.86-1.731.86zm1.005 2.621c-1.75 1.293-4.292 1.982-6.462 1.982a11.728 11.728 0 01-7.932-3.018c-.163-.148-.02-.35.179-.237a15.935 15.935 0 007.922 2.103 15.756 15.756 0 006.04-1.239c.294-.125.544.195.253.41zm.73-.832c-.224-.288-1.482-.134-2.046-.067-.17.02-.198-.128-.044-.237 1.001-.704 2.646-.502 2.835-.265.19.236-.05 1.885-.989 2.672-.143.122-.281.058-.217-.102.21-.531.685-1.712.46-2z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

AwsIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default AwsIcon;
