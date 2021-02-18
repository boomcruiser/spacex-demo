export const ListItem = ({ title, value }) => {
  return (
    <div className="list__item">
      <div className="list__title">{title}:</div>
      <div>{value}</div>
    </div>
  );
};
