import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WeightEntry {
  date: string;
  weight: number;
}

interface WeightChartProps {
  weights: WeightEntry[];
}

const WeightChart: React.FC<WeightChartProps> = ({ weights }) => {
  const data = {
    labels: weights.map(entry => entry.date).reverse(),
    datasets: [
      {
        label: 'Weight (kg)',
        data: weights.map(entry => entry.weight).reverse(),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Storico del peso',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeightChart;
