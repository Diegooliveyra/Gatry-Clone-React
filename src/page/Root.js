import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PagePromotionForm from './Promotion/Form/Form';
import PagePromotionSearch from './Promotion/Search/Search';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PagePromotionForm} />
        <Route path="/edit/:id" component={PagePromotionForm} />
        <Route path="/" component={PagePromotionSearch} />
      </Switch>
    </Router>
  );
};

export default Root;
