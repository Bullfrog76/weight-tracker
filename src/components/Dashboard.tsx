import React, { useState, useEffect } from 'react';
import WeightForm from './WeightForm';
import WeightTable from './WeightTable';
import WeightChart from './WeightChart';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

interface WeightEntry {
  date: string;
  weight: number;
}

const Dashboard: React.FC<{ username: string }> = ({ username }) => {
  const [weights, setWeights] = useState<WeightEntry[]>([]);

  useEffect(() => {
    const storedWeights = loadFromLocalStorage('weights');
    if (storedWeights) {
      setWeights(storedWeights);
    }
  }, []);

  const addWeight = (weight: number) => {
    const newEntry = {
      date: new Date().toLocaleString(),
      weight: weight
    };
    const updatedWeights = [newEntry, ...weights].slice(0, 10);
    setWeights(updatedWeights);
    saveToLocalStorage('weights', updatedWeights);
  };

  const deleteWeight = (index: number) => {
    const updatedWeights = weights.filter((_, i) => i !== index);
    setWeights(updatedWeights);
    saveToLocalStorage('weights', updatedWeights);
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <WeightForm addWeight={addWeight} />
      <WeightTable weights={weights} onDelete={deleteWeight} />
      <WeightChart weights={weights} />
    </div>
  );
};

export default Dashboard;
