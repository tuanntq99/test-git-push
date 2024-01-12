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
                <span
                  className="mb-1 overflow-hidden"
                  style={{
                    fontSize: "14px",
                    height: "10px",
                    webkitLineClamp: "2",
                  }}
                >
                  <img
                    className="me-1"
                    style={{ height: "12px" }}
                    src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                    alt="shop-badge"
                  ></img>
                  Móc Khóa An Toàn Chuyên Dùng Cho Bạt, Lưới Che Nắng
                </span>
                <div>sale</div>
                <div>mini link</div>
                <div>rate & place</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
