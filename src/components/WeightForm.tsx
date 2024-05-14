import React, { useState } from 'react';

interface WeightFormProps {
  addWeight: (weight: number) => void;
}

const WeightForm: React.FC<WeightFormProps> = ({ addWeight }) => {
  const [weight, setWeight] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight !== '') {
      addWeight(Number(weight));
      setWeight('');
    }
  };

  return (
    <form className="weightForm" onSubmit={handleSubmit}>
      <div className='inputWrapper'>
      <label>
        Peso:
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          required
        />
     
      <button type="submit">Aggiungi</button>
      </div>
    </form>
  );
};

export default WeightForm;
