export const isEmpty = (obj: any) => {
  for (const prop in obj) {
    if (obj.hasOwn(prop)) return false;
  }
  return true;
};
