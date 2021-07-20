import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      // lấy max_price và min_price
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      // console.log(maxPrice);

      // let minPrice = action.payload.map((product) => product.price);
      // minPrice = Math.min(...minPrice);
      // console.log(minPrice);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          min_price: 0,
          price: maxPrice,
        },
      };

    case SET_LISTVIEW: {
      return {
        ...state,
        grid_view: false,
      };
    }

    case SET_GRIDVIEW: {
      return {
        ...state,
        grid_view: true,
      };
    }

    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempSortProducts = [...filtered_products];

      // thap dem cao
      if (sort === "price-lowest") {
        tempSortProducts = tempSortProducts.sort((a, b) => a.price - b.price);
      }

      //cao den thap
      if (sort === "price-highest") {
        tempSortProducts = tempSortProducts.sort((a, b) => b.price - a.price);
      }

      //a - z
      if (sort === "name-a") {
        tempSortProducts = tempSortProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      //z - a
      if (sort === "name-z") {
        tempSortProducts = tempSortProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filtered_products: tempSortProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;

      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;

      let tempFiltersProducts = [...all_products];
      // text
      if (text) {
        tempFiltersProducts = tempFiltersProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      // category
      if (category !== "all") {
        tempFiltersProducts = tempFiltersProducts.filter((product) => {
          return product.category === category;
        });
      }

      // company
      if (company !== "all") {
        tempFiltersProducts = tempFiltersProducts.filter((product) => {
          return product.company === company;
        });
      }

      // color
      if (color !== "all") {
        tempFiltersProducts = tempFiltersProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      //price
      if (price) {
        tempFiltersProducts = tempFiltersProducts.filter((product) => {
          return product.price <= price;
        });
      }

      //shipping
      if (shipping) {
        tempFiltersProducts = tempFiltersProducts.filter((product) => {
          return product.shipping === true;
        });
      }

      return {
        ...state,
        filtered_products: tempFiltersProducts,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
