import React, { useState } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  initialMinValue?: number;
  initialMaxValue?: number;
  onChange: (minValue: number, maxValue: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step = 1, initialMinValue, initialMaxValue, onChange }) => {
  const [minValue, setMinValue] = useState(initialMinValue ?? min);
  const [maxValue, setMaxValue] = useState(initialMaxValue ?? max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinValue(value);
    if (value <= maxValue) {
      onChange(value, maxValue);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxValue(value);
    if (value >= minValue) {
      onChange(minValue, value);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 z-0 relative">
      <div className="flex justify-between w-full">
        <span className="text-blue-700">{min}</span>
        <span className="text-blue-700">{max}</span>
      </div>
      <div className="relative w-full">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full appearance-none h-1 bg-blue-300 rounded focus:outline-none slider-thumb"
          style={{ zIndex: minValue > max - 10 ? 5 : 1 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none h-1 bg-blue-300 rounded focus:outline-none slider-thumb"
          style={{ zIndex: minValue > max - 10 ? 1 : 5 }}
        />
        <div
          className="absolute h-1 bg-blue-500 rounded"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between w-full">
        <span className="text-blue-700">Min: {minValue}</span>
        <span className="text-blue-700">Max: {maxValue}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
