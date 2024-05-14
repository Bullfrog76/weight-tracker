import React from 'react';

interface WeightEntry {
  date: string;
  weight: number;
}

interface WeightTableProps {
  weights: WeightEntry[];
  onDelete: (index: number) => void;
}

const WeightTable: React.FC<WeightTableProps> = ({ weights, onDelete }) => {
  return (
    <table className='history'>
      <thead>
        <tr>
          <th>Data</th>
          <th>Peso (kg)</th>
        </tr>
      </thead>
      <tbody>
        {weights.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>{entry.weight}</td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeightTable;
