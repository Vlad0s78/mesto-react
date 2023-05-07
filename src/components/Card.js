export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="grid-elements__items">
      <img className="grid-elements__image" alt={card.name} src={card.link} onClick={handleClick} />
      <div className="grid-elements__info">
        <h2 className="grid-elements__title">{card.name}</h2>
        <div className="grid-elements__like">
          <button className="grid-elements__button-like" type="button"></button>
          <span className="grid-elements__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button className="grid-elements__button-remove" type="button"></button>
    </article>
  );
}
