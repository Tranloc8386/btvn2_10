let product = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
];

function getProductById(id) {
  return product.find((p) => p.id === id);
}
console.log(getProductById(2));

function getTotalPrice() {
  return product.reduce((sum, p) => {
    return sum + p.price;
  }, 0);
}
console.log(getTotalPrice());

product.push({ id: 4, name: "loc", price: 1000 });
console.log(product);

const hah = product.filter((p) =>  p.price > 700);
console.log(hah)

// Bài 2: Chọn một mảng các đối tượng sản phẩm:
// letproduct = [
// { id: 1, name: "Laptop", price: 1500 },
// { id: 2, name: "Phone", price: 800 },
// { id: 3, name: "Tablet", price: 600 }
// ];
// Yêu cầu:
// Viết hàm getProductById(id) trả về đối tượng sản phẩm dựa trên id.
// Viết hàm getTotalPrice() trả về tổng giá của tất cả sản phẩm.
// Thêm một sản phẩm mới { id: 4, name: "Headphone", price: 200 } vào mảng.
// In list name các sản phẩm có giá lớn hơn 700.
