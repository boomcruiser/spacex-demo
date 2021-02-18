export const CardBodyWrapper = ({ children }) => {
  return <div className="card__body__wrapper">{children}</div>;
};
const Card = ({ imgLink, title, children }) => {
  return (
    <section className="card">
      <div className="card__header">
        <img alt={title} src={imgLink} className="card__image" />
      </div>
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <div className="card__main">{children}</div>
      </div>
    </section>
  );
};

export default Card;
