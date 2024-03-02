import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function PaymentPage({ totalPrice }) {
  const [price, setPrice] = useState("0");
  const [sumPrice, setSumPrice] = useState("0");

  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);
  const extractNumericValue = (str) => {
    // Remove non-numeric characters and convert to number
    let numericString = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!isNaN(char) && char !== " ") {
        // Check if the character is a number and not a space
        numericString += char;
      }
    }
    return parseInt(numericString);
  };

  useEffect(() => {
    let sum = extractNumericValue(price) + 30000;

    let formattedTotalPrice = sum.toString();
    // Insert dots for thousands separators
    formattedTotalPrice = formattedTotalPrice.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );
    setSumPrice(formattedTotalPrice);
  }, [price]);

  const paymentOk = () => {
    Modal.confirm({
      title: "Are you sure ?",
      onOk: () => {
        alert("Buy Success !!");
      },
    });
  };
  return (
    <div style={{ backgroundColor: "#ecedee" }}>
      <div
        className="user-select-none"
        style={{
          boxShadow: " 0 1px 2px 0 rgba(0,0,0,.2)",
          backgroundColor: "#e5101d",
        }}
      >
        <div
          className="media-width mx-auto d-flex align-items-center px-2 py-1"
          style={{ height: "60px" }}
        >
          <div className="ms-1" style={{ minWidth: "210px" }}>
            <NavLink to="/test-git-push">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzAgMzUiIHdpZHRoPSIxMzAiIGhlaWdodD0iMzUiPjxzd2l0Y2g+PGc+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAzLjIuOEw5OC42IDI1YTY0IDY0IDAgMCAwLTEuMSA5LjdIOTFsLjQtNC4zaC0uMWE5IDkgMCAwIDEtNy44IDQuNGMtNC4xIDAtNy40LTMuMi03LjQtOSAwLTguMyA2LTE1LjkgMTUtMTUuOSAxLjEgMCAyLjIuMiAzLjMuNkw5Ni4yLjlsNy0uMXpNOTMuMyAxNmE0IDQgMCAwIDAtMi44LS44Yy00LjIgMC03LjIgNC45LTcuMiA5LjUgMCAyLjkgMS4zIDQuNSAzLjMgNC41IDIuMSAwIDQuNS0yLjEgNS40LTYuN2wxLjMtNi41em0tODYgMTAuNmMyLjQgMS40IDUgMi4xIDcuOCAyLjEgMi43IDAgNS4yLTEuMyA1LjItMy45IDAtMS45LTEuNC0zLjEtNC40LTQuNi0zLjYtMS45LTYuOS00LjQtNi45LTguN0M5IDQuOSAxNC44LjggMjIgLjhjNCAwIDYuNC45IDcuOCAxLjdsLTIuMiA1LjljLTEuOS0xLTQtMS41LTYuMS0xLjUtMy4zIDAtNSAxLjctNSAzLjUgMCAxLjkgMiAzLjEgNC44IDQuNiA0IDIuMSA2LjYgNC44IDYuNiA4LjcgMCA3LjMtNi4xIDExLjEtMTMuNCAxMS4xLTQuNiAwLTcuOS0xLjItOS40LTIuM2wyLjItNS45em00MSA2LjNhMjAuNyAyMC43IDAgMCAxLTguOSAxLjljLTYuOCAwLTEwLjMtMy45LTEwLjMtMTBDMjkuMSAxNy41IDM0LjQgMTAgNDMgMTBjNC44IDAgOC4zIDIuNyA4LjMgNy4xIDAgNi4xLTUuOSA4LjMtMTUuNSA4LjEgMCAuOS4zIDEuNy43IDIuNC45IDEuMiAyLjUgMS45IDQuNiAxLjkgMi4zIDAgNC42LS41IDYuNy0xLjVsLjUgNC45ek00Mi4xIDE1Yy0zLjMgMC01LjEgMi43LTUuNiA0LjkgNS41LjEgOC4yLS43IDguMi0yLjkgMC0xLjItLjktMi0yLjYtMnptOC4yIDE5LjdsMy4xLTE2LjZjLjYtMyAxLjEtNi4yIDEuMy04LjNINjFsLS42IDQuNWguMWExMCAxMCAwIDAgMSA4LjQtNC41YzMuOSAwIDYuMSAyLjQgNi4xIDYuNSAwIDEuNC0uMiAyLjctLjQgNC4xbC0yLjcgMTQuM2gtN0w2Ny41IDIxYy4yLS45LjItMS44LjItMi43IDAtMS43LS42LTIuOC0yLjMtMi44LTIuMyAwLTUgMi45LTUuOSA4LjFsLTIuMSAxMS4xaC03LjF6bTc1LjEtMTVjMCA4LjctNS45IDE1LjEtMTQuMiAxNS4xLTYuMSAwLTEwLjEtNC0xMC4xLTkuOSAwLTguMyA1LjgtMTUuMSAxNC4yLTE1LjEgNi40LjEgMTAuMSA0LjUgMTAuMSA5LjltLTE3IDUuMWMwIDIuOCAxLjQgNC42IDMuOCA0LjYgMy45IDAgNi01LjYgNi05LjcgMC0yLjItLjktNC41LTMuOC00LjUtNCAwLTYuMSA1LjktNiA5LjYiLz48cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMS43LTZoMTQyLjZ2NDcuNkgtMS43Vi02eiIvPjwvZz48L3N3aXRjaD48L3N2Zz4="
                alt="SENDO.VN - Mua hàng online đảm bảo, giá rẻ từ các Shop uy tín"
              ></img>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className="media-width mx-auto bg-white px-3 py-1 text16 font500"
        style={{
          marginBottom: "12px",
          boxShadow: "0 1px 3px 0 rgba(0,0,0,.2)",
        }}
      >
        XÁC NHẬN - THANH TOÁN
      </div>
      <div className="media-width mx-auto p-0 d-flex flex-row mb-4">
        <div className="col-8 pe-3">
          <div
            className="bg-white rounded-1"
            style={{
              marginBottom: "12px",
              boxShadow: "0 1px 3px 0 rgba(0,0,0,.2)",
            }}
          >
            {/* section 1 */}
            <div
              className="d-flex justify-content-between w-100"
              style={{
                padding: "12px",
                backgroundImage: "linear-gradient(90deg, #ebf8ff, #fff)",
              }}
            >
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#4a90e2" }}
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <span className="text16 font500 ms-2">Địa chỉ nhận hàng</span>
              </div>
              <div
                className="text14 font400 d-flex align-items-center"
                style={{ color: "#4a90e2" }}
              >
                Thay đổi{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#4a90e2", marginLeft: "5px" }}
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
            {/* section 2 */}
            <div
              style={{ padding: "12px", paddingLeft: "24px" }}
              className="d-flex flex-column"
            >
              <div className="mb-1">
                <span className="font500">Tuấn Ngô</span>
                <span> | 0979137027</span>
              </div>
              <div className="mt-1 d-flex" style={{ color: "#828282" }}>
                <div className="me-1">
                  <span
                    className="text12 font500 text-white rounded-3"
                    style={{
                      padding: "4px 12px",
                      borderColor: "#f47c7b",
                      backgroundColor: "#ee6c0e",
                    }}
                  >
                    Nhà riêng
                  </span>
                </div>
                <span>
                  15 ngõ 120 Định Công, Phường Bình Chiểu, Thành phố Thủ Đức, Hồ
                  Chí Minh
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="col-4">
          <div
            className="bg-white rounded-1 d-flex flex-column"
            style={{
              marginBottom: "12px",
              height: "128px",
              boxShadow: "0 1px 3px 0 rgba(0,0,0,.2)",
            }}
          >
            <div
              className="rounded-1 flex-fill"
              style={{
                padding: "12px",
                backgroundImage: "linear-gradient(90deg, #ebf8ff, #fff)",
              }}
            >
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#4a90e2" }}
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
                <div className="ms-2 text16 font500">Mã ưu đãi Sendo (9)</div>
              </div>
            </div>
            <div className="flex-fill" style={{ padding: "12px" }}>
              <div
                className="rounded-1 font500 d-flex flex-fill align-items-center justify-content-center"
                style={{
                  color: "#0f62fe",
                  border: ".1rem dashed #cfd2d4",
                  height: "40px",
                }}
              >
                Chọn/nhập mã
              </div>
            </div>
          </div>
          {/* Payment trigger */}
          <div
            className="bg-white rounded-1 d-flex flex-column"
            style={{
              marginBottom: "12px",
              padding: "12px",
              boxShadow: "0 1px 3px 0 rgba(0,0,0,.2)",
            }}
          >
            <div className="rounded-1 flex-fill">
              <div className="d-flex justify-content-between">
                <span>Tiền hàng</span>
                <span className="ms-2 text16 font500 ">{price}đ</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Phí giao hàng</span>
                <span className="ms-2 text16 font500 ">30.000đ</span>
              </div>
            </div>
            <hr></hr>
            <div className="flex-fill d-flex flex-column">
              <div className="d-flex justify-content-between text14">
                <span>Tổng thanh toán</span>
                <span className="text20 font700" style={{ color: "#ee2624" }}>
                  {sumPrice}đ
                </span>
              </div>
              <Button
                type="primary"
                size="large"
                danger
                className="w-100 my-2"
                onClick={paymentOk}
              >
                <NavLink
                  to="/test-git-push/Payment"
                  className="text-white font700 text16"
                >
                  Đặt mua
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>section4</div> */}
    </div>
  );
}
