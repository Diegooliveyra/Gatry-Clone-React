import PromotionForm from 'Components/Promotion/Form/Form';
import UIContainer from 'Components/UI/Container/Container';
import React from 'react';
import { useParams } from 'react-router-dom';

const PagePromotionForm = () => {
  const { id } = useParams();

  return (
    <UIContainer>
      <PromotionForm id={id ? Number.parseInt(id) : null}/>;
    </UIContainer>
  );
};

export default PagePromotionForm;
