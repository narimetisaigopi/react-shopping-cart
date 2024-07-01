import React, { useReducer, createContext } from "react";
import axios from "axios";

const initialState = {
  products: null,
  itemGroups: null,
  isLoading: false,
  isLoaded: false
};

export const ProductsStateContext = createContext();
export const ProductsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        products: action.payload.products
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        products: null,
        isLoading: false,
        isLoaded: false
      };
    case "GET_ITEMGROUPS_SUCCESS":
      return {
        ...state,        
        itemGroups: action.payload.products,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={state}>
        {children}
      </ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};

export const getProducts = (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_REQUEST"
  });
  const url =
    // "http://localhost:4000/api/items";
    "http://ob.visualbench.com/api/items";
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: "GET_PRODUCTS_SUCCESS",
        payload: {
          products: response.data[0]
        }
      });
      dispatch({
        type: "GET_ITEMGROUPS_SUCCESS",
        payload: {
          products: response.data[1]
        }
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: "GET_PRODUCTS_FAILURE"
      });
    });
};

export default ProductsProvider;
