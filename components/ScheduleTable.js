// components/ScheduleTable.js

import React from 'react';
import moment from 'moment';

const ScheduleTable = ({ trains }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Train Name</th>
          <th>Departure</th>
          <th>Arrival</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train) => (
          <tr key={train.id}>
            <td>{train.name}</td>
            <td>{moment(train.departure).format('YYYY-MM-DD HH:mm')}</td>
            <td>{moment(train.arrival).format('YYYY-MM-DD HH:mm')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;