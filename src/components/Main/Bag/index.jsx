import { Button, Checkbox, Input, Modal, Space } from "antd";
import { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
const ButtonGroup = Button.Group;

const Bag = ({ pro, listProduct, updatePro }) => {
  const [totalCount, setTotalCount] = useState(0);
  const [prosState, setProsState] = useState(pro);

  const increase = (name) => {
    const findPro = prosState.find(
      (item) => item.name === name && item.count > 0
    );

    if (findPro) {
      const updatedPro = prosState.map((item) => {
        if (item.name === name && item.count > 0) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      setProsState(updatedPro);

    } else {
      console.log("Product not found or count is 0");
    }
  };

  const decrease = (name) => {
    const findPro = prosState.find(
      (item) => item.name === name && item.count > 0
    );

    if (findPro) {
      const updatedPro = prosState.map((item) => {
        if (item.name === name && item.count > 0) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      });
      setProsState(updatedPro);

    } else {
      console.log("Product not found or count is 0");
    }
  };

  const onChange = (name) => {
    setProsState((e) => {
      return e.map((item) => {
        if (item.name === name) {
          return { ...item, check: !item.check };
        } else {
          return { ...item };
        }
      });
    });
  };

  const deleteTodo = (name) => {
    const findPro = prosState.find(
      (item) => item.name === name && item.count > 0
    );
    Modal.confirm({
      title: "Are you sure ?",
      onOk: () => {
        if (findPro.check) {
          const updatedTodos = prosState.filter((todo) => todo.name !== name);
          setProsState(updatedTodos);
          setProsState((e) => {
            return e.map((item) => {
              if (item.name === name) {
                return { ...item, check: !item.check };
              } else {
                return { ...item };
              }
            });
          });
        }
      },
    });
  };

  useEffect(() => {
    updatePro(prosState);
  }, [prosState, updatePro]);

  useEffect(() => {
    // Calculate total count whenever pro changes
    const sum = prosState.reduce((total, item) => total + item.count, 0);
    setTotalCount(sum);
  }, [prosState]);

  console.log(totalCount);
  console.log(prosState);

  return (
    <div style={{ backgroundColor: "#f2f3f4", paddingBottom: "24px" }}>
      <div
        className="media-width mx-auto"
        style={{ paddingTop: "24px", paddingBottom: "24px" }}
      >
        <div className="p-2 w-100 d-flex">
          <div className="font700 text20 me-3">
            Giỏ hàng của bạn (quanity here)
          </div>
          <Button className="font700 text14">Sửa</Button>
        </div>
        <div className="d-flex flex-wrap p-2">
          {/* start */}
          <div className="quantityBadge">
            {prosState.map((pros, index) => (
              <div key={index} style={{ padding: "6px", margin: "-6px" }}>
                <div className="bg-white rounded-3 w-100">
                  {/* section 1 */}
                  <div className="px-3 py-2 d-flex justify-content-between">
                    <div className="d-flex flex-wrap align-items-center">
                      <a href="/test-git-push/Bag">
                        <div
                          className="position-relative d-flex"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <img
                            src="https://media3.scdn.vn/img4/2024/01_02/ruPqyf779AGlHJrSAcaJ_simg_34545b_120x60_maxb.jpg"
                            alt="img"
                            className="h-100 position-absolute start-50 top-50"
                            style={{
                              width: "fitContent",
                              transform: "translate(-50%,-50%)",
                            }}
                          ></img>
                        </div>
                      </a>
                      <a
                        href="/test-git-push/Bag"
                        className="ms-3 font700 text14 text-dark "
                      >
                        KHO GIA DỤNG NAM ANH
                      </a>
                    </div>
                    <div>
                      <button
                        className="bg-white font700 text14"
                        style={{
                          padding: "6px 7px",
                          border: "1px solid #fff",
                        }}
                      >
                        <span>Chat với Shop</span>
                      </button>
                    </div>
                  </div>
                  {/* section 2 */}
                  <div className="pt-2 px-3 d-flex">
                    {/* col-1 */}
                    <div className="d-flex w-100">
                      <div
                        className="p-1 d-flex align-items-center"
                        style={{ margin: "-4px" }}
                      >
                        <Checkbox
                          className="me-2"
                          checked={pros.check}
                          onChange={() => onChange(pros.name)}
                        ></Checkbox>
                        <a href="/test-git-push/Bag">
                          <div style={{ width: "80px", height: "fitContent" }}>
                            <img
                              src="https://media3.scdn.vn/img4/2023/10_31/GmO9p8e5EYx8vBARpAtW_simg_de2fe0_500x500_maxb.jpg"
                              style={{ width: "80px" }}
                              alt="img"
                            ></img>
                          </div>
                        </a>
                      </div>
                      <div className="p-1 w-100">
                        <div className="p-1">
                          <div className="text12 font700 ">
                            <span
                              className="rounded-4"
                              style={{
                                padding: "4px 12px",
                                backgroundColor: "#e2e6f2",
                                borderColor: "#7182c0",
                                color: "#133096",
                                width: "fitContent",
                              }}
                            >
                              Mua trước trả sau
                            </span>
                          </div>
                        </div>
                        <div
                          className="p-1 overflow-hidden text14 font400"
                          style={{
                            webkitLineClamp: "1",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            height: "25px",
                          }}
                        >
                          {pros.name}
                        </div>
                        <div className="p-1 dropdown">
                          <button
                            className="btn btn-white d-flex justify-content-between w-100"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ border: "1px solid #cfd2d4", width: "" }}
                          >
                            <div>10 bịch</div>
                            <div className="bi-caret-down-fill"></div>
                          </button>
                          <ul className="dropdown-menu w-100">
                            <li>
                              <a
                                className="dropdown-item"
                                href="/test-git-push/Bag"
                              >
                                Action
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/test-git-push/Bag"
                              >
                                Another action
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/test-git-push/Bag"
                              >
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* col-2 */}
                    <div className="mx-3" style={{ width: "152px" }}>
                      <div className="d-flex flex-column w-100 ">
                        <span
                          className=" text-end fw-bold"
                          style={{ fontSize: "16px" }}
                        >
                          {listProduct
                            .filter(
                              (product) => product.nameProduct === pros.name
                            )
                            .map((filteredProduct) => filteredProduct.newPrice)}
                        </span>
                        <span
                          className="h-100 text-end text-decoration-line-through"
                          style={{
                            fontSize: "11px",
                            color: "#b7bbbf",
                          }}
                        >
                          {listProduct
                            .filter(
                              (product) => product.nameProduct === pros.name
                            )
                            .map((filteredProduct) => filteredProduct.oldPrice)}
                        </span>
                      </div>
                    </div>
                    <div className="mx-3" style={{ width: "152px" }}>
                      <Space direction="vertical">
                        <Space size="large">
                          <ButtonGroup>
                            <Button
                              className="rounded-2"
                              onClick={() => decrease(pros.name)}
                              icon={<MinusOutlined />}
                            />
                            <Input
                              value={pros.count}
                              style={{ width: "40px" }}
                              className="text-center mx-1"
                              readOnly
                            ></Input>
                            <Button
                              className="rounded-2"
                              onClick={() => increase(pros.name)}
                              icon={<PlusOutlined />}
                            />
                          </ButtonGroup>
                        </Space>
                      </Space>
                    </div>
                    <div className="ms-3 d-flex" style={{ width: "88px" }}>
                      <button
                        className="me-2 bg-white d-flex "
                        style={{ border: "1px solid #fff", padding: "7px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                      </button>
                      <button
                        className="me-2 bg-white d-flex "
                        style={{ border: "1px solid #fff", padding: "7px" }}
                        onClick={() => deleteTodo(pros.name)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-wrap"
                    style={{ padding: "20px 8px" }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ padding: "6px", height: "36px", width: "36px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="currentColor"
                        className="bi bi-ticket-perforated"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                        <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                      </svg>
                    </div>
                    <div className="p-1 d-flex user-select-none">
                      <div className="p-1 text14 font400">
                        Mã giảm giá của shop (1)
                      </div>
                      <div className="p-1">
                        <i className="bi-caret-right-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* end  */}
          <div className="flex-fill" style={{ padding: "0 8px" }}>
            <div className="bg-white rounded-3">
              <div className="p-2 d-flex justify-content-between">
                <div className="p-1 d-flex user-select-none">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ padding: "6px", height: "36px", width: "36px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-ticket-perforated"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                      <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                    </svg>
                  </div>
                  <div className="p-1 d-flex align-items-center text14 font400">
                    Mã ưu đãi Sendo (23)
                  </div>
                </div>
                <div className="text-primary d-flex align-items-center text14 font400">
                  Chọn/nhập mã
                </div>
              </div>
              <hr className="m-0"></hr>
              <div className="p-3 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="font400 text14">Tạm tính:</div>
                  <div className="font700 text20">0đ</div>
                </div>
                <Button
                  type="primary"
                  size="large"
                  danger
                  className="w-100 my-2"
                >
                  <span className="text-white font700 text16">Mua ngay</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
