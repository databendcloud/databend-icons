import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Percent = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default props.className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M4.969 7.586c0 .661.057 1.156.172 1.484.12.323.31.485.57.485.255 0 .443-.162.562-.485.125-.323.188-.817.188-1.484 0-1.302-.25-1.953-.75-1.953-.26 0-.45.161-.57.484-.115.318-.172.807-.172 1.469zm3.46-.016c0 .563-.054 1.068-.163 1.516a3.09 3.09 0 01-.493 1.133 2.256 2.256 0 01-.851.71c-.344.162-.753.243-1.227.243-.442 0-.833-.08-1.172-.242a2.357 2.357 0 01-.843-.711 3.287 3.287 0 01-.508-1.133A6.127 6.127 0 013 7.57c0-.562.052-1.065.156-1.508.104-.442.266-.815.485-1.117.224-.307.505-.541.843-.703C4.823 4.081 5.227 4 5.695 4c.448 0 .841.08 1.18.242.344.162.63.396.86.703.229.302.4.675.515 1.117.12.443.18.946.18 1.508zm5.212-3.406L7.305 15.586H5.438l6.335-11.422h1.868zm-.993 7.984c0 .662.058 1.157.172 1.485.12.323.31.484.57.484.256 0 .443-.161.563-.484.125-.323.188-.818.188-1.485 0-1.302-.25-1.953-.75-1.953-.26 0-.45.162-.57.485-.115.317-.173.807-.173 1.468zm3.461-.015c0 .562-.054 1.068-.164 1.515a3.089 3.089 0 01-.492 1.125 2.255 2.255 0 01-.851.711c-.344.162-.753.243-1.227.243-.443 0-.83-.081-1.164-.243a2.357 2.357 0 01-.844-.71 3.29 3.29 0 01-.508-1.126 6.126 6.126 0 01-.171-1.515c0-.563.052-1.065.156-1.508a3.09 3.09 0 01.484-1.117c.219-.307.498-.542.836-.703.339-.162.742-.242 1.211-.242.448 0 .841.08 1.18.242.343.161.63.396.86.703.228.302.4.674.515 1.117.12.443.18.945.18 1.508z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Percent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Percent.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Percent;
