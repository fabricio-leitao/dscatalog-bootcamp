import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const List = () => {
  const history = useHistory();

  const handleCreate = () => {
    history.push('/admin/products/create');
  };
  return (
    <div className="admin-products-list">
      <button
        className="btn btn-list btn-primary btn-lg"
        onClick={handleCreate}
      >
        adicionar
      </button>
    </div>
  );
};

export default List;
