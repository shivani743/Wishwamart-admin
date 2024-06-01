import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';

const DateRangeSelector: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full z-9999">
      <div className="flex space-x-4 w-full">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-Exo">Start Date</label>
          <DatePicker
         
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/dd/yyyy"
            className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholderText="Select start date"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-Exo">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate ? addDays(startDate, 1) : undefined}
            dateFormat="MM/dd/yyyy"
            className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholderText="Select end date"
          />
        </div>
      </div>
      <div className="mt-4 w-full px-2">
        {startDate && endDate && (
          <div className="text-green-700 text-left font-Exo w-full mb-2">
            Selected Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRangeSelector;
