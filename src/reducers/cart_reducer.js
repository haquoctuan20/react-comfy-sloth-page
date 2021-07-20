import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      //thuộc tính của sản phẩm được add vào cart
      const { id, color, amount, product } = action.payload;
      // kiểm tra danh sách, có sản phẩm đang được thêm hay chưa
      // tra về sản phẩm nếu như sản phẩm đã tồn tại trong danh sách
      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        // cập nhật lại danh sách khi thêm sản phẩm đã tôn tại
        const tempCart = state.cart.map((cartItem) => {
          // tìm sản phẩm đã tôn tại và cộng thêm số lượng
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          }
          // nếu không trùng trả vê sản phẩm cũ
          else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;

      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }

          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
          return item;
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    }

    case COUNT_CART_TOTALS: {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;

          return total;
        },
        { total_items: 0, total_amount: 0 }
      );

      return { ...state, total_items, total_amount };
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
