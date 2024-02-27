import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import React, { memo, useEffect, useState } from "react";
import ProductDetail from "./components/Main/FeedRecommend/ListProducts/ProductDetail";
import Bag from "./components/Main/Bag";

const listProduct = [
  {
    modern: 1,
    sponsor: "",
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png",
    rcmText: "Thời Trang Nữ",
    bgColor: "true",
    playButton: "",
    discount: "-50%",
    oldPrice: "32.000đ",
    newPrice: "16.000đ",
    image: "https://media3.scdn.vn/img4/2024/01_12/yKTGBhBQYlNUXbSyNT57.jpg",
    sold: "5",
    rate: "4.2",
    city: "Đồng Nai",
    productType: "Đầm, Váy",
    quantitiesSale: "Hơn 46K SP đang bán",
    voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    shop: "true",
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png",
    nameProduct: "Móc Khóa An Toàn Chuyên Dùng Cho Bạt, Lưới Che Nắng 1",
  },
  {
    modern: 2,
    sponsor: "",
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png",
    rcmText: "Thời Trang Nữ",
    bgColor: "true",
    playButton: "",
    discount: "-50%",
    oldPrice: "32.000đ",
    newPrice: "16.000đ",
    image: "https://media3.scdn.vn/img4/2024/01_12/yKTGBhBQYlNUXbSyNT57.jpg",
    sold: "",
    rate: "4.2",
    city: "Đồng Nai",
    quantitiesSale: "Hơn 46K SP đang bán",
    voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    shop: "",
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png",
    nameProduct: "Móc Khóa An Toàn Chuyên Dùng Cho Bạt, Lưới Che Nắng 2",
  },
  {
    modern: 3,
    sponsor: "",
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png",
    rcmText: "Thời Trang Nữ",
    bgColor: "true",
    playButton: "",
    discount: "-50%",
    oldPrice: "32.000đ",
    newPrice: "16.000đ",
    image: "https://media3.scdn.vn/img4/2024/01_12/yKTGBhBQYlNUXbSyNT57.jpg",
    sold: "",
    rate: "4.2",
    city: "Đồng Nai",
    quantitiesSale: "Hơn 46K SP đang bán",
    voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    shop: "",
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png",
    nameProduct: "Móc Khóa An Toàn Chuyên Dùng Cho Bạt, Lưới Che Nắng 3",
  },
  {
    modern: 4,
    sponsor: "",
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png",
    rcmText: "Thời Trang Nữ",
    bgColor: "true",
    playButton: "",
    discount: "-50%",
    oldPrice: "32.000đ",
    newPrice: "16.000đ",
    image: "https://media3.scdn.vn/img4/2024/01_12/yKTGBhBQYlNUXbSyNT57.jpg",
    sold: "",
    rate: "4.2",
    city: "Đồng Nai",
    quantitiesSale: "Hơn 46K SP đang bán",
    voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png",
    shop: "",
    shopIcon:
      "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png 4",
    nameProduct: "Đầm, Váy",
  },
];


function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [localCount, setLocalCount] = useState(0);
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  const [pro, setPro] = useState([]);

  const handleIncrease = (newCount) => {
    setLocalCount(localCount + newCount);
    setNum(newCount);
  };
  const namePro = (newName) => {
    setName(newName);
  };

  useEffect(() => {
    if (num !== 0 && name !== "") {
      setPro((prevPro) => {
        const itemIndex = prevPro.findIndex((item) => item.name === name);
        if (itemIndex !== -1) {
          return prevPro.map((item, index) => {
            if (index === itemIndex) {
              return { ...item, count: item.count + num };
            }
            return item;
          });
        } else {
          return [...prevPro, { count: num, name: name, check: false }];
        }
      });
    }
  }, [name, num]);

  useEffect(() => {
    // Calculate total count whenever pro changes
    const sum = pro.reduce((total, item) => total + item.count, 0);
    setLocalCount(sum);
  }, [pro]);

  console.log(pro);

  useEffect(() => {
    // Calculate the height of the Navigation component
    const navigationHeight = document.getElementById("navigation").offsetHeight;
    setNavHeight(navigationHeight);
  }, [navHeight]);

  return (
    <main>
      <Navigation localCount={localCount} />
      <Routes>
        <Route
          path="/test-git-push"
          element={<Main isFixed={navHeight < 96} listProduct={listProduct} />}
        />
        <Route
          path="/test-git-push/:nameProduct"
          element={
            <ProductDetail
              noPro={handleIncrease}
              listProduct={listProduct}
              namePro={namePro}
            />
          }
        />
        <Route
          path="/test-git-push/Bag"
          element={
            <Bag pro={pro} listProduct={listProduct} updatePro={setPro} />
          }
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default memo(App);
