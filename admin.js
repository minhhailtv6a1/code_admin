// Data của sản phẩm
const LCS_SP = [
  {
    id: "SP_01",
    ten: "Giày Bóng Đá Nike Zoovapor 15 Academy Tf (Dành Cho Sân Cỏ Nhân Tạo) - Hồng",
    anh: "./img_admin/./img_product/giay/giay1.png",
    gia: 1565000,
    loai: "Giày",
    thuonghieu: "Nike",
  },
  {
    id: "SP_02",
    ten: "Giày Đá Bóng Nike Zoom Mercurial Superfly 9 Academy Km Tf (Dành Cho Sân Cỏ Nhân Tạo) - Xanh Dương",
    anh: "./img_admin/./img_product/giay/giay2.png",
    gia: 1859000,
    loai: "Giày",
    thuonghieu: "Nike",
  },
  {
    id: "SP_03",
    ten: "Giày Đá Bóng Nam Nike Phantom Gx Academy Tf (Dành Cho Sân Cỏ Nhân Tạo) - Xám",
    anh: "./img_admin/./img_product/giay/giay3.png",
    gia: 1565000,
    loai: "Giày",
    thuonghieu: "Nike",
  },
  {
    id: "SP_04",
    ten: "Giày Đá Bóng Nam Nike Zoom Superfly 9 Academy Firmground Fg (Dành Cho Sân Cỏ Tự Nhiên) - Xanh Mint",
    anh: "./img_admin/./img_product/giay/giay4.png",
    gia: 1763000,
    loai: "Giày",
    thuonghieu: "Nike",
  },
  {
    id: "SP_05",
    ten: "Giày Đá Bóng Nike Zoom Superfly 10 Academy Tf (Dành Cho Sân Cỏ Nhân Tạo) - Xanh Dương",
    anh: "./img_admin/./img_product/giay/giay5.png",
    gia: 3059000,
    loai: "Giày",
    thuonghieu: "Nike",
  },
  {
    id: "SP_06",
    ten: "Giày Đá Bóng Unisex Adidas Copa Pure 2 League Tf (Dành Cho Sân Cỏ Nhân Tạo) - Đen",
    anh: "./img_admin/./img_product/giay/giay6.png",
    gia: 2100000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_07",
    ten: "Giày Bóng Đá Adidas X Crazyfast Elite Fg (Dành Cho Sân Cỏ Tự nhiên) - Vàng",
    anh: "./img_admin/./img_product/giay/giay7.png",
    gia: 3480000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_08",
    ten: "Giày Đá Bóng Unisex Adidas Predator Elite Tf (Dành Cho Sân Cỏ Nhân Tạo) - Đen",
    anh: "./img_admin/./img_product/giay/giay8.png",
    gia: 2450000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_09",
    ten: "Giày Đá Bóng Unisex Adidas Copa Pure 2 Club Tf (Dành Cho Sân Cỏ Nhân Tạo) - Trắng",
    anh: "./img_admin/./img_product/giay/giay9.png",
    gia: 1050000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_10",
    ten: "Giày Đá Bóng Unisex Adidas Predator League Tf (Dành Cho Sân Cỏ Nhân Tạo) - Hồng",
    anh: "./img_admin/./img_product/giay/giay10.png",
    gia: 2400000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_11",
    ten: "Giày Đá Bóng Trẻ Em Adidas Predator League Turf Tf (Dành Cho Sân Cỏ Nhân Tạo) - Xanh Dương",
    anh: "./img_admin/./img_product/giay/giay11.png",
    gia: 1700000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_12",
    ten: "Giày Đá Bóng Trẻ Em Adidas Predator League Fg (Dành Cho Sân Cỏ Tự Nhiên) - Đen",
    anh: "./img_admin/./img_product/giay/giay12.png",
    gia: 1222000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_13",
    ten: "Giày Đá Bóng Trẻ Em Nike Jr Legend 10 Club Fg (Dành Cho Sân Cỏ Tự Nhiên) - Xanh Dương",
    anh: "./img_admin/./img_product/giay/giay13.png",
    gia: 1289000,
    loai: "Giày",
    thuonghieu: "Nike",
  },
  {
    id: "SP_14",
    ten: "Giày Đá Bóng Trẻ Em Nike Jr. Zoom Mercurial Superfly 9 Academy Xxv Fg (Dành Cho Sân Cỏ Tự Nhiên) - Xám",
    anh: "./img_admin/./img_product/giay/giay14.png",
    gia: 1413000,
    loai: "Giày",
    thuonghieu: "Nike",
  },
  {
    id: "SP_15",
    ten: "Giày Đá Bóng Trẻ Em Adidas X Crazyfast League Turf Tf (Dành Cho Sân Cỏ Nhân Tạo) - Đỏ",
    anh: "./img_admin/./img_product/giay/giay15.png",
    gia: 1222000,
    loai: "Giày",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_16",
    ten: "Giày Đá Bóng Puma Future Match TT Tf (Dành Cho Sân Cỏ Nhân Tạo) - Trắng",
    anh: "./img_admin/./img_product/giay/giay16.png",
    gia: 799000,
    loai: "Giày",
    thuonghieu: "Puma",
  },
  {
    id: "SP_17",
    ten: "Giày Đá Bóng Puma Future Ultimate Cage Tf (Dành Cho Sân Cỏ Nhân Tạo) - Vàng Xanh",
    anh: "./img_admin/./img_product/giay/giay17.png",
    gia: 1099000,
    loai: "Giày",
    thuonghieu: "Puma",
  },
  {
    id: "SP_18",
    ten: "Giày Đá Bóng Puma Ultra Ultimate Energy Tf (Dành Cho Sân Cỏ Nhân Tạo) - Hồng Xanh",
    anh: "./img_admin/./img_product/giay/giay18.png",
    gia: 1099000,
    loai: "Giày",
    thuonghieu: "Puma",
  },
  {
    id: "SP_19",
    ten: "Giày Đá Bóng Puma Ultra Ultimate Cage TT Tf (Dành Cho Sân Cỏ Nhân Tạo) - Vàng Gold",
    anh: "./img_admin/./img_product/giay/giay19.png",
    gia: 1099000,
    loai: "Giày",
    thuonghieu: "Puma",
  },
  {
    id: "SP_20",
    ten: "Giày Đá Bóng Puma Ultra Ultimate Cage Tf (Dành Cho Sân Cỏ Nhân Tạo) - Tím đen",
    anh: "./img_admin/./img_product/giay/giay20.png",
    gia: 1099000,
    loai: "Giày",
    thuonghieu: "Puma",
  },
  {
    id: "SP_21",
    ten: "Áo Đá Bóng Nam Adidas Arsenal Sân Nhà 24/25 - Đỏ",
    anh: "./img_admin/./img_product/ao_quan/ao21.png",
    gia: 1980000,
    loai: "Quần Áo",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_22",
    ten: "Áo Đá Bóng Nam Adidas Real Madrid Sân Nhà 24/25 Authentic - Trắng",
    anh: "./img_admin/./img_product/ao_quan/ao22.png",
    gia: 3000000,
    loai: "Quần Áo",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_23",
    ten: "Áo Đá Bóng Nam Nike Liverpool FC Sân Nhà 24/25 - Đỏ",
    anh: "./img_admin/./img_product/ao_quan/ao23.png",
    gia: 2276000,
    loai: "Quần Áo",
    thuonghieu: "Nike",
  },
  {
    id: "SP_24",
    ten: "Áo Đá Bóng Nam Nike Paris Saint-Germain Sân Nhà 24/25 - Xanh Navy",
    anh: "./img_admin/./img_product/ao_quan/ao24.png",
    gia: 2375000,
    loai: "Quần Áo",
    thuonghieu: "Nike",
  },
  {
    id: "SP_25",
    ten: "Áo Đá Bóng Nam Adidas Manchester United Sân Nhà 24/25 Authentic - Đỏ",
    anh: "./img_admin/./img_product/ao_quan/ao25.png",
    gia: 3000000,
    loai: "Quần Áo",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_26",
    ten: "Áo Đá Bóng Nam Adidas Spain Sân Nhà 24 - Đỏ",
    anh: "./img_admin/./img_product/ao_quan/ao26.png",
    gia: 1581000,
    loai: "Quần Áo",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_27",
    ten: "Áo Đá Bóng Nam Adidas Germany Sân Khách 24 - Hồng",
    anh: "./img_admin/./img_product/ao_quan/ao27.png",
    gia: 1581000,
    loai: "Quần Áo",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_28",
    ten: "Áo Đá Bóng Nam Adidas Italy Sân Nhà 24 - Xanh Dương",
    anh: "./img_admin/./img_product/ao_quan/ao28.png",
    gia: 1581000,
    loai: "Quần Áo",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_29",
    ten: "Áo Đá Bóng Nam Adidas Argentina Sân Nhà 24 - Xanh Dương",
    anh: "./img_admin/./img_product/ao_quan/ao29.png",
    gia: 1581000,
    loai: "Quần Áo",
    thuonghieu: "Adidas",
  },
  {
    id: "SP_30",
    ten: "Áo Đá Bóng Nam Nike England Sân Khách 24 - Xám Than",
    anh: "./img_admin/./img_product/ao_quan/ao30.png",
    gia: 1990000,
    loai: "Quần Áo",
    thuonghieu: "Nike",
  },
];

