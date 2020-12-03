import { useState, useEffect } from 'react';

const Clock = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    getCatFact();
  }, []);

  const getCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');

    const jsonResponse = await response.json();

    setFact(jsonResponse.fact);
  }

  return (
      <div>
        <p>Your random cat fact of the day</p>
        <p>{fact}</p>
      </div>
  );
}

export { Clock };