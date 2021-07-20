/**
 * Format hiển thị giá tiên
 * @param {*} number sô tiền lấy từ api
 * @returns Giá tiền hiển thị
 */
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  }).format(number * 100);
  return newNumber;
};

/**
 * Lấy ra array value theo key, trong data
 * @param {*} data array object
 * @param {*} type key muốn lấy giá trị
 * @returns mảng các value của key, các value không trùng nhau
 */
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