// //Đưa data vào localstorage
// localStorage.setItem("DS_SP", JSON.stringify(LCS_SP));
// //Lấy data
// const ds_sp1 = JSON.parse(localStorage.getItem("DS_SP"));

//Danh sách khách hàng
const DS_KH = [
  {
    ms_kh: "KH_001",
    hvt: "Nguyễn Văn A",
    tdn: "nva123",
    ndk: "22/08/2024",
  },
  {
    ms_kh: "KH_002",
    hvt: "Nguyễn Văn B",
    tdn: "nvb123",
    ndk: "23/08/2024",
  },
  {
    ms_kh: "KH_003",
    hvt: "Nguyễn Văn C",
    tdn: "nvc123",
    ndk: "24/08/2024",
  },
  {
    ms_kh: "KH_004",
    hvt: "Trần Văn A",
    tdn: "tva123",
    ndk: "26/08/2024",
  },
  {
    ms_kh: "KH_005",
    hvt: "Trần Văn B",
    tdn: "tvb123",
    ndk: "27/08/2024",
  },
  {
    ms_kh: "KH_006",
    hvt: "Trương Văn A",
    tdn: "tva1234",
    ndk: "30/08/2024",
  },
];

// localStorage.setItem("DS_KH", JSON.stringify(DS_KH));

