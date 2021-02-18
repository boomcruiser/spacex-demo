export const getYears = () => {
  // to generate years from 2006 - 2020
  return Array(15)
    .fill(2006)
    .map((value, index) => {
      return (value + index).toString();
    });
};
export const generateQueryString = (filters) => {
  return Object.keys(filters).reduce((acc, curr) => {
    const value = filters[curr];
    if (value !== null) {
      acc += `&${curr}=${value}`;
    }
    return acc;
  }, "");
};
