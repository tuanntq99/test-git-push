import { Col, Row, Input, Button, Dropdown } from "antd";
import "./index.css";
import { useEffect, useRef } from "react";
import { AppstoreOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Submenu", "sub2", null, [
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
    ]),
  ]),
];

// const items = [
//   {
//     key: '1',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item (disabled)
//       </a>
//     ),
//     disabled: true,
//   },
//   {
//     key: '3',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item (disabled)
//       </a>
//     ),
//     disabled: true,
//   },
//   {
//     key: '4',
//     danger: true,
//     label: 'a danger item',
//   },
// ];

export default function Navigation() {
  const hideRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navAnchor = hideRef.current.getBoundingClientRect().bottom;

      if (navAnchor <= 0) {
        topRef.current.style.position = "fixed";
        topRef.current.style.top = "0";
        topRef.current.style.left = "0";
        topRef.current.style.width = "100%";
      } else {
        topRef.current.style.position = "static";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navigation" className="w-100 user-select-none">
      <div ref={hideRef} style={{ backgroundColor: "#d52220" }}>
        <Row
          className="media-width mx-auto align-items-center"
          style={{ height: "2rem" }}
        >
          <Col className="me-4 align-items-center">
            <a href="/" className="text-decoration-none">
              <span className="text text-white">Tải ứng dụng</span>
            </a>
          </Col>
          <Col className="me-4">
            <a href="/" className="text-decoration-none">
              <span className="text text-white">Chăm sóc khách hàng</span>
            </a>
          </Col>
        </Row>
      </div>
      <div className="z-1" ref={topRef} style={{ backgroundColor: "#ee2624" }}>
        <Row
          className="media-width mx-auto align-items-center"
          style={{ margin: "0 auto", height: "4rem" }}
        >
          <Col className="me-3">
            <a href="/" className="text-decoration-none user-select-none">
              <span className="fs-2 fst-italic fw-bold text-white ">Sendo</span>
            </a>
          </Col>
          <Col className="d-flex flex-fill user-select-none">
            <Dropdown
              menu={{
                items,
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <i className="bi-grid text-white px-2 me-2"></i>
              </div>
            </Dropdown>
            <form className="d-flex align-items-center w-100">
              <Input
                id="sendo-search"
                placeholder="Tìm trên Sendo"
                allowClear
                onSearch=""
                className="px-3 py-2 border-white w-100 me-1"
              />
              <Button
                style={{ height: "40px", padding: "8px 10px" }}
                className="bg-white border-white"
                value="submit"
                aria-label="button submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </Button>
            </form>
          </Col>
          <Col className="d-flex">
            <a
              className="px-4 user-select-none"
              href="/"
              style={{ fontSize: "24px" }}
            >
              <i className="bi-cart2 text-white"></i>
            </a>
            <Button className="border-white fw-bold h-auto ">
              <span>Đăng nhập</span>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