const ds_dc = [
  {
    soNha: "212",
    duong: "Nguyễn Thông",
    quan_huyen: "Quận 5",
    tp_tinh: "TP HCM",
    maKH: "KH_001",
  },
  {
    soNha: "214",
    duong: "Nguyễn Biểu",
    quan_huyen: "Quận 5",
    tp_tinh: "TP HCM",
    maKH: "KH_002",
  },
  {
    soNha: "345",
    duong: "Nguyễn Thị Minh Khai",
    quan_huyen: "Quận 1",
    tp_tinh: "TP HCM",
    maKH: "KH_006",
  },
  {
    soNha: "213",
    duong: "Nguyễn Văn Cừ",
    quan_huyen: "Quận 5",
    tp_tinh: "TP HCM",
    maKH: "KH_004",
  },
  {
    soNha: "112",
    duong: "Ngô Quyền",
    quan_huyen: "Quận 5",
    tp_tinh: "TP HCM",
    maKH: "KH_005",
  },
  {
    soNha: "351",
    duong: "Nguyễn Trãi",
    quan_huyen: "Quận 5",
    tp_tinh: "TP HCM",
    maKH: "KH_003",
  },
  {
    soNha: "342",
    duong: "An Dương Vương",
    quan_huyen: "Quận 5",
    tp_tinh: "TP HCM",
    maKH: "KH_006",
  },
  {
    soNha: "201",
    duong: "Hưng Phú",
    quan_huyen: "Quận 8",
    tp_tinh: "TP HCM",
    maKH: "KH_003",
  },
];
// localStorage.setItem("DS_DC", JSON.stringify(ds_dc));

////////////////////////////////////////////////////////CODE SAN PHAM/////////////////////////////////////////////////
const SP = JSON.parse(localStorage.getItem("DS_SP"));
var ds_sp = SP;
// const ds_sp1 = JSON.parse(localStorage.getItem("DS_SP"));
// console.log(ds_sp);

let content1 = document.querySelector("#Content1");
let content2 = document.querySelector("#Content2");
let content3 = document.querySelector("#Content3");
let content4 = document.querySelector("#Content4");

//Chỉnh lại format giá tiền
function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}

//Hàm trở về home
function gohome() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
}

window.onload = function (e) {
  gohome();
};
////////////////////////////////////////////CODE ĐỂ PHÂN TRANG/////////////////////////////////////////////////////////

//Các biến để phân trang
let currentPage = 1; //Thứ tự của trang
let perPage = 5; //Số sản phẩm trên trang
let totalPage; //Tổng số trang
let perSP = []; //Mảng chứa các sp trên 1 trang

function xuatDSSP() {
  renderPage1();
  handlePage1(1);
}

//Danh sách trang
function renderPage1() {
  //Cho số lượng phần tử trên 1 trang
  perPage = 5;
  totalPage = Math.ceil(ds_sp.length / perPage);
  let page = document.querySelector("#pagination1");
  page.innerHTML = "";
  for (let i = 1; i <= totalPage; i++) {
    page.innerHTML += `<li id="sp_Page_${i}" onclick="handlePage1(${i})">${i}</li>`;
    let e = document.getElementById("");
    console.log(i);
  }
}

function handlePage1(num) {
  currentPage = num;
  //Cắt SP từ mảng ds_sp
  perSP = ds_sp.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  xuatSP();

  //Thực hiện để lúc chọn trang nào thì số trang của nó in đậm nổi bật
  for (let i = 1; i <= totalPage; i++) {
    let Page_id = "sp_Page_" + i;
    let e = document.getElementById(Page_id);
    if (i == num) {
      e.style.color = "#ffff";
      e.style.backgroundColor = "#0f1b07";
    } else {
      e.style.color = "#0f1b07";
      e.style.backgroundColor = "#ffff";
    }
  }
}

//Hàm xuất danh sách sản phẩm
function xuatSP() {
  let s1 = `Danh sách sản phẩm`;
  document.querySelector("#h1_sp").innerHTML = s1;
  let s = `<tr>
    <th align="center">ID</th>
    <th align="center">Tên</th>
    <th align="center">Ảnh</th>
    <th align="center">Giá</th>
    <th align="center">Loại</th>
    <th align="center">Thương hiệu</th>
    <th align="center">Tuỳ chỉnh</th>
    </tr>`;
  if (perSP.length === 0) {
    s += `
      <td colspan="7" align="center" style = "width: 100vw">Không có sản phẩm nào</td>
      `;
    let e = document.querySelector("#table1");
    e.innerHTML = s;
  } else {
    perSP.forEach((i) => {
      let tien = formatCash(i.gia.toString()) + "đ";
      s += `<tr>
    <td align="center">${i.id}</td>
    <td>${i.ten}</td>
    <td align="center"><img src="${i.anh}" alt=""></td>
    <td align="center">${tien}</td>
    <td align="center">${i.loai}</td>
    <td align="center">${i.thuonghieu}</td>
    <td align="center">
    <button id="xoa" onclick="xoaSP(${ds_sp.indexOf(
      i
    )})" style = "cursor: pointer">Xoá</button>
    <button id="chinh_sua" onclick="form_sua_sp(${ds_sp.indexOf(
      i
    )})" style = "cursor: pointer">Sửa</button>
    </tr>`;
      // console.log(ds_sp.indexOf(i) + "hello");
    });

    let e = document.querySelector("#table1");
    e.innerHTML = s;
  }

  //Để display của các content khác là none
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";

  form_tim_kiem_sp();
  form_them_sp();
}

