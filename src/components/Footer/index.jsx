import { Button, Input } from "antd";
import React, { useState } from "react";
import "./index.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export default function Footer() {
  const [isUp, setIsUp] = useState(false);

  const handleClick = () => {
    setIsUp((prevIsUp) => !prevIsUp);
  };
  return (
    <div id="footer" className="user-select-none">
      <section className="media-width mx-auto ">
        <div className="p-3 row ">
          <a
            className="media-flex py-2 d-flex flex-column align-items-center text-decoration-none"
            href="https://www.sendo.vn/huong-dan/ve-sendo"
          >
            <img src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png"></img>
            <div
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: "13.125rem" }}
            >
              <span className="text-center fw-bold">Siêu nhiều hàng tốt</span>
              <span className="text-center">
                Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm
              </span>
            </div>
          </a>
          <a
            className="media-flex py-2 d-flex flex-column align-items-center text-decoration-none"
            href="https://www.sendo.vn/huong-dan/ve-sendo"
          >
            <img src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png"></img>
            <div
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: "13.125rem" }}
            >
              <span className="text-center fw-bold">Siêu yên tâm</span>
              <span className="text-center">Miễn phí đổi trả 48h</span>
            </div>
          </a>
          <a
            className="media-flex py-2 d-flex flex-column align-items-center text-decoration-none"
            href="https://www.sendo.vn/huong-dan/ve-sendo"
          >
            <img src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png"></img>
            <div
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: "13.125rem" }}
            >
              <span className="text-center fw-bold">Siêu tiện lợi</span>
              <span className="text-center">
                Mang thế giới mua sắm của Sendo trong tầm tay bạn
              </span>
            </div>
          </a>
          <a
            className="media-flex py-2 d-flex flex-column align-items-center text-decoration-none"
            href="https://www.sendo.vn/huong-dan/ve-sendo"
          >
            <img src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png"></img>
            <div
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: "13.125rem" }}
            >
              <span className="text-center fw-bold">Siêu tiết kiệm</span>
              <span className="text-center">
                Giá hợp lý, vừa túi tiền. Nhiều chương trình khuyến mãi
              </span>
            </div>
          </a>
        </div>
      </section>
      <section className="py-4" style={{ backgroundColor: "#f2f3f4" }}>
        <div className="media-width mx-auto d-flex">
          {/* Về chúng tôi */}
          <div className="d-flex flex-column w-100">
            <span className="mb-2 fw-bold">VỀ CHÚNG TÔI</span>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://www.sendo.vn/huong-dan/ve-sendo?ref=footer"
            >
              Giới thiệu Sendo.vn
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://help.sendo.vn/hc/vi/articles/360059470652-L%E1%BB%A3i-%C3%ADch-c%E1%BB%A7a-mua-h%C3%A0ng-Shop-SenMall-l%C3%A0-g%C3%AC-?ref=footer"
            >
              Giới thiệu SenMall
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://www.sendo.vn/quy-che-hoat-dong?ref=footer"
            >
              Quy chế hoạt động
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://www.sendo.vn/chinh-sach-bao-mat?ref=footer"
            >
              Chính sách bảo mật
            </a>
            <a
              className="w-75 pe-5 text-black"
              href="https://ban.sendo.vn/chinh-sach-nguoi-ban/49-5-quy-dinh-van-chuyen/175-phu-luc-09-quy-dinh-lay-hang%2C-giao-hang%2C-tra-hang%2C-thu-hoi-danh-cho-don-vi-van-chuyen"
            >
              Giao hàng và Nhận hàng
            </a>
          </div>
          {/* Dành cho người mua */}
          <div className="d-flex flex-column w-100">
            <span className="mb-2 fw-bold">DÀNH CHO NGƯỜI MUA</span>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://help.sendo.vn/hc/vi/articles/360059468452?ref=footer"
            >
              Giải quyết khiếu nại
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://help.sendo.vn/hc/vi/articles/360059885831?ref=footer"
            >
              Hướng dẫn mua hàng
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://help.sendo.vn/hc/vi/articles/360059893871?ref=footer"
            >
              Chính sách đổi trả
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://help.sendo.vn/hc/vi?ref=footer"
            >
              Chăm sóc khách hàng
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              hhref="https://www.sendo.vn/tien-ich/nap-tien?ref=footer"
            >
              Nạp tiền điện thoại
            </a>
          </div>
          {/* Dành cho người bán */}
          <div className="d-flex flex-column w-100">
            <span className="mb-2 fw-bold">DÀNH CHO NGƯỜI BÁN</span>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://ban.sendo.vn/gioi-thieu-trang-ban?ref=footer"
            >
              Quy định đối với người bán
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://ban.sendo.vn/chinh-sach-nguoi-ban?ref=footer"
            >
              Chính sách bán hàng
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://ban.sendo.vn/chinh-sach-nguoi-ban/36-5-quy-dinh-kiem-duyet?ref=footer"
            >
              Hệ thống tiêu chí kiểm duyệt
            </a>
            <a
              className="w-75 pe-5 text-black lh-lg"
              href="https://ban.sendo.vn/gioi-thieu-trang-ban?ref=footer"
            >
              Mở shop trên Sendo
            </a>
          </div>
          {/* Tải ứng dụng Sendo */}
          <div className="d-flex flex-column w-100">
            <span className="mb-2 fw-bold">TẢI ỨNG DỤNG SENDO</span>
            <a
              className="w-75 pe-5 text-black lh-l"
              href="https://www.sendo.vn/huong-dan/ve-sendo?ref=footer"
            >
              Mang thế giới mua sắm của Sendo trong tầm tay bạn
            </a>
            <div className="d-flex flex-wrap">
              <a
                aria-label="app store"
                href="https://go.onelink.me/app/2a94415f"
              >
                <img
                  className="app-icon me-2 mt-2"
                  src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                  alt="app-store"
                ></img>
              </a>
              <a
                aria-label="google play"
                href="https://go.onelink.me/app/2a19ae85"
              >
                <img
                  className="app-icon me-2 mt-2"
                  src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                  alt="google-play"
                ></img>
              </a>
              <a
                aria-label="app gallery"
                href="https://appgallery.huawei.com/app/C101535313"
              >
                <img
                  className="app-icon me-2 mt-2"
                  src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
                  alt="app-gallery"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="detail-sendo py-4"
        style={{ backgroundColor: "#27343e" }}
      >
        <div className="media-width mx-auto d-flex justify-content-between">
          <div className="detail-col-1 d-flex flex-column">
            <span className="fw-bold mb-2 pb-1">
              Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
            </span>
            <span className="mb-3">
              Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ
              20, ngày 26/04/2022.
            </span>
            <span className="mb-3">
              Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
            </span>
            <span className="mb-3">
              Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường
              Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7,
              Thành phố Hồ Chí Minh, Việt Nam.
            </span>
            <span>
              Email:
              <a className="text-white" href="mailto:lienhe@sendo.vn">
                lienhe@sendo.vn
              </a>
            </span>
            <div className="mt-3">
              <a href="http://online.gov.vn/Home/WebDetails/21391">
                <img
                  className="truth-icon me-4"
                  src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                  alt="Bộ Công Thương"
                ></img>
              </a>
              <a href="https://help.sendo.vn/hc/vi/articles/115001260091-Làm-thế-nào-để-trả-hàng">
                <img
                  className="truth-icon me-4"
                  src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
                  alt="Bộ Công Thương - Nói không với hàng giả"
                ></img>
              </a>
            </div>
          </div>
          <div className="detail-col-2">
            <div className="mb-2 pb-1">
              <span className="fw-bold ">
                Đăng ký nhận bản tin ưu đãi khủng từ Sendo
              </span>
            </div>
            <form className="">
              <Input
                id="email-search"
                placeholder="Email của bạn là"
                onSearch=""
                className="detail-col-2 p-1"
              />
              <Button
                type="primary"
                className="email-search-button bg-danger ms-1 w-100"
              >
                <span className="fw-bold" style={{ fontSize: "14px" }}>
                  Đăng ký
                </span>
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="media-width mx-auto d-flex flex-column p-4">
        <div className="mb-1 d-flex align-items-center">
          <span className="fw-bold me-1">TOP TÌM KIẾM</span>
          <div onClick={handleClick} className="d-flex">
            {isUp ? (
              <UpOutlined style={{ fontSize: "9px" }} />
            ) : (
              <DownOutlined style={{ fontSize: "9px" }} />
            )}
          </div>
        </div>
        <div
          className=""
          style={{ maxHeight: isUp ? "none" : "25px", overflow: "hidden" }}
        >
          <a className="me-3" href="dong-ho-phu-kien/">
            Đồng Hồ
          </a>
          <a className="me-3" href="mall/">
            SHOPPING Mall
          </a>
          <a className="me-3" href="cong-nghe/">
            Thế Giới Di Động
          </a>
          <a className="me-3" href="thuc-pham/">
            Bánh Trung Thu Kinh Đô
          </a>
          <a className="me-3" href="su-kien/black-friday/">
            Black Friday
          </a>
          <a className="me-3" href="tivi/">
            Tivi
          </a>
          <a className="me-3" href="my-pham/">
            Mỹ phẩm hàn quốc
          </a>
          <a className="me-3" href="kem-chong-nang/">
            Kem chống nắng
          </a>
          <a className="me-3" href="cho-tot.htm">
            Chợ Tốt
          </a>
          <a className="me-3" href="shopee-10k.htm">
            Shopee
          </a>
          <a className="me-3" href="su-kien/corona/">
            Corona Virus
          </a>
          <a className="me-3" href="do-choi-nau-an-buon-ban/">
            Đồ chơi nấu ăn
          </a>
          <a className="me-3" href="laptop/">
            Laptop
          </a>
          <a className="me-3" href="iphone-cu/">
            iPhone 6
          </a>
          <a className="me-3" href="ban-phim-game-thu/">
            Bàn phím cơ
          </a>
          <a className="me-3" href="quat-tran.htm">
            Quạt trần
          </a>
          <a className="me-3" href="loa-bluetooth/">
            Loa bluetooth
          </a>
          <a className="me-3" href="smartphone-cu/">
            Điện thoại samsung
          </a>
          <a className="me-3" href="ao-khoac-nam/">
            Áo khoác nam
          </a>
          <a className="me-3" href="ao-so-mi-nam/">
            Áo sơ mi nam
          </a>
          <a className="me-3" href="dong-ho-nu/">
            Đồng hồ nữ
          </a>
          <a className="me-3" href="dong-ho-nam/">
            Đồng hồ nam
          </a>
          <a className="me-3" href="dong-ho-casio.htm">
            Đồng hồ casio
          </a>
          <a className="me-3" href="xe-dap-dia-hinh/">
            Xe đạp
          </a>
          <a className="me-3" href="vali-mem/">
            Vali kéo
          </a>
          <a className="me-3" href="balo/">
            Balo hang hieu
          </a>
          <a className="me-3" href="xe-tay-ga/">
            Xe tay ga
          </a>
          <a className="me-3" href="xe-dap-dien/">
            Xe đạp điện
          </a>
          <a className="me-3" href="ghe-van-phong/">
            Ghế văn phòng
          </a>
          <a className="me-3" href="noi-com-dien/">
            Nồi cơm điện
          </a>
          <a className="me-3" href="dep-adidas.htm">
            Dép adidas
          </a>
          <a className="me-3" href="giay-nike-chinh-hang.htm">
            Giày nike
          </a>
          <a className="me-3" href="nguyen-vat-lieu-lam-do-handmade/">
            Handmade
          </a>
          <a className="me-3" href="ao-dai/">
            Áo dài
          </a>
          <a className="me-3" href="trang-phuc-cuoi/">
            Váy cưới
          </a>
          <a className="me-3" href="bikini-quan-vay.htm">
            Bikini
          </a>
          <a className="me-3" href="may-hut-sua/">
            Máy hút sữa
          </a>
          <a className="me-3" href="may-khoan/">
            Máy khoan
          </a>
          <a className="me-3" href="may-bom-tang-ap/">
            Máy bơm nước
          </a>
          <a className="me-3" href="bong-den-led/">
            Đèn led
          </a>
          <a className="me-3" href="sua-ensure-uc-850g.htm">
            Sữa ensure
          </a>
          <a className="me-3" href="den-pin/">
            Đèn pin
          </a>
          <a className="me-3" href="may-anh-may-quay-phim/">
            Máy ảnh
          </a>
          <a className="me-3" href="dong-ho-thong-minh/">
            Đồng hồ thông minh
          </a>
          <a className="me-3" href="non-son.htm">
            Nón sơn
          </a>
          <a className="me-3" href="camera-wifi.htm">
            Camera wifi
          </a>
          <a className="me-3" href="may-bay-quay-phim-flycam-drone/">
            Flycam
          </a>
          <a className="me-3" href="sach-giao-khoa-tham-khao/">
            Sách giáo khoa
          </a>
          <a className="me-3" href="may-do-huyet-ap/">
            Máy đo huyết áp
          </a>
          <a className="me-3" href="coc-nguyet-san/">
            Cốc nguyệt san
          </a>
          <a className="me-3" href="thit-bo/">
            Thịt bò
          </a>
          <a className="me-3" href="mam-ruoc/">
            Mắm ruốc
          </a>
          <a className="me-3" href="tiki.htm">
            Tiki
          </a>
          <a className="me-3" href="nha-hang/">
            Nhà hàng
          </a>
          <a className="me-3" href="lazada.htm">
            Lazada
          </a>
          <a className="me-3" href="shopee-10k.htm">
            Shopee
          </a>
          <a className="me-3" href="su-kien/corona/">
            Corona Virus
          </a>
          <a className="me-3" href="trang.htm">
            trang
          </a>
          <a className="me-3" href="quan-ao-thoi-trang.htm">
            quan ao thoi trang
          </a>
          <a className="me-3" href="giay-trang.htm">
            giay trang
          </a>
          <a className="me-3" href="khau-trang.htm">
            khẩu trang
          </a>
          <a className="me-3" href="tu-trang-diem.htm">
            tu trang diem
          </a>
          <a className="me-3" href="bo-co-trang-diem-nake-5-12-cay.htm">
            bộ cọ trang điểm nake 5 12 cây
          </a>
          <a className="me-3" href="bo-co-trang-diem.htm">
            bo cọ trang điểm
          </a>
          <a className="me-3" href="kem-tam-trang.htm">
            kem tam trang
          </a>
          <a className="me-3" href="trang-tri.htm">
            trang tri
          </a>
          <a className="me-3" href="khau-trang-kf94.htm">
            khẩu trang kf94
          </a>
          <a className="me-3" href="bang-chu-dien-tu.htm">
            bang chu dien tu
          </a>
          <a className="me-3" href="hap-trang-collagen.htm">
            hap trang collagen
          </a>
          <a className="me-3" href="den-led-trang-tri.htm">
            đèn led trang trí
          </a>
          <a className="me-3" href="mau-ao-co-chu-v.htm">
            mau ao co chu v
          </a>
          <a className="me-3" href="kem-one-today-trang-da.htm">
            kem one today trang da
          </a>
          <a className="me-3" href="giay-boot-o-nha-trang.htm">
            giay boot o nha trang
          </a>
          <a className="me-3" href="khau-trang-y-te.htm">
            khẩu trang y tế
          </a>
          <a className="me-3" href="khau-trang-5d.htm">
            khẩu trang 5d
          </a>
          <a className="me-3" href="serum-ngoc-trai-trang-da.htm">
            serum ngoc trai trang da
          </a>
          <a className="me-3" href="thoi-trang-huyen-lady.htm">
            thoi trang huyen lady
          </a>
          <a className="me-3" href="khau-trang-da-nang-di-phuot.htm">
            khau trang da nang di phuot
          </a>
          <a
            className="me-3"
            href="dien-thoai-nokia-8855-man-hinh-trang-den.htm"
          >
            dien thoai nokia 8855 man hinh trang den
          </a>
          <a className="me-3" href="duong-trang.htm">
            duong trang
          </a>
          <a className="me-3" href="giay-trang-nu.htm">
            giay trang nu
          </a>
          <a className="me-3" href="trang-diem.htm">
            trang diem
          </a>
          <a className="me-3" href="quan-jean-nha-trang.htm">
            quan jean nha trang
          </a>
          <a className="me-3" href="ve-sinh-tay-trang.htm">
            ve sinh tay trang
          </a>
          <a className="me-3" href="thoi-trang-ao-thun-bau.htm">
            thời trang áo thun bầu
          </a>
          <a className="me-3" href="trang-guong-op-lung-dien-thoai.htm">
            trang guong op lung dien thoai
          </a>
          <a className="me-3" href="ao-hoodie-chu-supreme.htm">
            ao hoodie chu supreme
          </a>
        </div>
      </section>
    </div>
  );
}
