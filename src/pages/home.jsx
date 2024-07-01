import React, { useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import {
  ProductsStateContext,
  ProductsDispatchContext,
  getProducts
} from "../contexts/products";
import { CommonStateContext, CommonDispatchContext, setSearchCategory } from "../contexts/common";
import CategoryList from '../components/CategoryList';

const Home = () => {
  const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const { searchKeyword, searchCategory } = useContext(CommonStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const dispatch = useContext(ProductsDispatchContext);

  var execItemIds = [];

  const productsList =
    products &&
    products.filter((product) => {
      if (execItemIds.includes(product.item_id)) {
        return false;
      }
      if (product.item_id !== undefined) {
        execItemIds.push(product.item_id);
      }
      return (
        (searchCategory === 'all' || product.category.name === searchCategory) &&
        (
          product.search_name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          !searchKeyword
        )
      );
    });

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <CategoryList category={searchCategory} changeCategory={(value) => setSearchCategory(commonDispatch, value)} />
      <div className="products">
        {isLoaded &&
          productsList.map((data) => {
            return <ProductCard key={data.id} data={data} />;
          })}
      </div>
    </div>
  );
};

export default Home;