//////////////////////////////////////////////////////////////HÀM ĐỂ XOÁ SẢN PHẨM///////////////////////////////////////////////////

function xoaSP(num) {
  let k = num;
  if (k % perPage == 0) k += perPage / 10;
  let dssp = JSON.parse(localStorage.getItem("DS_SP"));
  if (confirm("Bạn có muốn xoá sản phẩm không ?")) {
    dssp.splice(num, 1); //Xoá trên localStorage
    ds_sp.splice(num, 1); //Xoá trên màn hình hiển thị
  }
  localStorage.setItem("DS_SP", JSON.stringify(dssp));

  //Xóa xong xuất lại tại trang chứa phần tử mới xóa
  handlePage1(Math.ceil(k / perPage));
  renderPage1();
}

///////////////////////////////////////////////////////////////CODE ĐỂ TÌM KIẾM/////////////////////////////////////////////////////

function form_tim_kiem_sp() {
  let elm = document.querySelector("#timkiemSP");
  elm.style.backgroundColor = "rgb(179, 178, 178)";
  elm.innerHTML = "";
  elm.innerHTML += `
  <h2 align="center">Tìm kiếm sản phẩm</h2>
  <div id="tenSP">
    <label for="ten_SP">Lọc theo tên</label> <br>
    <input id="ten_SP" name="ten_SP" type="text" placeholder="Nhập vào sản phẩm">
  </div>
  
  <div id="giaSP">
    <label for="gia">Lọc theo giá</label> <br>
    <select id="gia1" name="gia" style="margin-right:10px">
      <option value="0">0</option>
      <option value="1000000">1.000.000</option>
      <option value="2000000">2.000.000</option>
      <option value="3000000">3.000.000</option>
      <option value="4000000">4.000.000</option>
      <option value="5000000">5.000.000</option>
    </select> 
    
    <select id="gia2" name="gia">
      <option value="0">0</option>
      <option value="1000000">1.000.000</option>
      <option value="2000000">2.000.000</option>
      <option value="3000000">3.000.000</option>
      <option value="4000000">4.000.000</option>
      <option value="5000000">5.000.000</option>
    </select> 
  </div>

  <div id="loaiSP">
    <label for="phan_loai">Loại sản phẩm</label> <br>
    <select id="phan_loai" name="phan_loai">
      <option value="Chọn">Chọn</option>
      <option value="Giày">Giày</option>
      <option value="Quần áo">Quần áo</option>
      <option value="Phụ kiện">Phụ kiện</option>
    </select>
  </div>

  <div id="thuonghieu">
    <label for="thuong_hieu">Thương hiệu</label> <br>
    <select id="thuong_hieu" name="thuong_hieu">
      <option value="Chọn">Chọn</option>
      <option value="Adidas">Adidas</option>
      <option value="Nike">Nike</option>
      <option value="Puma">Puma</option>
    </select>
  </div>

  <input type="submit" name="submit" value="Tìm kiếm" style="margin-left: 90px; font-size: 16px; cursor: pointer" onclick="timKiemSP()">
  `;
}

function timKiemSP() {
  // ds_sp = SP;
  ds_sp = JSON.parse(localStorage.getItem("DS_SP"));
  let tenSP = document.querySelector("#ten_SP").value;
  let loaiSP = document.querySelector("#phan_loai").value;
  let gia1 = document.querySelector("#gia1").value;
  let gia2 = document.querySelector("#gia2").value;
  let thuonghieu = document.querySelector("#thuong_hieu").value;
  if (gia1 >= gia2 && gia1 != 0) {
    alert("Bạn đã chọn sai giá hãy nhập lại?");
    return;
  }

  if (tenSP !== "") {
    ds_sp = ds_sp.filter((value) => {
      return value.ten.toLowerCase().includes(tenSP.toLowerCase());
    });
  }
  if (loaiSP !== "Chọn") {
    ds_sp = ds_sp.filter((value) => {
      return value.loai.toLowerCase().includes(loaiSP.toLowerCase());
    });
  }

  if (gia1 < gia2) {
    ds_sp = ds_sp.filter((value) => {
      return value.gia >= gia1 && value.gia <= gia2;
    });
  }

  if (thuonghieu !== "Chọn") {
    ds_sp = ds_sp.filter((value) => {
      return value.thuonghieu.toLowerCase().includes(thuonghieu.toLowerCase());
    });
  }
  console.log(tenSP + " " + loaiSP + " " + thuonghieu);
  console.log(ds_sp);
  //Tìm xong sẽ xuất danh sách pử trang đầu
  xuatDSSP();
}

