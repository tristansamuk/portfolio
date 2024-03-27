import "./Card.scss";

const Card = () => {
  return (
    <div className="card__container--grid">
      {/* Card 1 */}
      <div className="card__container">
        <div className="card">
          <img src="" alt="" />
        </div>
        <div className="card__container--text">
          <h4 className="card__title">Close Reader</h4>
          <p className="card__description">
            An app for reading and learning about poetry with the help of AI
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="card__container">
        <div className="card">
          <img src="" alt="" />
        </div>
        <div className="card__container--text">
          <h4 className="card__title">Close Reader</h4>
          <p className="card__description">
            An app for reading and learning about poetry with the help of AI
          </p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card__container">
        <div className="card">
          <img src="" alt="" />
        </div>
        <div className="card__container--text">
          <h4 className="card__title">Close Reader</h4>
          <p className="card__description">
            An app for reading and learning about poetry with the help of AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
