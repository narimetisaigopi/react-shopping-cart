import React, { useReducer, createContext } from "react";

const initialState = {
  isSearchBarOpen: false,
  searchKeyword: "",
  searchCategory: "all"
};

export const CommonStateContext = createContext();
export const CommonDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCH_BAR":
      return {
        ...state,
        isSearchBarOpen: !state.isSearchBarOpen
      };
    case "SET_SEARCH_KEYWORD":
      return {
        ...state,
        searchKeyword: action.payload.searchKeyword
      };
    case "SET_SEARCH_CATEGORY":
      return {
        ...state,
        searchCategory: action.payload.searchCategory
      }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const CommonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CommonDispatchContext.Provider value={dispatch}>
      <CommonStateContext.Provider value={state}>
        {children}
      </CommonStateContext.Provider>
    </CommonDispatchContext.Provider>
  );
};

export const toggleSearchBar = (dispatch) => {
  return dispatch({
    type: "TOGGLE_SEARCH_BAR"
  });
};

export const setSearchKeyword = (dispatch, searchKeyword) => {
  return dispatch({
    type: "SET_SEARCH_KEYWORD",
    payload: {
      searchKeyword: searchKeyword
    }
  });
};

export const setSearchCategory = (dispatch, searchCategory) => {
  return dispatch({
    type: "SET_SEARCH_CATEGORY",
    payload: {
      searchCategory: searchCategory
    }
  });
};

export default CommonProvider;
