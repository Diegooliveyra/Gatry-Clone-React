import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PromotionList from '../List/List';
import useApi from '../../ultis/useApi';
import './Search.css';

const PromotionSearch = () => {
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    url: '/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined,
    },
  });

  useEffect(() => {
    load();
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
      <PromotionList
        promotions={loadInfo.data}
        loading={loadInfo.loading}
        error={loadInfo.error}
      />
    </div>
  );
};

export default PromotionSearch;
