import React from 'react';
import { useParams } from 'react-router-dom';

const PagePromotionForm = () => {
  const { id } = useParams();
  return <div>{id && <h1>{id}</h1>}</div>;
};

export default PagePromotionForm;
