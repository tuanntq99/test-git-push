import React, { useEffect, useRef, useState } from "react";
import FlashSale from "./FeedRecommend/FlashSales";
import Trademark from "./FeedRecommend/Trademark";
import UtilitySuggest from "./FeedRecommend/UtilityForYou";
import ListProduct from "./FeedRecommend/ListProducts";

export default function Main({ isFixed }) {
  const [activeTab, setActiveTab] = useState("choBan");
  const fixRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.getElementById("navigation").offsetHeight;

      if (navHeight < 96) {
        fixRef.current.style.position = "fixed";
        fixRef.current.style.top = `${96 - navHeight}px`; // Adjust the top position based on your needs
        fixRef.current.style.left = "0";
      } else {
        fixRef.current.style.position = "static";
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  return (
    <main>
      <div className="pb-4 user-select-none" style={{ backgroundColor: "#f2f3f4" }}>
        {/* nav */}
        <div
          ref={fixRef}
          className="w-100 z-1"
          style={{ backgroundColor: "#ee2624" }}
        >
          <div className="media-width mx-auto">
            <ul className="d-flex list-unstyled m-0">
              <li
                className={`nav-item  position-relative col user-select-none`}
                style={{ padding: "12px 8px", cursor: "pointer" }}
                onClick={() => handleTabClick("choBan")}
              >
                <span
                  className={`d-flex justify-content-center text-white fw-${
                    activeTab === "choBan" ? "bold" : "normal"
                  } pe-auto`}
                >
                  Cho bạn
                </span>
                <div
                  className={`position-absolute bg-white bottom-0 start-0 opacity-${
                    activeTab === "choBan" ? "100" : "0"
                  } w-100`}
                  style={{ height: "4px" }}
                ></div>
              </li>
              <li
                className={`nav-item position-relative col user-select-none`}
                style={{ padding: "12px 8px", cursor: "pointer" }}
                onClick={() => handleTabClick("doDungNhaBep")}
              >
                <span
                  className={`d-flex justify-content-center text-white fw-${
                    activeTab === "doDungNhaBep" ? "bold" : "normal"
                  } pe-auto`}
                >
                  Đồ dùng nhà bếp
                </span>
                <div
                  className={`position-absolute bg-white bottom-0 start-0 opacity-${
                    activeTab === "doDungNhaBep" ? "100" : "0"
                  } w-100`}
                  style={{ height: "4px" }}
                ></div>
              </li>
              <li
                className={`nav-item position-relative col user-select-none`}
                style={{ padding: "12px 8px", cursor: "pointer" }}
                onClick={() => handleTabClick("damVay")}
              >
                <span
                  className={`d-flex justify-content-center text-white fw-${
                    activeTab === "damVay" ? "bold" : "normal"
                  } pe-auto`}
                >
                  Đầm, váy
                </span>
                <div
                  className={`position-absolute bg-white bottom-0 start-0 opacity-${
                    activeTab === "damVay" ? "100" : "0"
                  } w-100`}
                  style={{ height: "4px" }}
                ></div>
              </li>
              <li
                className={`nav-item position-relative col user-select-none`}
                style={{ padding: "12px 8px", cursor: "pointer" }}
                onClick={() => handleTabClick("aoNu")}
              >
                <span
                  className={`d-flex justify-content-center text-white fw-${
                    activeTab === "aoNu" ? "bold" : "normal"
                  } pe-auto`}
                >
                  Áo nữ
                </span>
                <div
                  className={`position-absolute bg-white bottom-0 start-0 opacity-${
                    activeTab === "aoNu" ? "100" : "0"
                  } w-100`}
                  style={{ height: "4px" }}
                ></div>
              </li>
              <li
                className={`nav-item position-relative col user-select-none`}
                style={{ padding: "12px 8px", cursor: "pointer" }}
                onClick={() => handleTabClick("chamSocSucKhoe")}
              >
                <span
                  className={`d-flex justify-content-center text-white fw-${
                    activeTab === "chamSocSucKhoe" ? "bold" : "normal"
                  } pe-auto`}
                >
                  Chăm sóc sức khỏe
                </span>
                <div
                  className={`position-absolute bg-white bottom-0 start-0 opacity-${
                    activeTab === "chamSocSucKhoe" ? "100" : "0"
                  } w-100`}
                  style={{ height: "4px" }}
                ></div>
              </li>
              <li
                className={`nav-item position-relative col user-select-none`}
                style={{ padding: "12px 8px", cursor: "pointer" }}
                onClick={() => handleTabClick("dungCuLamVuon")}
              >
                <span
                  className={`d-flex justify-content-center text-white fw-${
                    activeTab === "dungCuLamVuon" ? "bold" : "normal"
                  } pe-auto`}
                >
                  Dụng cụ làm vườn
                </span>
                <div
                  className={`position-absolute bg-white bottom-0 start-0 opacity-${
                    activeTab === "dungCuLamVuon" ? "100" : "0"
                  } w-100`}
                  style={{ height: "4px" }}
                ></div>
              </li>
            </ul>
          </div>
        </div>
        {/* type */}
        <div className="bg-white">
          {/* type-row-1 */}
          <div className="media-width mx-auto">
            <div className="d-flex">
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/sendofarm/?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_15/gO2sWRiUBorDW6i8LlcP.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Rau sạch Sendo Farm
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&cabinet_list=17464&sort_type=price_asc"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_19/8w1kBnN8MNOv4kmiSjjg.gif"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Deal hot từ 8K
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&cabinet_list=17518&sort_type=price_asc"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_18/GCAHk3tKquIg5osxU6c1.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Tân trang bếp -50%
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&cabinet_list=17519&sort_type=price_asc"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_18/OaoGPkAjXsOFfFZI0Sac.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Quần áo nữ -30%
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&cabinet_list=17520&sort_type=price_asc"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_18/sfTtQ1BEGmstx49dF1Dw.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Quần áo nam -40%
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&cabinet_list=17517&sort_type=price_asc"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_18/3N0x99oVjD5ZHoecBroL.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Quần áo trẻ em -50%
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&cabinet_list=17336&sort_type=price_asc"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_18/djL6wG0m1ev4or1bjglU.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Loa, Tai nghe từ 22K
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&cabinet_list=17117&sort_type=price_asc"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_18/9XiNyKEeQnF9hPJUjhAX.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Đồ làm vườn -50%
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/tien-ich/?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon&ref=homebutton_app"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_19/dmlXniySp4hbnV6FiWyL.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Nạp thẻ & dịch vụ
                  </span>
                </a>
              </div>
              <div className="p-3 w-100">
                <a
                  className="d-flex flex-column"
                  href="https://www.sendo.vn/su-kien/ma-giam-gia/?source_page_id=home&source_pagetab_id=0&source_block_id=shortcut_icon"
                >
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className=""
                      src="https://media3.scdn.vn/img4/2023/12_18/PTta8iHifOtoSQgswZcp.png"
                      alt="shortcut-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "contain",
                      }}
                    ></img>
                  </div>
                  <span
                    className="fw-normal text-center mt-2"
                    style={{ fontSize: "14px", paddingTop: "3px" }}
                  >
                    Mã giảm giá & Freeship
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* type-row-2 */}
          <div className="media-width mx-auto w-100 py-3">
            <div className="position-relative ">
              <img
                src="https://media3.scdn.vn/img4/2023/12_18/PRMjaSxNkDGPY5PLFpmG.png"
                className="w-100"
                alt="20.12"
              ></img>
              <a
                aria-label="banner event"
                href="https://www.sendo.vn/shop/kho-qsg?source_page_id=home&source_pagetab_id=0&source_block_id=banner_shop_kho-qsg"
                className="position-absolute top-0 start-0 w-25 h-100"
              ></a>
              <a
                aria-label="banner event"
                href="https://www.sendo.vn/su-kien/nha-dep-bep-xinh/?source_page_id=home&source_pagetab_id=0&source_block_id=banner_su-kien_nha-dep-bep-xinh#gia-tot"
                className="position-absolute top-0 start-50 translate-middle-x w-50 h-100"
              ></a>
              <a
                aria-label="banner event"
                href="https://www.sendo.vn/tim-kiem?source_page_id=home&source_pagetab_id=0&source_block_id=banner_tim-kiem&cabinet_list=17351&sort_type=norder_30_desc"
                className="position-absolute top-0 end-0 w-25 h-100"
              ></a>
            </div>
          </div>
        </div>
        {/* product */}
        <div id="feed-recommend" className="my-3 user-select-none">
          <FlashSale/>
          <Trademark/>
          <UtilitySuggest/>
          <ListProduct/>
        </div>
      </div>
    </main>
  );
}
