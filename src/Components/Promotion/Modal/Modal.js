import React, { useEffect } from 'react';
import Modal from 'Components/UI/Modal/Modal';
import useApi from 'Components/ultis/useApi';

const PromotionModal = ({ promotionId, onClickClose }) => {
  const [load, loadInfo] = useApi({
    url: '/comments',
    params: {
      promotionId,
    },
  });

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(loadInfo);
  return (
    <Modal isOpen={Boolean(promotionId)} onClickClose={onClickClose}>
      <h1>Comentarios</h1>
    </Modal>
  );
};

export default PromotionModal;
