import Header from 'Components/Header/Header';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagePromotionForm from './Promotion/Form/Form';
import PagePromotionSearch from './Promotion/Search/Search';
import 'style/App.css';

const Root = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/create" component={PagePromotionForm} />
        <Route path="/edit/:id" component={PagePromotionForm} />
        <Route path="/" component={PagePromotionSearch} />
      </Switch>
    </Router>
  );
};

export default Root;
