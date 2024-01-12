export default function UtilitySuggest() {
  const listUtility = [
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_22/oTS47qm4NHgSucqXKo50.png",
      bgColor: "rgb(254, 242, 242)",
      text: "Hóa Đơn Điện",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_17/6XeWaJY0gq5rf5g8B0AY.png",
      bgColor: "rgb(226, 246, 247)",
      text: "Mua Thẻ Cào",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_22/VTLUgFa6KOdIT1jdOYcs.png",
      bgColor: "rgb(253, 237, 226)",
      text: "Mua Thẻ Game",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_22/K0IjWKO9wXLysQbirwSk.png",
      bgColor: "rgb(253, 237, 226)",
      text: "Mua hộ Vietlott",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_22/3ZXUlSIWwBXgNyzkjHie.png",
      bgColor: "rgb(231, 239, 254)",
      text: "Bao bay giá rẻ!",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_23/udI33vs2vfdAX1XHPcQa.png",
      bgColor: "rgb(253, 237, 226)",
      text: "Ưu đãi đối tác",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_17/NVVKXKYImjyVVLmTrh5u.png",
      bgColor: "rgb(226, 230, 242)",
      text: "Nạp tiền điện thoại",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_22/UxOzTiyxgMXe1eIBgxRp.png",
      bgColor: "rgb(231, 239, 254)",
      text: "Hóa Đơn Nước",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_22/Ju39kvVpMR8vdKYz73Hn.png",
      bgColor: "rgb(226, 246, 247)",
      text: "Hóa Đơn Internet",
    },
    {
      href: "/",
      source: "https://media3.scdn.vn/img4/2022/11_22/J3Z3cu8Wp6JIvTmr7TQB.png",
      bgColor: "rgb(226, 246, 247)",
      text: "Vé tàu",
    },
  ];

  return (
    <div className="mb-3">
      <div className="media-width mx-auto">
        <div className="p-3 bg-white rounded-3">
          {/* section 1 */}
          <div className="d-flex mx-auto">
            <div className="flex-fill p-1 d-flex">
              <img
                style={{ width: "24px", height: "24px", marginRight: "12px" }}
                src="https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png"
                alt="icon"
              ></img>
              <span className=".text1 fw-bold ">Tiện ích cho bạn</span>
            </div>
            <div className="p-1">
              <a href="/" style={{ fontSize: "14px", fontWeight: "400" }}>
                Xem tất cả
              </a>
            </div>
          </div>
          {/* section 2 */}
          <div className="mt-3 d-flex">
            {listUtility.map(({ href, bgColor, source, text }, index) => (
              <a
                key={index}
                className="me-3 rounded-3 pe-3 ps-3"
                href={href}
                style={{
                  padding: "14px",
                  width: "124.722px",
                  aspectRatio: "1/1",
                  backgroundColor: bgColor,
                }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={source}
                    alt="Utility icon"
                    style={{ width: "44px", height: "44px" }}
                  ></img>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <span
                    className=" text-center"
                    style={{ fontSize: "12px", fontWeight: "400" }}
                  >
                    {text}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
