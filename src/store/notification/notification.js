const createNotification = (from, to, subject, date) => {
  return {
    from,
    to,
    subject,
    date,
  };
};

export default createNotification;
