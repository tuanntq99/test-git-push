import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListProduct({ listProduct }) {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  useEffect(() => {
    setPosts(listProduct);
    setTotal(listProduct.length);
  }, [listProduct]);

  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage - 1, indexOfLastPage - 1);

  // console.log("here");
  // console.log(indexOfFirstPage);
  // console.log(indexOfLastPage);
  // console.log(currentPosts);
  // console.log(posts);
  // console.log(total);
  // console.log(page);
  // console.log(postPerPage);

  const onShowSizeChange = (pageSize) => {
    setPostPerPage(pageSize);
  };

  return (
    <div className="mx-auto media-width">
      <div className="d-flex flex-wrap" style={{ margin: "-8px" }}>
        {/* product list case */}
        {currentPosts.map((product, index) => (
          <div
            key={index}
            className="media-flex product p-2 w-100"
            style={{ height: "374.667px" }}
          >
            <Link to={`/test-git-push/${product.nameProduct}`}>
              <div
                className={`rounded-3 bg-white d-flex flex-wrap ${
                  product.modern === 2
                    ? ""
                    : product.modern === 4
                    ? ""
                    : "flex-column"
                }`}
                style={{
                  boxShadow:
                    "0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)",
                  height: "100%",
                  ...(product.modern === 3
                    ? {
                        padding: "12px 8px",
                        backgroundImage:
                          "linear-gradient(180deg,#fff 14%,#fbdcc5)",
                        backgroundPosition: "bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }
                    : product.modern === 4
                    ? {
                        padding: "12px 8px",
                        backgroundImage:
                          product.bgColor === "true"
                            ? "url(https://media3.scdn.vn/img4/2020/12_12/peOCGvbUTMynoj5qZeSY.png)"
                            : "url(https://media3.scdn.vn/img4/2020/12_12/3GYcW9jNFr2WPhfJs783.png)",
                        backgroundPosition: "bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }
                    : {}),
                }}
              >
                {/* case 2 */}
                {product.modern === 2 ? (
                  <img
                    className="mw-100"
                    src={`${product.image}`}
                    style={{ objectFit: "contain" }}
                    alt="muadee"
                  ></img>
                ) : (
                  ""
                )}
                {/* case 3 */}
                {product.modern === 3 ? (
                  <div
                    style={{
                      backgroundImage:
                        "url(https://media3.scdn.vn/img4/2020/12_28/mRJ4ZDJW9Jndp3bsMAOw.png)",
                      height: "24px",
                      marginBottom: "40px",
                      backgroundSize: "contain",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                ) : (
                  ""
                )}
                {/* case 4 */}
                {product.modern === 4 ? (
                  <div
                    className="d-flex w-100 mb-3 align-items-center"
                    style={{ height: "fit-content" }}
                  >
                    <img
                      className="me-1"
                      style={{
                        width: "16px",
                        height: "16px",
                        filter:
                          product.bgColor === "true"
                            ? ""
                            : "invert(69%) sepia(50%) saturate(427%) hue-rotate(88deg) brightness(84%) contrast(86%)",
                      }}
                      src={`${product.rcmIcon}`}
                      alt="recommend-icon"
                    ></img>
                    <span className="text14 font700">{product.rcmText}</span>
                  </div>
                ) : (
                  ""
                )}
                {/* case 1 */}
                {product.modern === 2 ? (
                  ""
                ) : (
                  <div>
                    <div className="rounded-3 position-relative">
                      <img
                        className="rounded-top-3"
                        style={{ width: "100%" }}
                        src="https://media3.scdn.vn/img4/2023/02_11/Obamlbxt8FsG3HvWKzUi_simg_b5529c_250x250_maxb.png"
                        alt="img-detail"
                      ></img>
                      {product.modern === 1 ? (
                        product.playButton === "true" ? (
                          <i
                            className="bi-play-circle d-flex justify-content-center position-absolute text-white rounded-circle"
                            style={{
                              bottom: "12px",
                              right: "4px",
                              fontSize: "24px",
                              backgroundColor: "rgba(128, 128, 128, 0.6)",
                            }}
                          ></i>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      {product.modern === 1 ? (
                        product.sponsor === "true" ? (
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
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </div>
                    {/* case 4 */}
                    {product.modern === 4 ? (
                      <div className="py-1 d-flex flex-column">
                        <span className="text14 font400">
                          {product.nameProduct}
                        </span>
                        <span
                          className="text12 font 400"
                          style={{
                            color:
                              product.bgColor === "true"
                                ? "#4259ab"
                                : "#55ba78",
                          }}
                        >
                          {product.quantitiesSale}
                        </span>
                        <span
                          className="text-white text12 font400 mt-2 rounded-2 d-flex align-items-center"
                          style={{
                            padding: "4px 12px",
                            width: "fit-content",
                            backgroundColor:
                              product.bgColor === "true"
                                ? "#4259ab"
                                : "#55ba78",
                            height: "24px",
                          }}
                        >
                          Khám phá ngay
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* end case 4 */}
                    <div className="p-2 pt-3 w-100 position-relative bg-white rounded-bottom-3">
                      {product.modern === 1 ? (
                        <div
                          className="position-absolute top-0 d-flex w-100"
                          style={{ transform: "translate(-8px, -60%)" }}
                        >
                          <img
                            src={product.voucher1}
                            alt="clear-sale"
                            style={{ height: "16px", width: "30%" }}
                          ></img>
                          <img
                            src={product.voucher2}
                            alt="clear-sale"
                            style={{ height: "16px", width: "30%" }}
                          ></img>
                        </div>
                      ) : (
                        ""
                      )}
                      {product.modern === 1 ? (
                        <div
                          className="mb-1 overflow-hidden"
                          style={{
                            fontSize: "14px",
                            WebkitLineClamp: "2",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            height: "36px",
                          }}
                        >
                          {product.shop === "true" ? (
                            <img
                              className="me-1"
                              style={{ height: "12px" }}
                              src={product.shopIcon}
                              alt="shop-badge"
                            ></img>
                          ) : (
                            ""
                          )}
                          {product.nameProduct}
                        </div>
                      ) : (
                        ""
                      )}
                      {product.modern === 4 ? (
                        ""
                      ) : (
                        <div className="d-flex flex-column w-100 ">
                          <div
                            className={`${
                              product.modern === 3 ? "order-2" : ""
                            } d-flex align-items-center`}
                          >
                            <span
                              className="h-100 text-decoration-line-through"
                              style={{
                                fontSize: "11px",
                                color: "#b7bbbf",
                              }}
                            >
                              {product.oldPrice}
                            </span>
                            <span className="ms-1 text-danger">
                              {product.discount}
                            </span>
                          </div>
                          <span
                            className={`${
                              product.modern === 3 ? "order-1" : ""
                            } text-danger fw-bold`}
                            style={{ fontSize: "16px" }}
                          >
                            {product.newPrice}
                          </span>
                        </div>
                      )}
                      <div
                        style={{
                          paddingTop: "1px",
                          paddingBottom: "3px",
                        }}
                      >
                        {product.modern === 1 ? (
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
                        ) : (
                          ""
                        )}
                      </div>
                      {product.modern === 4 ? (
                        ""
                      ) : (
                        <div
                          className="mb-1 d-flex justify-content-center rounded-3"
                          style={{ backgroundColor: "#f47c7b" }}
                        >
                          <span
                            className="d-flex align-items-center text-white"
                            style={{ fontSize: "11px", height: "14px" }}
                          >
                            {product.sold ? "Đã bán " + product.sold : "Mở bán"}
                          </span>
                        </div>
                      )}
                      {product.modern === 1 ? (
                        <div
                          className="mt-1 d-flex justify-content-between"
                          style={{ height: "12px" }}
                        >
                          <div className="d-flex">
                            <span
                              className="text11 font400 me-1 d-flex align-items-center"
                              style={{ height: "12px" }}
                            >
                              {product.rate ? product.rate : "5"}/5
                            </span>
                            <i
                              className="bi-star-fill d-flex align-items-center"
                              style={{
                                color: "#ffc600",
                                fontSize: "9px",
                                height: "12px",
                              }}
                            ></i>
                          </div>
                          <span className="text11 d-flex align-items-center">
                            {product.city}
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
      className="text-center mt-4"
        onChange={(value) => setPage(value)}
        pageSize={postPerPage}
        total={total}
        current={page}
        // showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
      />
    </div>
  );
}
