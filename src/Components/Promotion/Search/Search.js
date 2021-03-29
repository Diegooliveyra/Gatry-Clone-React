import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css';
import PromotionList from '../List/List';

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    axios
      .get(
        'http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id',
        { params },
      )
      .then((response) => setPromotions(response.data));
  }, [search]);
  return (
    <div>
      <section className="promotion-search">
        <div className="promotion-search__input">
          <input
            type="text"
            placeholder="Pesquisar Promoções"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
        <Link className="promotion-search__link" to="/create">
          Criar Alerta
        </Link>
      </section>
      <PromotionList promotions={promotions} loading={!promotions.length} />
    </div>
  );
};

export default PromotionSearch;
