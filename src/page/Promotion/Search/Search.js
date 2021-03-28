import React, { useEffect, useState } from 'react';
import PromotionCard from 'Components/Promotion/Card/Card';
import axios from 'axios';
import 'style/App.css';

const PagePromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => setPromotions(response.data));
  }, []);

  return (
    <div className="App">
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
};

export default PagePromotionSearch;
