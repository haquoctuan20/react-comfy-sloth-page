import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  // filter default values
  filters: {
    // tim kiem san pham
    text: "",
    // hãng
    company: "all",
    // loại sản phẩm
    category: "all",
    // màu sắc
    color: "all",
    // giá thấp nhất trong danh sach san pham
    min_price: 0,
    // giá cao nhất trong danh sach san pham
    max_price: 0,
    // giá
    price: 0,
    // ship
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  /** Danh sach san pham */
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  /** Sap xep danh sach san pham theo state.sort */
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });

    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  /** set grid view */
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  /** get list view */
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  /** Thay doi kieu hien thi danh sach, thay doi state.sort */
  const updateSort = (e) => {
    const value = e.target.value;
    console.log(value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(value);
    // if (name === "category") {
    //   value = e.target.textContent;
    // }

    if (name === "color") {
      value = e.target.dataset.color;
    }

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
