// src/components/Calendar.js
import React, { useState } from 'react';

const Calendar = ({ onSelectDay }) => {
    // Get the current date in the local time zone
    const today = new Date().toLocaleDateString('en-CA'); // 'en-CA' format is YYYY-MM-DD
    const [selectedDay, setSelectedDay] = useState(today);

    // Handle change in the date input
    const handleChange = (e) => {
        setSelectedDay(e.target.value); // Update the selected day state
        onSelectDay(e.target.value); // Trigger the callback with the selected day
    };

    return (
        <div>
            <input type="date" value={selectedDay} onChange={handleChange} />
        </div>
    );
};

export default Calendar;
