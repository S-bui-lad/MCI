import React from 'react';
import '../styles/header.css';
import logo from '../images/new-logo.png';
import bannerw from '../images/banner.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className="py-3 header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand img-fluid " href="/">
                            <img src={logo} alt="Logo" style={{
                                width: '200px',
                                height: '90px',
                                filter: 'invert(1)'
                            }} />
                        </a>
                        {/* Nút toggle cho màn hình nhỏ */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Menu collapsible */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto"> {/* Thêm `me-auto` để đẩy menu sang trái */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="khoahocDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Khóa học
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="khoahocDropdown">
                                        <li><a className="dropdown-item" href="#">Chương trình học theo từng môn</a></li>
                                        <li><a className="dropdown-item" href="#">Chương trình học theo lộ trình</a></li>
                                        <li><a className="dropdown-item" href="#">Chương trình học chuyên ngành</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="lichdaotaoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Lịch đào tạo
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="lichdaotaoDropdown">
                                        <li><a className="dropdown-item" href="#">Lịch đào tạo</a></li>
                                        <li><a className="dropdown-item" href="#">Giảng viên</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="doanhnghiepDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Doanh nghiệp
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="doanhnghiepDropdown">
                                        <li><a className="dropdown-item" href="#">Đào tạo doanh nghiệp</a></li>
                                        <li><a className="dropdown-item" href="#">Doanh nghiệp tiêu biểu</a></li>
                                        <li><a className="dropdown-item" href="#">Giải pháp doanh nghiệp</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link to="/blog" className="link-nav">Blog</Link>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="vechungtoiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Về chúng tôi
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="vechungtoiDropdown">
                                        <li><a className="dropdown-item" href="#">Học viện công nghệ MCI</a></li>
                                        <li><a className="dropdown-item" href="#">Việc làm tại MCI</a></li>
                                        <li><a className="dropdown-item" href="#">Liên hệ</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="right-section d-flex align-items-center">
                            {/* Login Button - ẩn trên màn hình nhỏ */}
                            <button className="btn btn-primary d-none d-sm-inline-block me-3">Đăng Nhập</button>
                            {/* Login Icon - chỉ hiển thị trên màn hình nhỏ */}
                            <div className="login-icon d-inline-block d-sm-none me-3">
                                <i className="bi bi-person-circle" style={{ color: 'black', fontSize: '24px' }}></i>
                            </div>
                            {/* Search Icon */}
                            <div className="search-icon">
                                <i className="bi bi-search" style={{ color: 'black', fontSize: '20px' }}></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
}

export default Header;
