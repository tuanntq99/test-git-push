import { NavLink, useParams } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button, Input, Space, Statistic } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { memo, useEffect, useState } from "react";
const ButtonGroup = Button.Group;

const ProductDetail = ({ noPro, listProduct, namePro }) => {
  const [count, setCount] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const { nameProduct } = useParams();

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  const quantityButton = () => {
    noPro(count);
    const productArray = listProduct.find(
      (product) => product.nameProduct === nameProduct
    );
    namePro(productArray.nameProduct);
  };

  const { Countdown } = Statistic;
  useEffect(() => {
    const newDeadline = Date.now() + 1000 * 60 * 60 * 4;
    setDeadline(newDeadline);
  }, []);

  return (
    <div
      className="mx-auto w-100"
      style={{
        backgroundColor: "#f2f3f4",
        paddingBottom: "24px",
        minHeight: "100vh",
      }}
    >
      <div className="media-width mx-auto">
        {/* link back page */}
        <div
          className="d-flex align-items-center"
          style={{ minHeight: "48px" }}
        >
          <ol className="list-unstyled w-100 m-0 d-flex align-items-center user-select-none">
            <li className="pe-2">
              <NavLink to={`/test-git-push`}>
                <span className="font400 text14">Sendo.vn</span>
              </NavLink>
            </li>
            <li className="pe-2 text11">/</li>
            <li className="pe-2">
              <NavLink href="/test-git-push/undefined">
                <span className="font400 text14">Mẹ và bé</span>
              </NavLink>
            </li>
            <li className="pe-2 text11">/</li>
            <li className="pe-2">
              <NavLink href="/test-git-push/undefined">
                <span className="font400 text14">Đồ cho bé ra ngoài</span>
              </NavLink>
            </li>
            <li className="pe-2 text11">/</li>
            <li className="pe-2">
              <NavLink href="/test-git-push/undefined">
                <span className="font400 text14">
                  Đồ dùng khác cho bé ra ngoài
                </span>
              </NavLink>
            </li>
          </ol>
        </div>
        {/* head detail */}
        <div className="d-flex flex-wrap w-100">
          <div
            className="media-detail bg-white rounded-start-3 w-100"
            style={{ padding: "24px" }}
          >
            <div className="rounded-2 position-relative">
              <div className="w-100">
                <div
                  id="carouselExample"
                  class="carousel slide position-relative"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://media3.scdn.vn/img4/2023/02_04/A9SdYvGD4WuYeRNULwB1_simg_de2fe0_500x500_maxb.jpg"
                        class="d-block w-100 rounded-2"
                        alt="..."
                      ></img>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://media3.scdn.vn/img4/2023/02_04/LsRh1Kd7wPZC4HaHdtcl_simg_de2fe0_500x500_maxb.jpg"
                        class="d-block w-100 rounded-2"
                        alt="..."
                      ></img>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://media3.scdn.vn/img4/2023/02_04/XrZa8kFFpi87efleJQEK_simg_de2fe0_500x500_maxb.jpg"
                        class="d-block w-100 rounded-2"
                        alt="..."
                      ></img>
                    </div>
                  </div>
                  <span
                    className="py-1 m-2 position-absolute bottom-0 start-0 rounded-4 "
                    style={{ padding: "0 12px", backgroundColor: "#e7e8ea" }}
                  >
                    6/7
                  </span>
                  <div className="p-2 position-absolute bottom-0 end-0 rounded-4 ">
                    <button
                      className="me-2 rounded-2 "
                      style={{
                        backgroundColor: "#e7e8ea",
                        border: "1px solid #e7e8ea",
                        padding: "3px 7px",
                      }}
                    >
                      <i class="bi-share"></i>
                    </button>
                    <button
                      className="rounded-2 "
                      style={{
                        padding: "3px 7px",
                        backgroundColor: "#e7e8ea",
                        border: "1px solid #e7e8ea",
                      }}
                    >
                      <i class="bi bi-heart"></i>
                    </button>
                  </div>
                  <button
                    class="carousel-control-prev position-absolute top-50 start-0 rounded-2 opacity-100 bg-white"
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      transform: "translate(.8rem,-50%)",
                      padding: "7px",
                      border: "1px solid #FFF",
                    }}
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      class="bi-chevron-left"
                      style={{ height: "24px", width: "24px" }}
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next position-absolute top-50 end-0 rounded-2 opacity-100 bg-white"
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      transform: "translate(-.8rem,-50%)",
                      padding: "7px",
                      border: "1px solid #FFF",
                    }}
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      class="bi-chevron-right"
                      style={{ height: "24px", width: "24px" }}
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="py-3 w-100">
                <div
                  id="carouselExample"
                  class="carousel slide position-relative"
                >
                  <div class="carousel-inner d-flex">
                    <div class="">
                      <img
                        src="https://media3.scdn.vn/img4/2023/02_04/A9SdYvGD4WuYeRNULwB1_simg_de2fe0_500x500_maxb.jpg"
                        class="d-block rounded-2"
                        style={{ height: "72px", objectFit: "contain" }}
                        alt="..."
                      ></img>
                    </div>
                    <div class="">
                      <img
                        src="https://media3.scdn.vn/img4/2023/02_04/LsRh1Kd7wPZC4HaHdtcl_simg_de2fe0_500x500_maxb.jpg"
                        class="d-block rounded-2"
                        style={{ height: "72px", objectFit: "contain" }}
                        alt="..."
                      ></img>
                    </div>
                    <div class="">
                      <img
                        src="https://media3.scdn.vn/img4/2023/02_04/XrZa8kFFpi87efleJQEK_simg_de2fe0_500x500_maxb.jpg"
                        class="d-block rounded-2"
                        style={{ height: "72px", objectFit: "contain" }}
                        alt="..."
                      ></img>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev position-absolute top-50 start-0 rounded-2 opacity-100 bg-white"
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      transform: "translate(.8rem,-50%)",
                      padding: "7px",
                      border: "1px solid #FFF",
                    }}
                    type="button"
                    data-bs-target="#carouselExamplex"
                    data-bs-slide="prev"
                  >
                    <span
                      class="bi-chevron-left"
                      style={{ height: "24px", width: "24px" }}
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next position-absolute top-50 end-0 rounded-2 opacity-100 bg-white"
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      transform: "translate(-.8rem,-50%)",
                      padding: "7px",
                      border: "1px solid #FFF",
                    }}
                    type="button"
                    data-bs-target="#carouselExamplex"
                    data-bs-slide="next"
                  >
                    <span
                      class="bi-chevron-right"
                      style={{ height: "24px", width: "24px" }}
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* section 2 */}
          <div className="flex-fill bg-white rounded-end-3">
            {/* Flashsale */}
            <div style={{ padding: "24px 24px 0 24px" }}>
              <a href="/test-git-push/undefined">
                <div
                  className="d-flex justify-content-between align-items-center ps-1 pe-2 rounded-2"
                  style={{
                    backgroundImage:
                      "URL(https://media3.scdn.vn/img4/2020/06_18/FBnN0sGbAeXbPuZ7IIWp.png)",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    src="https://media3.scdn.vn/img4/2020/06_18/jaGsAfx1dzgHf82AyWSI.png"
                    alt="flash-sale"
                    style={{ height: "40px" }}
                  ></img>
                  <div className="d-flex align-items-center">
                    <span className="text-white text14 font700">
                      Kết thúc trong
                    </span>
                    <Countdown className="ps-2 font700" value={deadline} />
                  </div>
                </div>
              </a>
            </div>
            {/* Selection */}
            <div
              className="media-width pt-3 w-100"
              style={{ padding: "0 24px" }}
            >
              {/* selection 1 */}
              <div className="mb-3">
                <div
                  className="text20 font700 overflow-hidden w-100 d-flex mb-2 align-items-center"
                  style={{
                    WebkitLineClamp: "2",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  <img
                    className="me-2"
                    style={{ height: "16px" }}
                    src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                    alt="Shop's badge"
                  ></img>
                  Áo khoác dù nam có nón 2 lớp hàng đẹp - AKN02
                </div>
                <div className="text14 font400 mt-2">Thương hiệu: OEM</div>
                <div
                  className="text24 font700 mt-2"
                  style={{ color: "#ee2624" }}
                >
                  79.000đ
                </div>
                <div className="mt-1" style={{ height: "20px" }}>
                  <span className="text14 font400 text-decoration-line-through">
                    132.000đ
                  </span>
                  <span
                    className="ms-1 text14 font400"
                    style={{ color: "#ee2624" }}
                  >
                    Giảm 41%
                  </span>
                </div>
                <div className="my-1 " style={{ height: "34px" }}></div>
                <div className="mt-2 w-100 d-flex align-items-center">
                  <button className="d-flex align-items-center border-0 bg-white">
                    <div
                      className="py-1"
                      style={{
                        color: "transparent",
                        background:
                          "linear-gradient(90deg, #ffc600 90%, #e7e8ea 0)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      ★★★★★
                    </div>

                    <span
                      className="ms-2 text14 font400"
                      style={{ color: "#0f62fe" }}
                    >
                      40 đánh giá
                    </span>
                  </button>
                  <div
                    className="mx-2 text14 font400 d-flex align-items-center"
                    style={{ color: "#6f787e", height: "18px" }}
                  >
                    •
                  </div>
                  <i
                    class="bi-bag d-flex align-items-center"
                    style={{
                      fontSize: "16px",
                      height: "16px",
                      color: "rgb(111, 120, 126)",
                      fill: "currentColor",
                    }}
                  ></i>
                  <span
                    className="ms-1 text14 font400ter"
                    style={{ color: "#6f787e" }}
                  >
                    141 lượt mua
                  </span>
                </div>
              </div>
              <hr className="m-0"></hr>
              {/* selection 2 */}
              <div className="pt-3">
                {/* short detail */}
                <div
                  className="d-flex flex-wrap align-items-center"
                  style={{ paddingBottom: "20px" }}
                >
                  <div className="d-flex flex-wrap w-100 media-selection">
                    <div
                      className="me-2 mb-2 flex-grow-1 text14 font400"
                      style={{ color: "#6f787e" }}
                    >
                      Chọn màu sắc:
                    </div>
                    <div className="w-100" style={{ height: "18px" }}></div>
                  </div>
                  <div className="d-flex flex-wrap w-100 media-selection-img">
                    <div className="p-1">
                      <button
                        className="rounded-1 bg-white p-0"
                        style={{
                          border: "1px solid #cfd2d4",
                          width: "60px",
                          height: "60px",
                        }}
                      >
                        <img
                          className="w-100"
                          src="https://media3.scdn.vn/img4/2023/12_24/qswa5gBtSKgh8bw0mH61_simg_02d57e_100x100_maxb.jpg"
                          alt="Black"
                        ></img>
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        className="rounded-1 bg-white p-0"
                        style={{
                          border: "1px solid #cfd2d4",
                          width: "60px",
                          height: "60px",
                        }}
                      >
                        <img
                          className="w-100"
                          src="https://media3.scdn.vn/img4/2023/12_24/Z3wF73wmvG1fxxwMvHMw_simg_02d57e_100x100_maxb.jpg"
                          alt="Grey"
                        ></img>
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        className="rounded-1 bg-white p-0"
                        style={{
                          border: "1px solid #cfd2d4",
                          width: "60px",
                          height: "60px",
                        }}
                      >
                        <img
                          className="w-100"
                          src="https://media3.scdn.vn/img4/2023/12_24/TS3JlXA8JRGvT7p6FRhn_simg_02d57e_100x100_maxb.jpg"
                          alt="Red"
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Color & Size Selector */}
                <div
                  className="d-flex flex-wrap align-items-center"
                  style={{ paddingBottom: "20px" }}
                >
                  <div className="d-flex flex-wrap w-100 media-selection">
                    <div
                      className="me-2 mb-2 flex-grow-1 text14 font400"
                      style={{ color: "#6f787e" }}
                    >
                      Chọn kích thước
                    </div>
                    <div className="w-100" style={{ height: "18px" }}></div>
                  </div>
                  <div className="d-flex flex-wrap w-100 media-selection-img">
                    <div className="p-1">
                      <button
                        className="rounded-1"
                        style={{
                          border: "2px solid #e7e8ea",
                          height: "34px",
                          width: "48px",
                          backgroundColor: "#e7e8ea",
                          padding: "0 12px",
                        }}
                      >
                        <span
                          className="text14 font700"
                          style={{ color: "#6f787e" }}
                        >
                          M
                        </span>
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        className="rounded-1"
                        style={{
                          border: "2px solid #e7e8ea",
                          height: "34px",
                          width: "48px",
                          backgroundColor: "#e7e8ea",
                          padding: "0 12px",
                        }}
                      >
                        <span
                          className="text14 font700"
                          style={{ color: "#6f787e" }}
                        >
                          L
                        </span>
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        className="rounded-1"
                        style={{
                          border: "2px solid #e7e8ea",
                          height: "34px",
                          width: "48px",
                          backgroundColor: "#e7e8ea",
                          padding: "0 12px",
                        }}
                      >
                        <span
                          className="text14 font700"
                          style={{ color: "#6f787e" }}
                        >
                          XL
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quantity Selector */}
              <div className="mb-3 d-flex align-items-center flex-wrap">
                <div
                  className="media-selection text14 font400"
                  style={{ color: "#6f787e" }}
                >
                  Chọn số lượng:
                </div>
                <div>
                  <Space direction="vertical">
                    <Space size="large">
                      <ButtonGroup>
                        <Button
                          className="rounded-2"
                          onClick={decrease}
                          icon={<MinusOutlined />}
                        />
                        <Input
                          value={count}
                          style={{ width: "40px" }}
                          className="text-center mx-1"
                          readOnly
                        ></Input>
                        <Button
                          className="rounded-2"
                          onClick={increase}
                          icon={<PlusOutlined />}
                        />
                      </ButtonGroup>
                    </Space>
                  </Space>
                </div>
              </div>
              {/* Add to badge */}
              <div className="mb-3 d-flex flex-wrap" style={{ margin: "-4px" }}>
                <div className="p-1 col-6">
                  <button
                    className="px-3 font700 rounded-1 w-100"
                    style={{
                      padding: "12px 0",
                      backgroundColor: "#e7e8ea",
                      border: "1px solid #e7e8ea",
                      color: "#3f4b53",
                    }}
                    onClick={quantityButton}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
                <div className="p-1 col-6">
                  <button
                    className="px-3 font700 rounded-1 w-100"
                    style={{
                      padding: "12px 0",
                      backgroundColor: "#ee2624",
                      border: "1px solid #ee2624",
                      color: "#fff",
                    }}
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
            {/* Voucher */}
            {/* Benefits */}
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};
export default memo(ProductDetail);
