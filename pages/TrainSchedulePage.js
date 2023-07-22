// pages/TrainSchedulePage.js

import React from 'react';
import { trains } from '../data/trains';
import ScheduleForm from '../components/ScheduleForm';
import ScheduleTable from '../components/ScheduleTable';

const TrainSchedulePage = () => {
  // State to manage the list of trains
  const [trainList, setTrainList] = React.useState(trains);

  // Function to add a new train to the list
  const addTrain = (train) => {
    setTrainList([...trainList, train]);
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      <ScheduleForm onAddTrain={addTrain} />
      <ScheduleTable trains={trainList} />
    </div>
  );
};

export default TrainSchedulePage;