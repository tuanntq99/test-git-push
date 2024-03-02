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
import PaymentPage from "./components/PaymentPage";

const listProduct = [
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "34%", // 1 & 3
    oldPrice: "180.000đ",
    newPrice: "119.000đ",
    image: "", // 2
    sold: "5", // 1
    rate: "4.2", // 1
    city: "Hà Nội", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
    voucher2: "", // 1
    shop: "", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct: "Áo chống nắng nam",
    nameProductWeb: "ao-khoac-nam-01",
    listImage: [
      "https://media3.scdn.vn/img3/2019/4_17/wu30ze_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img3/2019/4_17/KL7g2w_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img3/2019/4_17/abvRcf_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img3/2019/4_17/LO0NuW_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img3/2019/4_17/mauDo0_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img3/2019/4_17/7EDo8e_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img3/2019/4_17/czfOcL_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Thời trang nam",
    typeDetail: "Áo khoác nam",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "48%", // 1 & 3
    oldPrice: "380.000đ",
    newPrice: "119.000đ",
    image: "", // 2
    sold: "5", // 1
    rate: "4.5", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "",
    voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
    voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct: "Áo khoác nam kaki 2 lớp cao cấp mẫu mới nhất",
    nameProductWeb: "ao-khoac-nam-kaki-2-lop-cao-cap-mau-moi-nhat",
    listImage: [
      "https://media3.scdn.vn/img4/2021/01_17/DGUyy1cLWQJHeNbmnoiP_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2021/01_17/wPFulirLVBjK2C6HpSwq_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2021/01_17/Qsdtp876RQySjwbVmm6T_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2021/01_17/PH0sJeFvPFK5357GVBjB_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2021/01_17/bSk8JDsbpTNzGlxFvnsu_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2021/01_17/wXkCscN1ixfKXXSgV2qn_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Thời trang nam",
    typeDetail: "Áo khoác nam",
    flashSale: "", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "46%", // 1 & 3
    oldPrice: "109.000đ",
    newPrice: "59.000đ",
    image: "", // 2
    sold: "5", // 1
    rate: "3.9", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
    voucher2: "", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct: "Áo khoác bomber nam xịn đẹp",
    nameProductWeb: "ao-khoac-nam-bomber-nnam-xin-dep",
    listImage: [
      "https://media3.scdn.vn/img4/2023/09_21/UCdjHosgJhwZTL1CJzkb_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_21/FRUbuGwr12e50Bp9ZaKo_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_21/y0j7gnexCFBK4OT3JKdO_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_21/F2yH3vqP8XJqJCpS9XqT_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_21/NJNRSjXnJDYWpu9FddRt_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_21/2rJ5vMeLsujeLwH70jJO_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Thời trang nam",
    typeDetail: "Áo khoác nam",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "true", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "26%", // 1 & 3
    oldPrice: "125.000đ",
    newPrice: "93.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.8", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct: "Máy xay tỏi ớt, xay thịt đa năng Osaka -486",
    nameProductWeb: "may-xay-toi-ot-xay-thit-da-nang-Osaka-486",
    listImage: [
      "https://media3.scdn.vn/img4/2020/08_04/5v7V3ihplqtdQMhOrYfV_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2020/08_04/SJFvpgPSnMaIItUjledp_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2020/08_04/qfoJRLgvVEcLBImV8HoI_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2020/08_04/VILMrdoj7F1PYsEpViNM_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2020/08_04/2kuZ6vMHzTjLh81anZZH_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2020/08_04/JSCkofNGazGJEwIyw77O_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Đồ điện gia dụng",
    typeDetail: "Máy xay, máy ép",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "43%", // 1 & 3
    oldPrice: "66.000đ",
    newPrice: "38.000đ",
    image: "", // 2
    sold: "7", // 1
    rate: "4.5", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Lọ Sơn Kẻ Chỉ Gạch Công Nghệ HQ 280ml - Keo Chà Ron Sứ Đa Năng - Lọ Sơn Kẻ Chỉ Gạch Công Nghệ HQ 280ml",
    nameProductWeb:
      "lo-son-ke-chi-gach-cong-nghe-hq-280ml-keo-cha-ron-su-da-nang",
    listImage: [
      "https://media3.scdn.vn/img4/2023/09_04/43oNsRCtV9uHqO89tl6f_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_04/5dlfbBYIzkBuMIsceBz0_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_04/j6nPXBKxNj2qHlqUif2G_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_04/Uw2f1nwlN6G3OPkJ4NZW_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/09_04/h7tOYC0Iu5bK3Vu3YSPS_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_30/0YVG5txgrVJ689SrfN7A_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà cửa",
    typeDetail: "Vệ sinh, chăm sóc nhà cửa",
    flashSale: "", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "62%", // 1 & 3
    oldPrice: "179.000đ",
    newPrice: "69.000đ",
    image: "", // 2
    sold: "29", // 1
    rate: "4.7", // 1
    city: "Thái Nguyên", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Bình Giữ Nhiệt 1000 ml INOX SUS 316 kiểu dáng thể thao, giữ nóng lạnh tốt, Có Tấm Lọc, Giữ Nhiệt Lên Đến 24 Tiếng - BÌNH GIỮ NHIỆT 24H 1000ML",
    nameProductWeb:
      "binh-giu-nhiet-1000ml-inox-sus-316-kieu-dang-the-thao-gu-nong-lanh-tot",
    listImage: [
      "https://media3.scdn.vn/img4/2022/05_22/R0jx918koEpfzgFoDnpK_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/05_22/2V1AzG2PQCtmL8UBk56R_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/05_22/cqcg3MCJW2CNf5bYr5rM_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/05_22/FD4ugCyoepvy8FdnGsJe_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/05_22/QLtHfiWhCXzz5wkEvzlh_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/07_28/waXLz5zJ14He1tTfCrwG_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà cửa",
    typeDetail: "Đồ dùng phòng ăn, uống",
    flashSale: "", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "9%", // 1 & 3
    oldPrice: "12.000đ",
    newPrice: "11.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.5", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Keo Siêu Dính Công Nghệ Nhật Bản No More Nail Free Glue Tuýp 60g Keo Siêu Dán Tường Dán Giày Gỗ Thuỷ Tinh Đa Năng - 3985_110686684",
    nameProductWeb: "keo-sieu-dinh-cong-nghe-Nhat_Ban",
    listImage: [
      "https://media3.scdn.vn/img4/2023/02_02/q4z2gCMi52AOUVu4wT73_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/02_02/82AVIo2MYbs3N8uVGBRv_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/02_02/K9BIs6anWDqDWn3x6qxf_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/02_02/IfxpcC7Xy9BlZ9sVRBRF_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/02_02/o7sdOwx2eWypRCeNGCBS_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/02_02/X4aDrGd4gIuUJp5sxacM_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Đời sống",
    typeDetail: "Dụng cụ làm đồ handmade",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "53%", // 1 & 3
    oldPrice: "165.000đ",
    newPrice: "79.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.9", // 1
    city: "Hà Nội", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Hộp 30 Chiếc Bàn Chải Đánh Răng Than Tre Hoạt Tính Bossi Hàn Quốc - bàn chải 30c",
    nameProductWeb:
      "hop-30-chiec-ban-chai-danh-rang-tre-hoat-tinh-Bossi-Han_Quoc",
    listImage: [
      "https://media3.scdn.vn/img4/2023/02_09/fLWVsdX5u6dVv76UD0te_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/02_09/vujfnlF3sBkNVLEoJ8mA_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/02_09/7mAxmKaa3YB6IiidUUH2_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/02_09/qDVPFLHPku2te8tzZBbL_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/02_09/iYnNNfSXfs29JhK6lqKS_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/02_09/eKC8MtCQ13FfYurthCrt_simg_de2fe0_500x500_maxb.png",
    ],
    shopType: "Sức Khỏe & Làm Đẹp",
    typeDetail: "Chăm sóc răng miệng",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "68%", // 1 & 3
    oldPrice: "259.000đ",
    newPrice: "85.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.7", // 1
    city: "Thái Nguyên", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Nồi chiên dán sâu lòng chống dính đa năng dùng được cho mọi loại bếp tặng kèm vỉ gác dầu xuất nhật cao cấp - Nồi Chiên Dán Sâu Lòng Chống Dính",
    nameProductWeb:
      "noi-chien-dan-sau-long-chong-dinh-da-nang-dung-duoc-cho-moi-loai-bep-tang-kem-vi-gac-dau-xuat-nhap-cao-cap",
    listImage: [
      "https://media3.scdn.vn/img4/2023/10_13/ldBoDr6GvVuM85XVQegS_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/gbPRF3zVuA5iEVQpXMQf_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/Z8r0MCCFkTxr4SqMNFiJ_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/8Zf3wdNMHYvga4nrTxmX_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/uKCNoCfcSE4Rd10VJdYj_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/LB88EbqFBoReHv0YvtAy_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà Cửa",
    typeDetail: "Đồ dùng nhà bếp",
    flashSale: "", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "50%", // 1 & 3
    oldPrice: "10.000đ",
    newPrice: "5.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.6", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Hộp 50 Cây Tăm Chỉ Nha Khoa Cho Răng Trắng Sạch - Tăm nha khoa xỉa răng - 4099_103248112",
    nameProductWeb:
      "hop-50-cay-tam-chi-nha-khoa-cho-rang-trang-sach-tam-nha-khoa-xia-rang",
    listImage: [
      "https://media3.scdn.vn/img4/2022/10_02/gKXzklJzzzFQsT069fMu_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/10_02/pTRBrYaAPbrJbDplEj7R_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/10_02/sXuKwBlQpDPa7ZOpDPdL_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/10_02/FoJv0YPmcgrJcjFPveKm_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/10_02/JXEHxBLzzUsBQ7hhJ5GQ_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Sức Khỏe & Làm Đẹp",
    typeDetail: "Chăm sóc răng miệng",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "41%", // 1 & 3
    oldPrice: "199.000đ",
    newPrice: "119.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.6", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Đầm váy cotton lạnh 2 dây xòe dài kèm áo khoác cổ bẻ tay ngắn nhung 2 kiểu mặt y hình T1432 - T1432",
    nameProductWeb:
      "dam-vay-cotton-lanh-2-day-xoe-dai-kem-ao-khoac-co-be-tay-ngan-nhung-2 kieu-mat-y-hinh-T1432",
    listImage: [
      "https://media3.scdn.vn/img4/2023/12_14/3IZMocy8RefmQUnlml7n_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/12_14/gkpjXV6WBwApvGPwlB1d_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/12_14/Bq50x4sloHrwiWrOJ1gI_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/12_14/CWdzOgrCJfvbvPWQHih8_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/12_14/HagP0VUyAM3gCJTmQpJQ_simg_de2fe0_500x500_maxb.png",
      "https://media3.scdn.vn/img4/2023/12_14/z9wbEZo5xffOmHtoDuHZ_simg_de2fe0_500x500_maxb.png",
    ],
    shopType: "Thời trang nữ",
    typeDetail: "Đầm, váy",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "45%", // 1 & 3
    oldPrice: "69.000đ",
    newPrice: "38.200đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.7", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Đầm váy cotton lạnh 2 dây xòe dài kèm áo khoác cổ bẻ tay ngắn nhung 2 kiểu mặt y hình T1432 - T1432",
    nameProductWeb:
      "dam-vay-cotton-lanh-2-day-xoe-dai-kem-ao-khoac-co-be-tay-ngan-nhung-2 kieu-mat-y-hinh-T1432",
    listImage: [
      "https://media3.scdn.vn/img4/2023/05_24/b3DuxxudNZwx8kM7apvQ_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/05_24/wYgEALLALIH0ljTbEBuk_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/05_24/BBVkFZlIyu8JtjHYHthJ_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/05_24/vwbSvBA0s8ovqGppZuCS_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/05_24/d3CyWVATh0INKEIZIHUo_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/05_24/j6t7EwiLoy7LgM3noAmn_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà Cửa",
    typeDetail: "Vệ sinh, chăm sóc nhà cửa",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "51%", // 1 & 3
    oldPrice: "1.800.000đ",
    newPrice: "890.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "5", // 1
    city: "Quảng Nam", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Nồi chiên không dầu Silνercrest 8L Hàng Chính Hãng Đức. Công suất lớn 2400w tiết kiệm điện - 1697166207",
    nameProductWeb: "noi-chien-khong-dau-Silvercrest-8L-hang-chin-hang-Duc",
    listImage: [
      "https://media3.scdn.vn/img4/2023/10_13/PWMu03ScGXOC5RFCNMHl_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/i1m61tH5MbjJoIrcE7WE_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/1GWxNh3Xv7mtP1kbFBRb_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/oXqomeYZOrOW89biIxbw_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/j02u1pwKlnXuEnzyKygC_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/10_13/9RRrvMeh3gI9eaTqCN9a_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà Cửa",
    typeDetail: "Đồ dùng nhà bếp",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "63%", // 1 & 3
    oldPrice: "89.000đ",
    newPrice: "33.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.9", // 1
    city: "Thái Nguyên", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Chai Thuỷ Tinh Trụ Tròn Vát Eo Trong Suốt , Sang Trọng - Chai thủy tinh trụ tròn vát eo",
    nameProductWeb: "chai-thuy-tinh-tru-tron-vat-eo-trong-suot",
    listImage: [
      "https://media3.scdn.vn/img4/2022/11_30/hvi0mztBBmXqUPTZEOmD_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/11_30/eCylV36ZQjC3radKcIEr_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/11_30/MGBoHwCY0WRGydinRcHV_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/11_30/MNqYD5NLO5GdBcgUzq42_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/11_30/QLwzEXrX3jgLPWQbulIh_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/11_30/dnJXpbo0LSrs9nnwJolB_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà Cửa",
    typeDetail: "Đồ dùng phòng ăn, uống",
    flashSale: "", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "44%", // 1 & 3
    oldPrice: "125.000đ",
    newPrice: "71.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "5", // 1
    city: "Thái Nguyên", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Hộp đựng cơm văn phòng bằng thủy tinh 1000ml 3 ngăn chống tràn dùng cho lò vi sóng - Hộp cơm thủy tinh 3 ngăn",
    nameProductWeb:
      "hop-dung-com-van-phong-bang-thuy-tinh-1000ml-3-ngan-chong-tran-dung-cho-lo-vi-song",
    listImage: [
      "https://media3.scdn.vn/img4/2023/08_11/Rf6YVnGfWbEVWWacljRV_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/65mhHmMNinqQKlQt0zC6_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/p1Sz6W79QAgrwh7iibo8_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/luttPUKwDF8DO9QmMa9A_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/3D8JEFmkM7X193YtjheL_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/fKhh0Kj8orEw9caLNah4_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà Cửa",
    typeDetail: "Đồ dùng sinh hoạt",
    flashSale: "", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "66%", // 1 & 3
    oldPrice: "79.000đ",
    newPrice: "29.000đ",
    image: "", // 2
    sold: "1", // 1
    rate: "4", // 1
    city: "Hà Nội", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Set 6 thìa inox mạ vàng màu xanh ngọc vân đá cao cấp kèm hộp sang trọng - Sét 6 thìa mạ vàng sang trọng",
    nameProductWeb:
      "set-6-thia-inox-ma-vang-mau-xanh-ngoc-van-da-cao-cap-kem-hop-sang-trong",
    listImage: [
      "https://media3.scdn.vn/img4/2023/08_11/de75bxOhygSxVPoBJ8G0_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/q9cVanrXQYlyEOZwymIf_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/QblOv66ZQM1GbvsM6bBf_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/OkFKf3LEtV5KLKzmghkM_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/08_11/SUEEM2xnrG2mxQz90WPu_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Mẹ và bé",
    typeDetail: "Dụng cụ ăn uống",
    flashSale: "", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "", // 1
    discount: "69%", // 1 & 3
    oldPrice: "22.000đ",
    newPrice: "7.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "5", // 1
    city: "Hà Nội", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "true", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct: "Cốc lúa mạch nhiều màu sắc - Cốc nhựa uống nước",
    nameProductWeb: "coc-lua-mach-nhieu-mau-sac",
    listImage: [
      "https://media3.scdn.vn/img4/2022/09_27/NcAKurI4SZtgT1nwZHsR_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/09_27/G7Ta1yZ2rO7uItrzZ4T2_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/09_27/IwTpa4mFcKQbH9prWE4n_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/09_27/pn53lEllAuIW55r1QdMr_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/09_27/QvzFKDKB5GGjLqZPhSp6_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2022/09_27/qvC3ILmhZWR1c7534jim_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Mẹ và bé",
    typeDetail: "Dụng cụ ăn uống",
    flashSale: "true", // 1
  },
  {
    modern: 1,
    sponsor: "", // 1
    rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
    rcmText: "Thời Trang Nam", // 4
    bgColor: "true", // 2 type color for type 4
    playButton: "true", // 1
    discount: "25%", // 1 & 3
    oldPrice: "25.200đ",
    newPrice: "19.000đ",
    image: "", // 2
    sold: "", // 1
    rate: "4.7", // 1
    city: "TP.HCM", // 1
    productType: "", // 4
    quantitiesSale: "", // 4
    voucher: "", // 1
    voucher1: "", // 1
    voucher2: "https://media3.scdn.vn/img4/2022/11_09/aRbPXfiRl6OXLDrLAWOR.png", // 1
    shop: "true", // 1
    shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
    nameProduct:
      "Túi Đựng Chăn Màn Hoa Văn Kẻ Caro Cỡ Lớn (100 Lít - 48 x 44 x 48 cm) - 1091_116261752",
    nameProductWeb: "tui-dung-chan-man-hoa-van-ke-cara-co-lon",
    listImage: [
      "https://media3.scdn.vn/img4/2023/12_26/oyOfAwHL8wsPkFWEsZid_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/12_26/2HDF6UwxZtRYrL4aepxn_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/12_26/avV67LTTOrrLx7kKTv5n_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/12_26/Ho5MMdnh3vjKboPBnKCz_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/12_26/xoVloJ2CbwuAz0ObP4ih_simg_de2fe0_500x500_maxb.jpg",
      "https://media3.scdn.vn/img4/2023/12_26/L4Do9kFsy9P7Al7Uln5e_simg_de2fe0_500x500_maxb.jpg",
    ],
    shopType: "Nhà Cửa",
    typeDetail: "Đồ dùng sinh hoạt",
    flashSale: "", // 1
  },
  // {
  //   modern: 2,
  //   sponsor: "", // 1
  //   rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
  //   rcmText: "Thời Trang Nam", // 4
  //   bgColor: "true", // 2 type color for type 4
  //   playButton: "", // 1
  //   discount: "34%", // 1 & 3
  //   oldPrice: "180.000đ",
  //   newPrice: "119.000đ",
  //   image: "https://media3.scdn.vn/img4/2024/01_12/yKTGBhBQYlNUXbSyNT57.jpg", // 2
  //   sold: "5", // 1
  //   rate: "4.4", // 1
  //   city: "Hà Nội", // 1
  //   productType: "Đầm, Váy", // 4
  //   quantitiesSale: "Hơn 46K SP đang bán", // 4
  //   voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
  //   voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
  //   shop: "true", // 1
  //   shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
  //   nameProduct: "Áo chống nắng nam",
  //   nameProductWeb: "ao-chong-nang-nam",
  //   listImage: [
  //     "https://media3.scdn.vn/img3/2019/4_17/wu30ze_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/KL7g2w_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/abvRcf_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/LO0NuW_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/mauDo0_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/7EDo8e_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/czfOcL_simg_de2fe0_500x500_maxb.jpg",
  //   ],
  //   shopType: "Thời trang nam",
  //   typeDetail: "Áo khoác nam",
  //   flashSale: "true", // 1
  // },
  // {
  //   modern: 3,
  //   sponsor: "", // 1
  //   rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
  //   rcmText: "Thời Trang Nam", // 4
  //   bgColor: "true", // 2 type color for type 4
  //   playButton: "", // 1
  //   discount: "34%", // 1 & 3
  //   oldPrice: "180.000đ",
  //   newPrice: "119.000đ",
  //   image: "https://media3.scdn.vn/img4/2024/01_12/yKTGBhBQYlNUXbSyNT57.jpg", // 2
  //   sold: "5", // 1
  //   rate: "4.2", // 1
  //   city: "Hà Nội", // 1
  //   productType: "Đầm, Váy", // 4
  //   quantitiesSale: "Hơn 46K SP đang bán", // 4
  //   voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
  //   voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
  //   shop: "true", // 1
  //   shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
  //   nameProduct: "Áo chống nắng nam",
  //   nameProductWeb: "ao-khoac-nam-01",
  //   listImage: [
  //     "https://media3.scdn.vn/img3/2019/4_17/wu30ze_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/KL7g2w_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/abvRcf_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/LO0NuW_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/mauDo0_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/7EDo8e_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/czfOcL_simg_de2fe0_500x500_maxb.jpg",
  //   ],
  //   shopType: "Thời trang nam",
  //   typeDetail: "Áo khoác nam",
  //   flashSale: "true", // 1
  // },
  // {
  //   modern: 4,
  //   sponsor: "", // 1
  //   rcmIcon: "https://media3.scdn.vn/img4/2021/01_14/yzbaMx2U6jyaMLST76q1.png", // 4
  //   rcmText: "Thời Trang Nam", // 4
  //   bgColor: "true", // 2 type color for type 4
  //   playButton: "", // 1
  //   discount: "34%", // 1 & 3
  //   oldPrice: "180.000đ",
  //   newPrice: "119.000đ",
  //   image: "https://media3.scdn.vn/img4/2024/01_12/yKTGBhBQYlNUXbSyNT57.jpg", // 2
  //   sold: "5", // 1
  //   rate: "4.2", // 1
  //   city: "Hà Nội", // 1
  //   productType: "Đầm, Váy", // 4
  //   quantitiesSale: "Hơn 46K SP đang bán", // 4
  //   voucher1: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
  //   voucher2: "https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png", // 1
  //   shop: "true", // 1
  //   shopIcon: "https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png", // 1
  //   nameProduct: "Áo chống nắng nam",
  //   nameProductWeb: "ao-khoac-nam-01",
  //   listImage: [
  //     "https://media3.scdn.vn/img3/2019/4_17/wu30ze_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/KL7g2w_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/abvRcf_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/LO0NuW_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/mauDo0_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/7EDo8e_simg_de2fe0_500x500_maxb.jpg",
  //     "https://media3.scdn.vn/img3/2019/4_17/czfOcL_simg_de2fe0_500x500_maxb.jpg",
  //   ],
  //   shopType: "Thời trang nam",
  //   typeDetail: "Áo khoác nam",
  //   flashSale: "true", // 1
  // },
];

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [localCount, setLocalCount] = useState(0);
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  const [pro, setPro] = useState([]);
  const [totalPrice, setTotalPrice] = useState("0");

  const handleIncrease = (newCount) => {
    setLocalCount(localCount + newCount);
    setNum(newCount);
  };
  const namePro = (newName) => {
    setName(newName);
    // console.log(newName);
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

  // console.log(pro);

  useEffect(() => {
    // Calculate the height of the Navigation component
    const navigationHeight = document.getElementById("navigation").offsetHeight;
    setNavHeight(navigationHeight);
  }, [navHeight]);

  return (
    <main>
      <Routes>
        {/* Main routes */}
        <Route
          path="/test-git-push"
          element={
            <>
              <Navigation localCount={localCount} />
              <Main isFixed={navHeight < 96} listProduct={listProduct} />
              <Footer />
            </>
          }
        />
        <Route
          path="/test-git-push/:nameProductWeb"
          element={
            <>
              <Navigation localCount={localCount} />
              <ProductDetail
                noPro={handleIncrease}
                listProduct={listProduct}
                namePro={namePro}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/test-git-push/Bag"
          element={
            <>
              <Navigation localCount={localCount} />
              <Bag
                pro={pro}
                listProduct={listProduct}
                updatePro={setPro}
                sumPrice={setTotalPrice}
              />
              <Footer />
            </>
          }
        />

        {/* Payment page route */}
        <Route
          path="/test-git-push/payment"
          element={
            <>
              <PaymentPage pro={pro} totalPrice={totalPrice} />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default memo(App);
