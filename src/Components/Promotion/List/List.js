import React, { useState } from 'react';
import PromotionCard from '../Card/Card';
import PromotionModal from '../Modal/Modal';

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
      {promotionId && (
        <PromotionModal
          promotionId={promotionId}
          onClickClose={() => setPromotionId(null)}
        />
      )}
    </div>
  );
};

export default PromotionList;