////////////////////////////////////////////////////////CODE ĐỂ THÊM SẢN PHẨM///////////////////////////////////////////////
function form_them_sp() {
  let elm = document.querySelector("#themSP");
  elm.style.backgroundColor = "rgb(179, 178, 178)";
  elm.innerHTML = "";
  elm.innerHTML += `
  <h2 align="center">Thêm sản phẩm</h2>
  <div id="ten_SP_them">
    <label for="ten_them">Tên sản phẩm</label> <br>
    <input id="ten_them" name="ten_them" type="text" placeholder="Nhập vào sản phẩm">
  </div>
  
  <div id="anh_SP_them">
    <label for="anh_them">Thêm ảnh</label> <br>
    <input id="anh_them" name="anh_them" type="file" accept="image/png, image/jpeg" style="font-size: 14px" onchange="inputAnh_them()">
  </div>

  <div id="gia_SP_them">
    <label for="gia_them">Giá sản phẩm</label> <br>
    <input id="gia_them" name="gia" type="text" placeholder="Nhập giá" style="margin-right:10px">
  </div>

  <div id="loai_SP_them">
    <label for="loai_them">Loại sản phẩm</label> <br>
    <select id="loai_them" name="loai_them">
      <option value="Chọn">Chọn</option>
      <option value="Giày">Giày</option>
      <option value="Quần áo">Quần áo</option>
      <option value="Phụ kiện">Phụ kiện</option>
    </select>
  </div>

  <div id="thuong_hieu_SP_them">
    <label for="thuong_hieu_them">Thương hiệu</label> <br>
    <select id="thuong_hieu_them" name="thuong_hieu_them">
      <option value="Chọn">Chọn</option>
      <option value="Adidas">Adidas</option>
      <option value="Nike">Nike</option>
      <option value="Puma">Puma</option>
    </select>
  </div>

  <input type="submit" name="submit" value="Thêm" style="margin-left: 110px; font-size: 16px;  cursor: pointer" onclick="themSP()">
  `;
}

function themSP() {
  let dssp = JSON.parse(localStorage.getItem("DS_SP"));
  let tenSP = document.querySelector("#ten_them").value;
  let anhSP = anh_them_tmp;
  let loaiSP = document.querySelector("#loai_them").value;
  let giaSP = Number.parseInt(document.querySelector("#gia_them").value);
  let thuonghieuSP = document.querySelector("#thuong_hieu_them").value;
  console.log(anh_them_tmp);
  if (tenSP === "") {
    alert("Bạn chưa nhập tên sản phẩm!");
    return;
  }
  if (loaiSP === "Chọn") {
    alert("Bạn chưa chọn loại sản phẩm!");
    return;
  }
  if (giaSP === "") {
    alert("Bạn chưa nhập giá sản phẩm!");
    return;
  }
  if (thuonghieuSP === "Chọn") {
    alert("Bạn chưa chọn thương hiệu");
  }

  let s;
  let len;
  len = ds_sp.length + 1;
  while (1) {
    s = len.toString();
    if (len < 10) s = `0${len}`;
    let tmp = ds_sp.filter((value) => {
      return value.id.includes(s);
    });
    if (tmp.length === 0) break;
    len++;
  }

  // console.log(tmp.length);
  // while (1) {
  //   if (ds_sp.id.indexOf(len) == -1) break;
  // }
  idSP = `SP_${s}`;
  anhSP =
    anhSP != "" ? anhSP : "./img_admin/./img_product/giay/default_shoes.png"; //nếu không set ảnh thì lấy ảnh default

  let sp = {
    id: idSP,
    ten: tenSP,
    anh: anhSP,
    gia: giaSP,
    loai: loaiSP,
    thuonghieu: thuonghieuSP,
  };
  ds_sp.push(sp);
  xuatDSSP();
  localStorage.setItem("DS_SP", JSON.stringify(ds_sp));
  // console.log(ds_sp);
}

//////////////////////////////////////////////////CODE ĐỂ CHỈNH SỬA//////////////////////////////////////

function form_sua_sp(num) {
  let sp = ds_sp[num];
  let e = document.getElementById("suaSP");
  e.parentElement.style.display = "block";
  e.innerHTML = ``;
  e.innerHTML += `
  <div style="text-align: right">    
    <button id="close_form_sua" onclick="dong_form_sua()" style="font-size: 30px; border:none; margin: 8px; background-color: rgb(245, 244, 244); cursor: pointer">x</button>
  </div>
  <div style="text-align: center;">
    <img src="${sp.anh}" alt="hinh_sp">
    <img id="anh_form_sua123" src="./img_admin/./img_product/giay/default_shoes.png" alt="hinh_13246" >
  </div>
  <form id="form_sua" style="font-size:18px; ">
      <label for=""><b>Tên sản phẩm</b></label>
      <input type="text" id="ten_sp_sua" value="${sp.ten}"/> <br />
      <label for=""><b>Giá sản phẩm</b></label>
      <input type="text" id="gia_sp_sua" value="${sp.gia}"/> <br />
      <label for=""><b>Sửa ảnh</b></label>
      <input id="anh_sp_sua" type="file" accept="image/png, image/jpeg" onchange="inputAnh_sua(${num})"/> <br />
      <input id="save" type="button" value="Lưu chỉnh sửa" onclick="cap_nhat_sp(${num})"/>
    </form>
  
  `;
}
function dong_form_sua() {
  let e = document.getElementById("fake_background1");
  e.style.display = "none";
}

