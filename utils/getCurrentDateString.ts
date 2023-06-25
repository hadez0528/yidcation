export const getCurrentDateString = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();

  return `${date.getFullYear()}-${
    month < 10 ? `0${month}` : `${month}`
  }-${dayOfMonth}`;
};
