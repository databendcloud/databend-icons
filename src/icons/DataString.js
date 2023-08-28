import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DataString = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path
        d="M5.91 12.147H3.79l-.34 1.036H2l2.057-5.865H5.66l2.057 5.865H6.25l-.34-1.036zm-.355-1.103L4.85 8.897l-.696 2.147h1.4z"
        fillOpacity=".8"
      ></path>
      <path
        d="M9.727 9.18c.13-.216.316-.392.559-.526.243-.133.52-.2.834-.2.372 0 .71.097 1.012.292.302.195.54.474.713.836.178.362.267.782.267 1.262 0 .479-.09.902-.268 1.27-.172.362-.41.643-.712.844-.302.194-.64.292-1.012.292a1.73 1.73 0 01-.834-.192 1.522 1.522 0 01-.559-.527v.652H8.342V7h1.385v2.18zm1.976 1.664c0-.357-.097-.635-.292-.836a.917.917 0 00-.704-.31.933.933 0 00-.705.31c-.189.206-.283.487-.283.844 0 .356.094.638.283.844.195.206.43.309.705.309.275 0 .51-.103.704-.31.195-.21.292-.495.292-.851z"
        fillOpacity=".8"
      ></path>
      <path
        d="M13.563 10.852c0-.485.094-.908.283-1.27.194-.362.462-.64.802-.836.345-.195.74-.292 1.182-.292.567 0 1.04.153 1.417.46.383.306.634.738.753 1.295h-1.474c-.124-.357-.364-.535-.72-.535a.716.716 0 00-.608.309c-.15.2-.226.49-.226.869s.075.671.226.877c.152.2.354.301.608.301.356 0 .596-.178.72-.535H18c-.119.546-.37.975-.753 1.287-.383.312-.856.468-1.417.468-.443 0-.837-.098-1.182-.292a2.064 2.064 0 01-.802-.836c-.189-.362-.283-.785-.283-1.27z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

DataString.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DataString.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DataString;
