import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Question = props => {
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
        d="M11.636 14.62a.35.35 0 01-.124.267.421.421 0 01-.293.113H9.273a.42.42 0 01-.293-.113.35.35 0 01-.123-.267v-1.423a.35.35 0 01.123-.267.42.42 0 01.293-.113h1.946c.113 0 .211.037.293.113a.35.35 0 01.124.267v1.423zM10.293 5c.576 0 1.116.075 1.62.225.515.141.958.343 1.329.606.38.254.68.559.895.915.216.348.324.733.324 1.155 0 .338-.061.634-.185.888a2.75 2.75 0 01-.478.69 4.214 4.214 0 01-.618.563c-.226.16-.448.32-.664.48-.206.159-.396.328-.571.506a1.361 1.361 0 00-.34.563.65.65 0 01-.154.268.32.32 0 01-.263.113H9.304a.42.42 0 01-.293-.113.35.35 0 01-.124-.268c0-.31.067-.586.201-.83.144-.245.32-.465.525-.662.206-.207.427-.395.664-.564.247-.169.474-.328.68-.479a3.3 3.3 0 00.509-.479.763.763 0 00.216-.52.718.718 0 00-.34-.634c-.226-.16-.576-.24-1.05-.24-.463 0-.797.066-1.003.197-.196.122-.34.258-.432.409-.093.15-.175.29-.248.422-.061.122-.19.183-.386.183H6.34a.39.39 0 01-.247-.084A.29.29 0 016 8.085c.01-.33.113-.672.309-1.029.195-.366.473-.7.834-1 .37-.31.818-.563 1.343-.76C9.011 5.099 9.613 5 10.292 5z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Question.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Question.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Question;
