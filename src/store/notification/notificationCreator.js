import { addNotification } from '../actionTypes';

const addNotificationCreator = notification => {
  return {
    type: addNotification,
    payload: notification,
  };
};

export default addNotificationCreator;
