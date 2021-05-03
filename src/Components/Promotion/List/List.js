import Modal from 'Components/UI/Modal/Modal';
import React, { useState } from 'react';
import PromotionCard from '../Card/Card';

const PromotionList = ({ loading, promotions, error }) => {
  const [promotionId, setPromotionId] = useState(null);

  if (error) {
    return <div>Algo de errado não está certo</div>;
  }
  if (loading || promotions === null) {
    return <div>Carregando...</div>;
  }

  if (promotions.length === 0) {
    return <div>Nenhum resultado encontrado</div>;
  }
  return (
    <div>
      {promotions.map((promotion) => (
        <PromotionCard
          key={promotion.id}
          promotion={promotion}
          onClickComments={() => setPromotionId(promotion.id)}
        />
      ))}
      <Modal
        isOpen={Boolean(promotionId)}
        onClickClose={() => setPromotionId(null)}
      >
        <h1>Comentarios</h1>
      </Modal>
    </div>
  );
};

export default PromotionList;
