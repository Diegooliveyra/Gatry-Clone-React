import React from 'react';
import './Card.css';

const PromotionCard = ({ promotion }) => {
  return (
    <div className="promotion-card">
      <img
        className="promotion-card__image"
        src={promotion.imageUrl}
        alt={promotion.title}
      />
      <div className="promotion-card__info">
        <h1 className="promotion-card__title">{promotion.title}</h1>
        <span className="promotion-card__price"> R$ {promotion.price}</span>
        <footer>
          {promotion.comments.length > 0 && (
            <div className="promotion-card__comments">
              "{promotion.comments[0].comment}"
            </div>
          )}
          <div className="promotion-card__footer">
            <p>
              {promotion.comments.length}{' '}
              {promotion.comments.length > 1 ? 'Comentarios' : 'Comentario'}
            </p>
            <a
              className="promotion-card__link"
              href={promotion.url}
              target="_blank"
              rel="noreferrer"
            >
              Ir para o Site
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PromotionCard;
