import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import { ProductsResponse } from 'core/types/Product';
import { makeRequest, makePrivateRequest } from 'core/utils/request';
import Pagination from 'core/components/Pagination';
import CardLoader from '../Loaders/ProductCardLoader';
import { toast } from 'react-toastify';

const List = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const getProducts = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 4,
      direction: 'DESC',
      orderBy: 'id',
    };

    setIsLoading(true);
    makeRequest({ url: '/products', params })
      .then((response) => setProductsResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  const history = useHistory();

  const handleCreate = () => {
    history.push('/admin/products/create');
  };

  const onRemove = (productId: number) => {
    const confirm = window.confirm('Deseja excluir este produto?');

    if (confirm) {
      makePrivateRequest({
        url: `/products/${productId}`,
        method: 'DELETE',
      })
        .then(() => {
          toast.info('Produto deletado com sucesso!');
          getProducts();
        })
        .catch(() => {
          toast.error('Error ao tentar deletar produto!');
        });
    }
  };
  return (
    <div className="admin-products-list">
      <button
        className="btn btn-list btn-primary btn-lg"
        onClick={handleCreate}
      >
        adicionar
      </button>
      <div className="admin-list-container">
        {isLoading ? (
          <CardLoader />
        ) : (
          productsResponse?.content.map((product) => (
            <Card product={product} key={product.id} onRemove={onRemove} />
          ))
        )}
        {productsResponse && (
          <Pagination
            totalPages={productsResponse.totalPages}
            activePage={activePage}
            onChange={(page) => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
