import React from 'react';
import './styles.scss';
import { Switch, Route } from 'react-router-dom';
import List from './List';
import Form from './Form';

const Products = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/products" exact>
          <List />
        </Route>
        <Route path="/admin/products/:productId">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
