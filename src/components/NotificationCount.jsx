import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import identityContext from '../contexts/IdentityContext';
import messageImage from '../public/images/message.png';

const NotificationCount = () => {
  const identity = useContext(identityContext);
  const userNotifications = useSelector(state =>
    state.notifications[identity.name] ? state.notifications[identity.name] : []
  );

  const notificationCount = userNotifications.length;

  return (
    <div className="notificationCount">
      <span>
        <img src={messageImage} className="notificationImage" alt="notifications" />
      </span>
      <span>({notificationCount})</span>
    </div>
  );
};

export default NotificationCount;
