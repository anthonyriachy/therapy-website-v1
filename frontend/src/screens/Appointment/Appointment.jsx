import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Appointment.module.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const availableSlots = {
    '2024-12-18': ['10:00 AM', '2:00 PM', '4:00 PM'],
    '2024-12-20': ['9:00 AM', '1:00 PM'],
    '2024-12-25': ['11:00 AM', '3:00 PM', '5:00 PM'],
  };

  const handleDateChange = (value) => {
    setSelectedDate(value);
    setSelectedTime(null); // Reset time selection on date change
  };

  const tileClassName = ({ date }) => {
    const dateKey = date.toISOString().split('T')[0];
    if (availableSlots[dateKey]) {
      return styles.reactCalendarTileAvailable;
    }
    return null;
  };

  const tileContent = ({ date }) => {
    const dateKey = date.toISOString().split('T')[0];
    if (availableSlots[dateKey]) {
      return <div className={styles.dot}></div>;
    }
    return null;
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const selectedDateKey = selectedDate
    ? new Date(selectedDate).toISOString().split('T')[0]
    : null;

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        tileContent={tileContent}
      />
      <div>
        {selectedDate ? (
          <div>
            <h3>Available Times for {new Date(selectedDate).toDateString()}</h3>
            <div className={styles.timeSlots}>
              {availableSlots[selectedDateKey]?.length > 0 ? (
                availableSlots[selectedDateKey].map((time, index) => (
                  <button
                    key={index}
                    className={`${styles.timeSlot} ${
                      selectedTime === time ? styles.selectedTimeSlot : ''
                    }`}
                    onClick={() => handleTimeSelection(time)}
                  >
                    {time}
                  </button>
                ))
              ) : (
                <p>No times available for the selected date.</p>
              )}
            </div>
          </div>
        ) : (
          <p>Please select a date to view available times.</p>
        )}
      </div>
      <div>
        {selectedTime && <p>Selected Time: {selectedTime}</p>}
      </div>
    </div>
  );
};

export default Schedule;
