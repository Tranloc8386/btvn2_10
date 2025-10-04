let sinhvien = {
  name: "Nguyen Van A",
  age: 20,
  gioitinh: "nam",
  diem: {
    toan: 8,
    tienganh: 7,
    khoahoc: 9,
  },
};
console.log(sinhvien);
console.log(sinhvien.age);
let diemtb;

diemtb =
  (sinhvien.diem.toan + sinhvien.diem.tienganh + sinhvien.diem.khoahoc) / 3;

console.log(diemtb);
sinhvien.address = "HN";
console.log(sinhvien.address);
delete sinhvien.gioitinh;
console.log(sinhvien);
