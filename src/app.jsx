import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { listPaged } from './components/http/http';

export function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const runEffect = async () => {
      const persons = await listPaged(1, 5);
      setResult(persons.data);
    };
    runEffect();
  }, []);
  return (
    <>
      <h1>Hello from ES2015+</h1>
      <div className="main container-fluid">
        {result.map(a => (
          <p key={a.id}>{JSON.stringify(a)}</p>
        ))}
      </div>
    </>
  );
}

export default hot(App);