function cap_nhat_sp(num) {
  let sp = ds_sp[num];
  let ten = document.getElementById("ten_sp_sua");
  let gia = document.getElementById("gia_sp_sua");
  let anh = document.getElementById("anh_form_sua123");
  console.log(anh.src);
  if (ten.value === "") {
    alert("Bạn chưa nhập tên sản phẩm!");
    return;
  }
  if (gia.value === "") {
    alert("Bạn chưa nhập giá sản phẩm!");
    return;
  }
  //Nếu ảnh khác rỗng thì cập nhật ảnh
  // if (anh.value !== "") {
  //   sp.anh = anh;
  // }
  //Cật nhật giá trị của tên và giá
  sp.ten = ten.value;
  sp.gia = gia.value;
  if (
    anh.src !== "" &&
    anh.src !==
      "http://127.0.0.1:5500/img_admin/img_product/giay/default_shoes.png"
  )
    sp.anh = anh.src;
  //Đưa ds mới cập nhật lên localStorage
  localStorage.setItem("DS_SP", JSON.stringify(ds_sp));
  // console.log(anh.files);
  dong_form_sua();
  let k = num;
  if (k % perPage == 0) k += perPage / 10;
  handlePage1(Math.ceil(k / perPage));
  renderPage1();
}

function inputAnh_sua(num) {
  let e = document.getElementById("anh_sp_sua");
  let e1 = document.getElementById("anh_form_sua123");
  console.log(e.files);
  if (e.files.length === 0) return;
  let fileToLoad = e.files[0]; // Access the first file in the FileList
  let fileReader = new FileReader();
  fileReader.onload = function (fileLoaderEvent) {
    let srcData = fileLoaderEvent.target.result;
    let newImage = document.createElement("img");
    newImage.src = srcData;
    console.log(newImage.src);
    // ds_sp[num].anh = newImage.src;
    e1.src = newImage.src;
    console.log(e1.src);
    // form_sua_sp(num);
  };
  fileReader.readAsDataURL(fileToLoad); // Pass the single file to readAsDataURL
}
var anh_them_tmp = "";

function inputAnh_them() {
  let e = document.getElementById("anh_them");
  console.log(e.files);
  if (e.files.length === 0) return;
  let fileToLoad = e.files[0]; // Access the first file in the FileList
  let fileReader = new FileReader();
  fileReader.onload = function (fileLoaderEvent) {
    let srcData = fileLoaderEvent.target.result;
    let newImage = document.createElement("img");
    newImage.src = srcData;
    anh_them_tmp = newImage.src;
  };
  fileReader.readAsDataURL(fileToLoad); // Pass the single file to readAsDataURL
}

//////////////////////////////////////////////CODE DON HANG///////////////////////////////////////////////////////////////////
const DS_DH = [
  {
    maDH: "DH_01",
    ngay: "23/9/2023",
    maKH: "KH_004",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Đã hủy",
  },
  {
    maDH: "DH_02",
    ngay: "1/10/2023",
    maKH: "KH_003",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Đã giao hàng",
  },
  {
    maDH: "DH_03",
    ngay: "5/10/2023",
    maKH: "KH_006",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Đã xác nhận",
  },
  {
    maDH: "DH_04",
    ngay: "10/10/2023",
    maKH: "KH_002",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Chưa xử lí",
  },
  {
    maDH: "DH_05",
    ngay: "13/10/2023",
    maKH: "KH_005",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Đã hủy",
  },
  {
    maDH: "DH_06",
    ngay: "18/10/2023",
    maKH: "KH_006",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Đã giao hàng",
  },
  {
    maDH: "DH_07",
    ngay: "20/10/2023",
    maKH: "KH_006",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Đã xác nhận",
  },
  {
    maDH: "DH_08",
    ngay: "25/10/2023",
    maKH: "KH_002",
    chiTiet: {
      listSP: [
        {
          sp: LCS_SP[1],
          soLuong: 1,
        },
        {
          sp: LCS_SP[2],
          soLuong: 2,
        },
      ],
    },
    trangThai: "Chưa xử lí",
  },
];
// localStorage.setItem("DS_DH", JSON.stringify(DS_DH));

var ds_dh = JSON.parse(localStorage.getItem("DS_DH"));
perDH = [];
function xuatDS_DH() {
  renderPage2();
  handlePage2(1);
}

//Danh sách trang
function renderPage2() {
  //Cho số lượng phần tử trên 1 trang
  perPage = 2;
  totalPage = Math.ceil(ds_dh.length / perPage);
  let page = document.querySelector("#pagination2");
  page.innerHTML = "";
  for (let i = 1; i <= totalPage; i++) {
    page.innerHTML += `<li id="dh_Page_${i}" onclick="handlePage2(${i})">${i}</li>`;
  }
}

function handlePage2(num) {
  currentPage = num;
  //Cắt SP từ mảng ds_sp
  perDH = ds_dh.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  xuatHD();

  //Thực hiện để lúc chọn trang nào thì số trang của nó in đậm nổi bật
  for (let i = 1; i <= totalPage; i++) {
    let Page_id = "dh_Page_" + i;
    let e = document.getElementById(Page_id);
    if (i == num) {
      e.style.color = "#ffff";
      e.style.backgroundColor = "#0f1b07";
    } else {
      e.style.color = "#0f1b07";
      e.style.backgroundColor = "#ffff";
    }
  }
}

function timKhachHang(ma) {
  let khachHang = DS_KH.find((kh) => kh.ms_kh === ma);
  console.log(ma);
  // console.log(khachHang.ms_kh);
  if (khachHang) return khachHang;
  return null;
}

