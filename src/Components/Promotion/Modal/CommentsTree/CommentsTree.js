import React, { useMemo, useState } from 'react';
import './CommentsTree.css';

function getTree(list) {
  if (!list) {
    return [];
  }

  const roots = [];
  const childrenByParentID = {};

  list.forEach((item) => {
    if (!item.parentId) {
      roots.push(item);
      return;
    }
    if (!childrenByParentID[item.parentId]) {
      childrenByParentID[item.parentId] = [];
    }

    childrenByParentID[item.parentId].push(item);
  });

  function buildNodes(nodes) {
    if (!nodes) {
      return null;
    }
    return nodes.map((node) => ({
      ...node,
      children: buildNodes(childrenByParentID[node.id]),
    }));
  }

  return buildNodes(roots);
}

const PromotionModalCommentsTree = ({ comments, sendComment }) => {
  const tree = useMemo(() => getTree(comments), [comments]);
  const [comment, setComment] = useState('');
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  if (!comments) {
    return <div>Carregando..</div>;
  }

  function renderItem(item) {
    return (
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
            onClick={() => {
              setComment('');
              setActiveCommentBox(
                activeCommentBox === item.id ? null : item.id,
              );
            }}
          >
            Responder
          </button>
          {activeCommentBox === item.id && (
            <div className="promotion-modal-comments-tree__comment-box">
              <textarea
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
              <button
                type="button"
                className="promotion-modal-comments-tree__send-button"
                onClick={() => {
                  sendComment(comment, item.id);
                  setComment('');
                  setActiveCommentBox(null);
                }}
              >
                Enviar
              </button>
            </div>
          )}
          {item.children && renderList(item.children)}
        </div>
      </li>
    );
  }

  function renderList(list) {
    return (
      <ul className="promotion-modal-comments-tree">{list.map(renderItem)}</ul>
    );
  }

  return renderList(tree);
};

PromotionModalCommentsTree.defaultProps = {
  sendComment: () => {},
};

export default PromotionModalCommentsTree;
