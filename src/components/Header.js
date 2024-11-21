import React from 'react';
import '../styles/header.css';
import logo from '../images/new-logo.png';
import bannerw from '../images/banner.jpg';

function Header() {
    return (
        <div>
        <header className=" py-3 header ">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand img-fluid" href="#"><img src={logo} alt="Mô tả hình ảnh" style={{
                        width: '200px',
                        height: '90px',
                        filter: 'invert(1) '
                    }}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-left">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle"
                                   href="#" id="contactDropdown" role="button">
                                    Khóa học
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item"
                                           href="#">Chương trình học theo từng môn</a></li>
                                    <li><a className="dropdown-item"
                                           href="#">Chương trình học theo lộ trình</a></li>
                                    <li><a className="dropdown-item"
                                           href="#">Chương trình học chuyên ngành và đầy đủ</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle"
                                   href="#" id="contactDropdown" role="button">
                                    Lịch đào tạo
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item"
                                           href="#">Lịch đào tạo</a></li>
                                    <li><a className="dropdown-item"
                                           href="#">Giảng viên</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle is-one-col"
                                   href="#" id="contactDropdown" role="button">
                                    Doanh nghiệp
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fa fa-graduation-cap"
                                           href="#"><i className="bi bi-mortarboard-fill"></i> Đào tạo doanh nghiệp</a>
                                    </li>
                                    <li><a className="dropdown-item"
                                           href="#"> <i className="bi bi-trophy-fill"></i> Doanh nghiệp tiêu biểu</a>
                                    </li>
                                    <li><a className="dropdown-item"
                                           href="#"><i className="bi bi-check-square"></i> Giải pháp doanh nghiệp</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle"
                                   href="#" id="contactDropdown" role="button">
                                    Về chúng tôi
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item"
                                           href="#"><i className="bi bi-people-fill"></i> Học viện công nghệ MCI</a>
                                    </li>
                                    <li><a className="dropdown-item"
                                           href="#"><i className="bi bi-stack"></i> Việc làm tại MCI</a></li>
                                    <li><a className="dropdown-item"
                                           href="#"><i className="bi bi-telephone"></i> Liên hệ</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="right-section d-flex align-items-center">
                        {/* Search Icon */}
                        <div className="search-icon me-3">
                            <i className="bi bi-search" style={{color: 'white', fontSize: '20px'}}></i>
                        </div>
                        {/* Login Button */}
                        <button className="btn btn-primary">Đăng Nhập</button>
                    </div>
                </div>
            </nav>
        </header>
    <div className="banner-container">
        <img src={bannerw} alt="Banner" className="banner-image"/>
    </div>
</div>
);
}

export default Header;
