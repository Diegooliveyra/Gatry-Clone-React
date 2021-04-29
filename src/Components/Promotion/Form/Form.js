import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useApi from '../../ultis/useApi';
import './Form.css';

const InitialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0,
};

const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(id ? null : InitialValue);
  const history = useHistory();
  const [load] = useApi({
    url: `/promotions/${id}`,
    method: 'get',
    onCompleted: (response) => {
      setValues(response.data);
    },
  });

  const [save, saveInfo] = useApi({
    url: id ? `/promotions/${id}` : '/promotions',
    method: id ? 'put' : 'post',
    data: values,
    onCompleted: (response) => {
      if (!response.error) {
        history.push('/');
      }
    },
  });

  useEffect(() => {
    if (id) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function onChange({ target }) {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    save();
  }

  return (
    <section className="promotion-form">
      <div className="promotion-form__title">
        <h1>Nova Promoção</h1>
        <Link to="/">Voltar</Link>
      </div>
      {!values ? (
        <div>Carregando...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {saveInfo.loading && <span>Salvando Dados</span>}
          <div className="promotion-form__group">
            <label htmlFor="title">Titulo</label>
            <input
              name="title"
              id="title"
              type="text"
              onChange={onChange}
              value={values.title}
            />
          </div>
          <div className="promotion-form__group">
            <label htmlFor="url">Link</label>
            <input
              name="url"
              id="url"
              type="text"
              onChange={onChange}
              value={values.url}
            />
          </div>
          <div className="promotion-form__group">
            <label htmlFor="imageUrl">Imagem (URL)</label>
            <input
              name="imageUrl"
              id="imageUrl"
              type="text"
              onChange={onChange}
              value={values.imageUrl}
            />
          </div>
          <div className="promotion-form__group">
            <label htmlFor="price">Preço</label>
            <input
              name="price"
              id="price"
              type="number"
              onChange={onChange}
              value={values.price}
            />
          </div>
          <div className="promotion-form__button">
            <button type="submit">Salvar</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default PromotionForm;
