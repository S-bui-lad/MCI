import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="py-4 bg-dark text-white text-center">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <a href="https://www.facebook.com/mcitrainingcenter?mibextid=LQQJ4d" target="_blank">
                            <img src="https://graph.facebook.com/v9.0/mcitrainingcenter/picture"
                                 alt="Facebook MCI Training Center"/>
                        </a>
                        <p>Học Viện Đào Tạo Công</p>
                        <p>+2021 người theo dõi</p>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>HÀ NỘI</h3>
                    <p>165 Thái Hà<br/>Hotline: 024 7106 8368<br/>Địa chỉ: Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái Hà,
                        Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</p>
                    <p>30 Trung Liệt<br/>Hotline: 024 7106 8368<br/>Địa chỉ: Số 30, Trung Liệt, Phường Trung Liệt, Quận
                        Đống Đa, Thành phố Hà Nội, Việt Nam</p>
                </div>
                <div className="footer-section">
                    <h3>HỒ CHÍ MINH</h3>
                    <p>HCM - 13 Cao Thắng<br/>Hotline: 024 7106 8368<br/>Địa chỉ: 13 Cao Thắng, Phường 2, Quận 3, Thành
                        Phố Hồ Chí Minh</p>
                    <p>HCM - 224 Điện Biên Phủ<br/>Hotline: 024 7106 8368<br/>Địa chỉ: Tầng 4 & Tầng 6, 224 Điện Biên
                        Phủ, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</p>
                    <p>HCM - 677/6 Điện Biên Phủ<br/>Hotline: 024 7106 8368<br/>Địa chỉ: Tầng 4, Yoko Building 677/6,
                        Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
                <div className="footer-section">
                    <h3>HOTLINE</h3>
                    <p>Kiếu nại CEO: 0982 521 378<br/>Kiếu nại học tập: 0916 442 368<br/>Hợp tác truyền thông: 0934 146
                        016<br/>Hợp tác kinh doanh: 0961 123 988</p>
                    <p>Kiếu nại dịch vụ CSKH: 024 7106 8368<br/>Tư vấn khóa học:<br/>Ms. Khánh Ly 0352 433 233<br/>Ms.
                        Ngọc Linh 0344 463 698<br/>CSKH: cskh@mcivietnam.com<br/>Chính sách bảo mật</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