//Hàm xuất danh sách sản phẩm
function xuatHD() {
  let s1 = `Danh sách đơn hàng`;
  document.querySelector("#h1_dh").innerHTML = s1;
  let s = `<tr>
    <th align="center">ID_HD</th>
    <th align="center">Tên khách hàng</th>
    <th align="center">Chi tiết</th>
    <th align="center">Tình trạng</th>
    <th align="center">Ngày</th>
    <th align="center">Địa chỉ giao hàng</th>
    <th align="center">Tuỳ chỉnh</th>
    </tr>`;
  if (perDH.length === 0) {
    s += `
    <td colspan="6" align="center" style = "width: 100vw">Không có hóa đơn nào</td>
    `;
    let e = document.querySelector("#table2");
    e.innerHTML = s;
  } else {
    perDH.forEach((i) => {
      //Tìm khách hàng theo maKH
      let kh_tmp = timKhachHang(i.maKH);
      //Chuỗi chứ thông tin chi tiết của sản phẩm
      let listSP = ``;
      let sum = 0;
      i.chiTiet.listSP.forEach((j) => {
        console.log(j);
        listSP += `
        * ${j.sp.ten} 
        &nbsp;&nbsp;x${j.soLuong}  <br/>
        Giá: <u>${formatCash(j.sp.gia.toString()) + "đ"}</u> <br/> <br/>
        `;
        // &nbsp giống /t nhưng dùng trong innerHTML
        sum += Number.parseInt(j.sp.gia) * Number.parseInt(j.soLuong);
      });

      //Tính giá tiền
      console.log(sum);
      let tien = formatCash(sum.toString()) + "đ";
      listSP += `<b>Tổng tiền: ${tien}</b>`;

      //Lấy địa chỉ của khách hàng
      let dc_tmp = ds_dc.find((dc) => dc.maKH === i.maKH);
      console.log(dc_tmp);
      let sDiaChi =
        dc_tmp.soNha +
        " " +
        dc_tmp.duong +
        ", " +
        dc_tmp.quan_huyen +
        ", " +
        dc_tmp.tp_tinh +
        "\n";

      //Đưa thông tin đơn hàng vào chuỗi s để innerHTML ra
      s += `<tr>
    <td align="center">${i.maDH}</td>
    <td align="center">${kh_tmp.hvt}</td>
    <td align="">${listSP}</td>
    <td align="center">${i.trangThai}</td>
    <td align="center">${i.ngay}</td>
    <td align="center">${sDiaChi}</td>
    <td align="center">
    <button id="xoa" onclick="xoaDH(${ds_dh.indexOf(
      i
    )})" style = "cursor: pointer">Xoá</button>
    <button id="chinh_sua" onclick="form_sua_dh(${ds_dh.indexOf(
      i
    )})" style = "cursor: pointer">Sửa</button>
    </tr>`;
      // console.log(ds_sp.indexOf(i) + "hello");
    });

    let e = document.querySelector("#table2");
    e.innerHTML = s;
  }

  //Để display của các content khác là none
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  content4.style.display = "none";

  form_tim_kiem_dh();
}

//////////////////////////////////////////////////////////////HÀM ĐỂ XOÁ SẢN PHẨM///////////////////////////////////////////////////

function xoaDH(num) {
  let k = num;
  if (k % perPage == 0) k += perPage / 10;

  if (confirm("Bạn có muốn xoá đơn hàng không ?")) {
    ds_dh.splice(num, 1); //Xoá trên màn hình hiển thị
  }

  //Cập nhập trên localStorage
  // localStorage.setItem("DS_DH", JSON.stringify(ds_dh));

  //Xóa xong xuất lại tại trang chứa phần tử mới xóa
  handlePage2(Math.ceil(k / perPage));
  renderPage2();
}

///////////////////////////////////////////////////////////////CODE ĐỂ TÌM KIẾM/////////////////////////////////////////////////////

function form_tim_kiem_dh() {
  let elm = document.querySelector("#timkiemDH");
  elm.style.backgroundColor = "rgb(179, 178, 178)";
  elm.innerHTML = "";
  elm.innerHTML += `
  <h2 align="center">Tìm kiếm đơn hàng</h2>
  <div id="tenKH_formDH">
    <label for="ten_KH_formDH">Tên khách hàng</label> <br>
    <input id="ten_KH_formDH" name="ten_KH_formDH" type="text" placeholder="Nhập vào tên khách hàng">
  </div>
  
  <div id="ngayDH">
    <label for="ngay_DH_formDH">Lọc theo giá</label> <br>
    <input name = "ngay_DH_formDH" id = "ngay_DH_formDH" type = "date" />
  </div>

  <div id="trangThaiDH_formDH">
    <label for="trangThai_DH_formDH">Loại sản phẩm</label> <br>
    <select id="trangThai_DH_formDH" name="trangThai_DH_formDH">
      <option value="Chọn">Chọn</option>
      <option value="Chưa xử lí">Chưa xử lí</option>
      <option value="Đã xác nhận">Đã xác nhận</option>
      <option value="Đã giao hàng">Đã giao hàng</option>
      <option value="Đã hủy">Đã hủy</option>
    </select>
  </div>

  <input type="submit" name="submit" value="Tìm kiếm" style="margin-left: 90px; font-size: 16px; cursor: pointer" onclick="timKiemDH()">
  `;
}

