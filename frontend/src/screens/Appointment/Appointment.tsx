import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import Calendar and Value
import { Value } from 'react-calendar/src/shared/types.js';

const Schedule = () => {
  // Use `Value` type which can be Date, [Date, Date] or null
  const [selectedDate, setSelectedDate] = useState<Value>(null);

  const handleDateChange = (value: Value) => {
    setSelectedDate(value);
  };

  return (
    <div>
      {/* Pass handleDateChange to Calendar */}
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <div>
        {Array.isArray(selectedDate)
          ? `Selected range: ${selectedDate[0]?.toDateString()} to ${selectedDate[1]?.toDateString()}`
          : selectedDate
          ? `Selected date: ${selectedDate.toDateString()}`
          : 'No date selected'}
      </div>
    </div>
  );
};

export default Schedule;
