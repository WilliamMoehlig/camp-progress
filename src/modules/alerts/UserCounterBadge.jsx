import React, { useEffect, useState } from 'react';
import AlertButton from './AlertButton';
import { listPaged } from '../http/http';

function UserCounterBadge() {
  const [counter, setCounter] = useState();

  useEffect(() => {
    async function getUsers() {
      const result = await listPaged();
      setCounter(result.total);
    }
    getUsers();
  }, []);

  return (
    <AlertButton variant="primary" event={() => {}}>
      Users
      <span role="note" className="badge badge-light">
        {counter || '???'}
      </span>
    </AlertButton>
  );
}

export default UserCounterBadge;
