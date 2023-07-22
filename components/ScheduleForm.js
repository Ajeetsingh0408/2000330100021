// components/ScheduleForm.js

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';

const ScheduleForm = ({ onAddTrain }) => {
  const [name, setName] = React.useState('');
  const [departure, setDeparture] = React.useState(null);
  const [arrival, setArrival] = React.useState(null);

  const handleAddTrain = () => {
    if (name && departure && arrival) {
      const newTrain = { id: uuidv4(), name, departure, arrival };
      onAddTrain(newTrain);
      setName('');
      setDeparture(null);
      setArrival(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Train name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DatePicker
        selected={departure}
        onChange={(date) => setDeparture(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="Departure time"
      />
      <DatePicker
        selected={arrival}
        onChange={(date) => setArrival(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="Arrival time"
      />
      <button onClick={handleAddTrain}>Add Train</button>
    </div>
  );
};

export default ScheduleForm;