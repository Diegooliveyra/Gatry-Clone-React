import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

const price = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0,
};

const PromotionForm = () => {
  const [values, setValues] = useState(price);
  const history = useHistory();

  function onChange({ target }) {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:5000/promotions', values)
      .then((response) => history.push('/'));
  }

  return (
    <section className="promotion-form">
      <div className="promotion-form__title">
        <h1>Nova Promoção</h1>
        <Link to="/">Voltar</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Titulo</label>
          <input name="title" id="title" type="text" onChange={onChange} />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input name="url" id="url" type="text" onChange={onChange} />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Imagem (URL)</label>
          <input
            name="imageUrl"
            id="imageUrl"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input name="price" id="price" type="number" onChange={onChange} />
        </div>
        <div className="promotion-form__button">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </section>
  );
};

export default PromotionForm;
