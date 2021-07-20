/** Mở sidebar */
export const SIDEBAR_OPEN = "SIDEBAR_OPEN";
/** Đóng sidebar */
export const SIDEBAR_CLOSE = "SIDEBAR_CLOSE";

/** Bắt đầu danh sách sản phẩm */
export const GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN";
/** Lấy lấy danh sách thành công; Payload: products */
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
/** Lấy danh sách thát bại */
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
/** Bắt đầu thông tin sản phẩm */
export const GET_SINGLE_PRODUCT_BEGIN = "GET_SINGLE_PRODUCT_BEGIN";
/** Láy thông tin thành công */
export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";
/** Lấy thông tin thất bại */
export const GET_SINGLE_PRODUCT_ERROR = "GET_SINGLE_PRODUCT_ERROR";

/** Lấy danh sách sản phẩm */
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
/** Hiển thị dạng lưới */
export const SET_GRIDVIEW = "SET_GRIDVIEW";
/** Hiển thị dạng danh sách */
export const SET_LISTVIEW = "SET_LISTVIEW";
/** Chọn kiểu sắp xếp */
export const UPDATE_SORT = "UPDATE_SORT";
/** Sắp xếp danh sách sản phẩm theo kiểu đã chọn */
export const SORT_PRODUCTS = "SORT_PRODUCTS";
/** Cập nhật các giá trị để filter */
export const UPDATE_FILTERS = "UPDATE_FILTERS";
/** Lọc danh sách theo các giá trị filters */
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
/** Xóa hết điêu kiện lọc */
export const CLEAR_FILTERS = "CLEAR_FILTERS";

/** Them san pham vao gio hang */
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_CART_ITEM_AMOUNT = "TOGGLE_CART_ITEM_AMOUNT";
export const CLEAR_CART = "CLEAR_CART";
export const COUNT_CART_TOTALS = "COUNT_CART_TOTALS";
