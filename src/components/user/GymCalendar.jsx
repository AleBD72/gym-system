import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const GymCalendar = ({ onDateSelect, attendedDates }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const tileClassName = ({ date }) => {
    return attendedDates.some((d) => d.toDateString() === date.toDateString())
      ? "attended-date"
      : "";
  };

  return (
    <div className="flex justify-center">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        className="font-poppins text-white bg-principalCol h-1/3 md:w-2/3 w-5/7 font-medium 
        text-lg rounded-xl p-3 border-transparent"
      />
    </div>
  );
};

export default GymCalendar;
