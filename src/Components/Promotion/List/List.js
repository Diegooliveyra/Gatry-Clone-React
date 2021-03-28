import React from 'react';
import PromotionCard from '../Card/Card';

const PromotionList = ({ loading, promotions }) => {
  if (loading) return <div>Carregando...</div>;
  return (
    <div>
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
};

export default PromotionList;
