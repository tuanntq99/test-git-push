import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Trademark() {
  const listCarousel = [
    {
      image: "https://media3.scdn.vn/img4/2024/01_03/LX3PnvQ145BWybU5shYp.jpg",
      href: "/",
    },
    {
      image: "https://media3.scdn.vn/img4/2023/12_29/6yIFz48qqEWh9imBMTXn.jpg",
      href: "/",
    },
    {
      image: "https://media3.scdn.vn/img4/2024/01_03/W2hhw4XQd2KC3inPw29P.jpg",
      href: "/",
    },
    {
      image: "https://media3.scdn.vn/img4/2024/01_03/AJgcgDATVxArAfKEffZS.jpg",
      href: "/",
    },
    {
      image: "https://media3.scdn.vn/img4/2024/01_03/FLYGioEEPPx0UUjIXlax.jpg",
      href: "/",
    },
    {
      image: "https://media3.scdn.vn/img4/2024/01_03/gqp87QR8wgcafudXRZiy.jpg",
      href: "/",
    },
  ];

  const listSale2 = [
    {
      source: "https://media3.scdn.vn/img4/2024/01_05/yObJ2vXnzeeyuD1cRnsM.png",
      word: "TỪ 1K",
    },
    {
      source: "https://media3.scdn.vn/img4/2024/01_05/FIATpz5gqOSPOJ0Ap2kG.png",
      word: "GIẢM ĐẾN 50% ++",
    },
    {
      source: "https://media3.scdn.vn/img4/2024/01_05/DaqEBP5FETXZEIHzVbr3.png",
      word: "GIẢM ĐẾN 50% ++",
    },
    {
      source: "https://media3.scdn.vn/img4/2024/01_05/x9rdqMkBdV2lOEVPcytk.png",
      word: "TỪ 17K",
    },
    {
      source: "https://media3.scdn.vn/img4/2024/01_05/pxi9kckpBf1Kcz1KM4QR.png",
      word: "TỪ 1K",
    },
    {
      source: "https://media3.scdn.vn/img4/2024/01_05/0HulOvtieqCEGoO7Tjgf.png",
      word: "TỪ 3K",
    },
    {
      source: "https://media3.scdn.vn/img4/2023/09_07/ewjZTkMoC4qpiPKrmjFn.png",
      word: "CHỈ TỪ 18K",
    },
    {
      source: "https://media3.scdn.vn/img4/2023/10_02/i6cXworETnHgJ2WNZZeC.png",
      word: "GIẢM ĐẾN 40%",
    },
  ];

  return (
    <div className="mb-3 media-width mx-auto ">
      <div className="p-3 border-2 bg-white rounded-3">
        {/* section 1 */}
        <div className="d-flex flex-wrap">
          <div className="d-flex flex-fill p-1">
            <img
              src="https://media3.scdn.vn/img4/2023/05_17/2qchQKBYZR2DeGt4eAa3.png"
              alt="Trademark"
              style={{ width: "24px", height: "24px", marginRight: "12px" }}
            ></img>
            <span className="fw-bold" style={{ fontSize: "16px" }}>
              Thương hiệu chính hãng
            </span>
          </div>
          <div className="p-1 align-items-center">
            <a
              className="text-primary"
              href="/"
              style={{ fontSize: "14px", fontWeight: "400" }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
        {/* section 2 */}
        <Carousel autoplay className="mt-3" style={{ width: "1247px" }}>
          {listCarousel.map(({ image, href }, index) => (
            <div key={index} style={{ border: "8px" }}>
              <a href={`${href}`}>
                <img
                  className="rounded-3 w-100"
                  src={`${image}`}
                  alt="Trademark_img"
                  style={{ cursor: "pointer" }}
                ></img>
              </a>
            </div>
          ))}
        </Carousel>
        {/* section 3 */}
        <div className="position-relative">
          <div className="mt-3 overflow-hidden w-100 d-flex">
            {listSale2.map(({ source, word }, index) => (
              <div key={index} className="me-2">
                <div
                  className="m-1 rounded-3"
                  style={{
                    width: "198px",
                    boxShadow:
                      "0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)",
                  }}
                >
                  <a href="/" className="h-100">
                    <img
                      className="h-100 w-100"
                      src={`${source}`}
                      alt="img"
                    ></img>
                    <div
                      className="pb-3 d-flex justify-content-center"
                      style={{ marginTop: "12px" }}
                    >
                      <span className="fw-bold" style={{ fontSize: "14px" }}>
                        {word}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
              className="position-absolute top-50 start-0 translate-middle rounded index-1 overflow-visible"
              style={{
                border: "1px solid #e7e8ea",
                backgroundColor: "#e7e8ea",
                padding: "7px",
              }}
            >
              <LeftOutlined
                className="d-flex justify-content-center"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <button
              className="position-absolute top-50 start-100 translate-middle rounded"
              style={{
                border: "1px solid #e7e8ea",
                backgroundColor: "#e7e8ea",
                padding: "7px",
              }}
            >
              <RightOutlined
                className="d-flex justify-content-center"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
        </div>
      </div>
    </div>
  );
}
