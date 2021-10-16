import React from 'react';
import { Route, Switch } from 'react-router';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Product from '../pages/Product';

Routes.propTypes = {};

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:id" component={Product} />
      <Route path="/catalog" exact component={Catalog} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}

export default Routes;
