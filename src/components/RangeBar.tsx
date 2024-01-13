import React from 'react';

interface RangeBarProps {
  value: number;
}

const RangeBar = ({ value }: RangeBarProps): React.JSX.Element => {
  // const MIN_VALUE = 0;
  // const MAX_VALUE = 100;
  // const clampedValue = Math.min(Math.max(value, MIN_VALUE), MAX_VALUE);

  if (-5 <= value && value <= 5) {
    value = 50;
  } else if (value < 0) {
    value = 50 - Math.abs(value);
  } else {
    value = value + 50;
  }
  return (
    <div className='w-fill h-4 bg-gray-300'>
      <div className={`h-4 bg-gray-300 border-r-4 border-indigo-500`} style={{ width: `${value}% ` }}></div>
    </div>
  );
};

export default RangeBar;