function timKiemDH() {
  // ds_sp = SP;
  ds_dh = JSON.parse(localStorage.getItem("DS_DH"));
  let tenKH = document.querySelector("#ten_KH_formDH").value;
  let ngay = document.getElementById("ngay_DH_formDH").value;
  let trangThai = document.getElementById("trangThai_DH_formDH").value;

  if (tenKH !== "") {
    ds_dh = ds_dh.filter((value) => {
      let khachHang = timKhachHang(value.maKH);
      return (
        khachHang && khachHang.hvt.toLowerCase().includes(tenKH.toLowerCase())
      );
    });
  }
  if (ngay !== "") {
    let tmp = new Date(ngay);
    let day = tmp.getDate();
    let month = tmp.getMonth() + 1;
    let year = tmp.getFullYear();
    let sNgay = `${day}/${month}/${year}`;
    ds_dh = ds_dh.filter((value) => {
      return value.ngay.includes(sNgay);
    });
  }

  if (trangThai !== "Chọn") {
    ds_dh = ds_dh.filter((value) => {
      return value.trangThai.toLowerCase().includes(trangThai.toLowerCase());
    });
  }
  //Tìm xong sẽ xuất danh sách pử trang đầu
  xuatDS_DH();
}

////////////////////////////////////////////////////////CODE SUA DON HANG///////////////////////////////////////////

function form_sua_dh(num) {
  let dh = ds_dh[num];
  let e = document.getElementById("suaDH");
  e.parentElement.style.display = "block";
  let kh_tmp = timKhachHang(dh.maKH);
  e.innerHTML = ``;
  e.innerHTML += `
  <div style="text-align: right">    
    <button id="close_form_sua" onclick="dong_form_sua_dh()" style="font-size: 30px; border:none; margin: 8px; background-color: rgb(245, 244, 244)">x</button>
  </div>
  <form id="form_sua" style="font-size:18px; ">
      <label for=""><b>Tên khách hàng</b></label> <br/>
      <input type="text" id="ten_kh_sua_dh" value="${kh_tmp.hvt}"/> <br />
      <label for=""><b>Ngày</b></label> <br/>
      <input type="date" id="ngay_sua_hd"/> <br />
      <label for="trangThai_dh_sua"><b>Trạng thái</b></label>
      <select id="trangThai_dh_sua" name="trangThai_dh_sua">
        <option id="tt1" value="Chưa xử lí">Chưa xử lí</option>
        <option id="tt2" value="Đã xác nhận">Đã xác nhận</option>
        <option id="tt3" value="Đã giao hàng">Đã giao hàng</option>
        <option id="tt4" value="Đã hủy">Đã hủy</option>
      </select> <br/>
      <input id="save_dh" type="button" value="Lưu chỉnh sửa" onclick="cap_nhat_dh(${num})"/>
    </form>  
  `;
  //Để ngày hiện đúng trên hóa đơn
  let arr = dh.ngay.split("/");
  // console.log(arr);
  let date = Number.parseInt(arr[0]);
  let month = Number.parseInt(arr[1]);
  let year = Number.parseInt(arr[2]);
  let tmp = `${year}-${month.toString().padStart(2, "0")}-${date
    .toString()
    .padStart(2, "0")}`;
  let setNgay = document.getElementById("ngay_sua_hd");
  setNgay.value = tmp;
  //Để cho trạng thái hiện đúng trên hóa đơn
  let tt1 = document.getElementById("tt1");
  let tt2 = document.getElementById("tt2");
  let tt3 = document.getElementById("tt3");
  let tt4 = document.getElementById("tt4");
  console.log(tt1.value);
  console.log(dh.trangThai);
  if (dh.trangThai === tt1.value) {
    tt1.outerHTML = `
      <option id="tt1" value="Chưa xử lí" selected>Chưa xử lí</option>
    `;
    return;
  }
  if (dh.trangThai === tt2.value) {
    tt2.outerHTML = `
      <option id="tt2" value="Đã xác nhận" selected>Đã xác nhận</option>
    `;
    return;
  }
  if (dh.trangThai === tt3.value) {
    tt3.outerHTML = `
      <option id="tt3" value="Đã giao hàng" selected>Đã giao hàng</option>
    `;
    return;
  }
  if (dh.trangThai === tt4.value) {
    tt4.outerHTML = `
      <option id="tt4" value="Đã hủy" selected>Đã hủy</option>
    `;
    return;
  }
}

function dong_form_sua_dh() {
  let e = document.getElementById("fake_background2");
  e.style.display = "none";
}

function cap_nhat_dh(num) {
  let dh = ds_dh[num];
  let tenKH = document.getElementById("ten_kh_sua_dh");
  let ngay = document.getElementById("ngay_sua_hd");
  let trangThai = document.getElementById("trangThai_dh_sua");
  if (tenKH.value === "") {
    alert("Bạn chưa nhập tên khách hàng!");
    return;
  }
  if (ngay.value === "") {
    alert("Bạn chưa nhập ngày!");
    return;
  }
  // console.log(tenKH.value);
  // console.log(ngay.value);
  // console.log(trangThai.value);

  let tmp = new Date(ngay.value);
  let day = tmp.getDate();
  let month = tmp.getMonth() + 1;
  let year = tmp.getFullYear();
  let sNgay = `${day}/${month}/${year}`;
  dh.ngay = sNgay;
  dh.trangThai = trangThai.value;
  dh.tenKH = tenKH.value;

  //Đưa ds mới cập nhật lên localStorage
  localStorage.setItem("DS_DH", JSON.stringify(ds_dh));
  // console.log(anh.files);
  dong_form_sua_dh();
  let k = num;
  if (k % perPage == 0) k += perPage / 10;
  handlePage2(Math.ceil(k / perPage));
  renderPage2();
}
