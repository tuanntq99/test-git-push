export default function ListProduct() {
  return (
    <div className="mx-auto media-width">
      <div style={{ margin: "-8px" }}>
        <div
          className="media-flex product p-2 w-100"
          style={{ height: "374.667px" }}
        >
          <a target="_blank" href="/">
            <div
              className="rounded-3 bg-white"
              style={{
                boxShadow:
                  "0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)",
              }}
            >
              <div className="rounded-3 position-relative">
                <img
                  style={{ width: "199.98px" }}
                  src="https://media3.scdn.vn/img4/2023/02_11/Obamlbxt8FsG3HvWKzUi_simg_b5529c_250x250_maxb.png"
                  alt="img-detail"
                ></img>
                {/* {playButton} */}
                <span
                  className="p-1 px-2 position-absolute bg-white rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    fontSize: "11px",
                    fontWeight: "400",
                    color: "#6f787e",
                    right: "4px",
                    top: "4px",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,.1)",
                    height: "20px",
                    width: "49px",
                  }}
                >
                  Tài trợ
                </span>
              </div>
              <div className="p-2 pt-3">
                {/* hidden and height is not working right. check it! */}
                <div
                  className="mb-1 overflow-hidden"
                  style={{
                    fontSize: "14px",
                    webkitLineClamp: "2",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    height: "36px",
                  }}
                >
                  <img
                    className="me-1"
                    style={{ height: "12px" }}
                    src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                    alt="shop-badge"
                  ></img>
                  Móc Khóa An Toàn Chuyên Dùng Cho Bạt, Lưới Che Nắng
                </div>
                <div className="d-flex flex-column w-100 ">
                  <div className="d-flex align-items-center">
                    <span
                      className="h-100 text-decoration-line-through"
                      style={{
                        fontSize: "11px",
                        color: "#b7bbbf",
                      }}
                    >
                      32.000đ
                    </span>
                    <span className="ms-1 text-danger">-50%</span>
                  </div>
                  <span
                    className="text-danger fw-bold"
                    style={{ fontSize: "16px" }}
                  >
                    16.000đ
                  </span>
                </div>
                <div
                  style={{
                    paddingTop: "1px",
                    paddingBottom: "3px",
                  }}
                >
                  <div
                    className="px-1 rounded-3 d-flex align-items-center"
                    style={{
                      padding: "2px 0",
                      width: "fit-content",
                      backgroundColor: "rgb(253, 237, 226)",
                      height: "16px",
                    }}
                  >
                    <img
                      style={{ width: "12px", height: "12px" }}
                      src="https://media3.scdn.vn/img4/2021/08_20/WxthNRjjOz4mP6X4uLj3.png"
                      alt="promotion icon"
                    ></img>
                    <span
                      className="ms-1 d-flex align-items-center"
                      style={{
                        color: "rgb(213, 96, 12)",
                        fontSize: "11px",
                        height: "12px",
                      }}
                    >
                      Mua trước trả sau
                    </span>
                  </div>
                </div>
                <div className="mt-1 d-flex ">
                  <span
                    className="d-flex align-items-center"
                    style={{ fontSize: "11px", height: "12px" }}
                  >
                    Đã bán 16
                  </span>
                </div>
                <div
                  className="mt-1 d-flex justify-content-between"
                  style={{ height: "12px" }}
                >
                  <div className="d-flex" >
                    <span className="text11 font400 me-1 d-flex align-items-center" style={{ height: "12px" }}>5/5</span>
                    <i
                      class="bi-star-fill d-flex align-items-center"
                      style={{ color: "#ffc600",fontSize:'9px',height:'12px' }}
                    ></i>
                  </div>
                  <span className="text11 d-flex align-items-center">
                    Đồng Nai
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
