import React, { useState } from 'react';
import './CommentsTree.css';

const PromotionModalCommentsTree = ({ comments }) => {
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  if (!comments) {
    return <div>Carregando..</div>;
  }

  return (
    <ul className="promotion-modal-comments-tree">
      {comments.map((item) => (
        <li key={item.id} className="promotion-modal-comments-tree__item">
          <img
            className="promotion-modal-comments-tree__item__avatar"
            src={item.user.avatarUrl}
            alt={`Foto de ${item.user.nome}`}
          />
          <div className="promotion-modal-comments-tree__item__info">
            <span className="promotion-modal-comments-tree__item__info__nome">
              {item.user.nome}
            </span>
            <p>{item.comment}</p>
            <button
              type="button"
              className="promotion-modal-comments-tree__answer__button"
              onClick={() =>
                setActiveCommentBox(
                  activeCommentBox === item.id ? null : item.id,
                )
              }
            >
              Responder
            </button>
            {activeCommentBox === item.id && (
              <div className="promotion-modal-comments-tree__comment-box">
                <textarea value="" onChange={() => {}} />
                <button
                  type="button"
                  className="promotion-modal-comments-tree__send-button"
                >
                  Enviar
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PromotionModalCommentsTree;
