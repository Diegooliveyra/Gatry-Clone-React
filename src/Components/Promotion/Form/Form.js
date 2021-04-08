import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
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

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/promotions/${id}`).then((response) => {
        setValues(response.data);
      });
    }
  }, [id]);

  function onChange({ target }) {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:5000/promotions/${id}`
      : 'http://localhost:5000/promotions';

    axios[method](url, values).then((response) => history.push('/'));
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
