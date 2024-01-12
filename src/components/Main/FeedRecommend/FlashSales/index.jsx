import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function FlashSale() {
  const listSale = [
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/12_11/b7SdIBs5zlcToJt8efTq_simg_de2fe0_350x350_maxb.png",
      discount: "-37%",
      oldPrice: "109.000đ",
      newPrice: "69.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2022/09_08/fSHtrAVADKKJuRqF7Akj_simg_de2fe0_250x250_maxb.jpg",
      discount: "-63%",
      oldPrice: "359.000đ",
      newPrice: "135.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2022/12_31/091gaauTWO198tBIyxSk_simg_de2fe0_250x250_maxb.jpg",
      discount: "-57%",
      oldPrice: "44.000đ",
      newPrice: "19.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2022/10_30/pY2hbjRe9QYNiyQWXCD9_simg_de2fe0_250x250_maxb.jpg",
      discount: "-87%",
      oldPrice: "190.000đ",
      newPrice: "26.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2022/07_20/RUoSpmdlzXDfc7yTsdh8_simg_de2fe0_250x250_maxb.jpg",
      discount: "-38%",
      oldPrice: "45.000đ",
      newPrice: "28.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/12_29/HIvyQLNjMC5GlyOz2USu_simg_de2fe0_250x250_maxb.jpg",
      discount: "-44%",
      oldPrice: "139.000đ",
      newPrice: "79.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2020/08_04/5v7V3ihplqtdQMhOrYfV_simg_de2fe0_250x250_maxb.png",
      discount: "-26%",
      oldPrice: "119.000đ",
      newPrice: "89.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2021/12_02/CY5jLMG4MR4VOcdFQQoO_simg_de2fe0_350x350_maxb.jpg",
      discount: "-40%",
      oldPrice: "99.000đ",
      newPrice: "60.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2022/10_29/6mGFMx2AfKPxC3DpD9PW_simg_de2fe0_250x250_maxb.jpg",
      discount: "-72%",
      oldPrice: "220.000đ",
      newPrice: "62.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/09_27/kFSqpcZVUlsdgvbIQjzP_simg_de2fe0_250x250_maxb.jpg",
      discount: "-71%",
      oldPrice: "132.000đ",
      newPrice: "39.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/09_14/9J6kDCdATQJ5KYEKq33L_simg_de2fe0_250x250_maxb.jpg",
      discount: "-58%",
      oldPrice: "139.000đ",
      newPrice: "59.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/02_04/A9SdYvGD4WuYeRNULwB1_simg_de2fe0_250x250_maxb.jpg",
      discount: "-35%",
      oldPrice: "229.000đ",
      newPrice: "149.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2022/02_20/xJ57AgnAEBQ4hxtQbJoW_simg_de2fe0_250x250_maxb.jpg",
      discount: "-83%",
      oldPrice: "450.000đ",
      newPrice: "79.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/10_31/GmO9p8e5EYx8vBARpAtW_simg_de2fe0_250x250_maxb.jpg",
      discount: "-45%",
      oldPrice: "60.000đ",
      newPrice: "33.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img3/2019/5_8/YC4BOr_simg_de2fe0_250x250_maxb.jpg",
      discount: "-51%",
      oldPrice: "69.000đ",
      newPrice: "34.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/03_01/CzlWKJW33zpaWcC6gcsd_simg_de2fe0_250x250_maxb.jpg",
      discount: "-66%",
      oldPrice: "250.000đ",
      newPrice: "86.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/10_06/iAeD2NpGLYB2xWk7bHrj_simg_de2fe0_250x250_maxb.jpg",
      discount: "-76%",
      oldPrice: "45.000đ",
      newPrice: "11.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/04_23/N0DTfK18Rt2OJwvUtID1_simg_de2fe0_250x250_maxb.png",
      discount: "-41%",
      oldPrice: "99.000đ",
      newPrice: "59.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/04_23/7MBcAHvrxktZmbueo1Br_simg_de2fe0_250x250_maxb.jpg",
      discount: "-52%",
      oldPrice: "25.000đ",
      newPrice: "12.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/12_15/9sLxdnw86I4seQbuyEwy_simg_de2fe0_250x250_maxb.jpg",
      discount: "-52%",
      oldPrice: "39.000đ",
      newPrice: "19.000đ",
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/07_27/vokaYhy83nzfiXHdVNC6_simg_de2fe0_250x250_maxb.jpg",
      discount: "-87%",
      oldPrice: "150.000đ",
      newPrice: "20.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
    {
      source: "/",
      image:
        "https://media3.scdn.vn/img4/2023/10_26/xtYQzdEAb99foPT0yuFT_simg_de2fe0_250x250_maxb.jpg",
      discount: "-36%",
      oldPrice: "450.000đ",
      newPrice: "289.000đ",
      playButton: (
        <i
          className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
          style={{
            bottom: "12px",
            right: "4px",
            fontSize: "24px",
            backgroundColor: "rgba(128, 128, 128, 0.6)",
          }}
        ></i>
      ),
    },
  ];

  return (
    <div className="media-width mx-auto w-100">
      <div className="rounded-3 mb-3 bg-white position-relative">
        <div className="p-3 d-flex w-100 align-items-center">
          <div
            style={{
              background: `url('https://web-static.scdn.vn/sendo-buyers-flash-sale-widget/47ddffad-web/media/flashsale-icon.6d0b98fffda3d7d526b45c53de367840.svg') center center no-repeat`,
              marginRight: "12px",
              width: "119px",
              height: "28px",
            }}
          ></div>
          <div className="d-flex align-items-center h-100">
            <span
              className="me-1 text text-white bg-black rounded d-flex justify-content-center align-items-center"
              style={{ fontSize: "14px", height: "24px", width: "24px" }}
            >
              02
            </span>
            <span className="me-1 text" style={{ fontSize: "14px" }}>
              :
            </span>
            <span
              className="me-1 text text-white bg-black rounded d-flex justify-content-center align-items-center"
              style={{ fontSize: "14px", height: "24px", width: "24px" }}
            >
              02
            </span>
            <span className="me-1 text" style={{ fontSize: "14px" }}>
              :
            </span>
            <span
              className="me-1 text text-white bg-black rounded d-flex justify-content-center align-items-center"
              style={{ fontSize: "14px", height: "24px", width: "24px" }}
            >
              02
            </span>
          </div>
          <a
            className="me-2 h-100 flex-fill text-end"
            href="/"
            style={{ fontSize: "14px" }}
          >
            Xem tất cả
          </a>
        </div>
        <div className="position-relative">
          <div className="overflow-hidden pb-3">
            <div className="position-relative overflow-hidden d-flex">
              <div
                className="d-flex overflow-hidden"
                style={{
                  transitionDuration: "0ms",
                  transform: "translate3d(16px,0px,0px)",
                  transitionProperty: "transform",
                }}
              >
                {/* casrousel */}
                {listSale.map(
                  (
                    { source, image, discount, oldPrice, newPrice, playButton },
                    index
                  ) => (
                    <a key={index} className="me-3 my-1" href={`${source}`}>
                      <div className="d-flex flex-column shadow bg-body-tertiary rounded">
                        <div className="position-relative">
                          <img
                            className="rounded-top-3"
                            src={`${image}`}
                            alt="source img"
                            style={{ height: "144px" }}
                          ></img>
                          {playButton}
                        </div>
                        <div className="p-2 pt-3 rounded-bottom-3 position-relative">
                          <div
                            className="position-absolute top-0 d-flex w-100"
                            style={{ transform: "translate(-8px, -50%)" }}
                          >
                            <img
                              src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png"
                              alt="clear-sale"
                              style={{ height: "16px" }}
                            ></img>
                          </div>
                          <div className="d-flex flex-column">
                            <div className="d-flex order-2 align-items-center">
                              <span
                                className="h-100 text-decoration-line-through"
                                style={{
                                  fontSize: "11px",
                                  color: "#b7bbbf",
                                }}
                              >
                                {oldPrice}
                              </span>
                              <span className="ms-1 text-danger">
                                {discount}
                              </span>
                            </div>
                            <span
                              className="order-1 text-danger fw-bold"
                              style={{ fontSize: "16px" }}
                            >
                              {newPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          className="position-absolute top-50 start-0 translate-middle rounded"
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
  );
}
