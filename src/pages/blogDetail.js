import React,  { useState }  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/blogDetail.css'
import BlogImg from '../images/blog.jpg';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";


function PageDetail() {
    // Khai báo state để quản lý trạng thái mở/đóng nội dung
    const [isOpen, setIsOpen] = useState(false);

    // Hàm để thay đổi trạng thái khi người dùng nhấn vào nút
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Header/>
            <div className="container mt-5 search-btn">
                <div className="input-group">
            <span className="input-group-text" id="search-icon">
                <i className="bi bi-search"></i>
            </span>
                    <input type="text" className="form-control" placeholder="Tìm kiếm bài viết" aria-label="Search"
                           aria-describedby="search-icon"/>
                </div>
            </div>
            <div className="categories d-flex justify-content-center align-items-center mb-3">
                {[
                    "Chia sẻ kinh nghiệm",
                    "Kiến thức chuyên môn",
                    "MCI Careers",
                    "Kinh nghiệm thực chiến",
                    "Lịch khai giảng",
                ].map((category, idx, arr) => (
                    <React.Fragment key={idx}>
                        <span className="category-link">{category}</span>
                        {/* Chèn gạch nhỏ, trừ phần tử cuối */}
                        {idx < arr.length - 1 && <span className="divider">|</span>}
                    </React.Fragment>
                ))}
            </div>
            <div className="breadcrumb-container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"> <Link to="/" className="link-nav">Trang chủ</Link></li>
                        <li className="breadcrumb-item"> <Link to="/blog" className="link-nav">Blog</Link></li>
                        <li className="breadcrumb-item"><a href="#">Chia sẻ kinh nghiệm</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Bạn Nguyễn Quang Hưng - Học Data là một
                            quá trình và mình đã vượt qua nó như nào
                        </li>
                    </ol>
                </nav>
            </div>
            <article>
                <section className="content">
                    <h2 className="text-left mb-4">Bạn Nguyễn Quang Hưng - Học DATA là một quá trình và mình đã vượt qua
                        nó như nào</h2>
                    <p>Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học
                        và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ
                        thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                        ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công
                        nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
                        đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội,
                        tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà
                        chỉ...</p>
                    <div className="collapsible">
                        <button className="collapsible-button" onClick={toggleCollapse}>
                            Nội dung bài viết
                        </button>
                        <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
                            <ul>
                                <li>1. Ứng dụng công nghệ thông tin trong doanh nghiệp là gì?</li>
                                <li>2. Thực trạng ứng dụng công nghệ tại các doanh nghiệp Việt</li>
                                <li>3. Doanh nghiệp có thể làm gì khi ứng dụng công nghệ trong quản lý?</li>
                                <li>4. ERP - Phần mềm quản lý doanh nghiệp tối ưu hiệu quả</li>
                            </ul>
                        </div>
                    </div>
                    <h3>1. Ứng dụng công nghệ thông tin trong doanh nghiệp là
                        gì?</h3>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <h3>2. Thực trạng ứng dụng công nghệ tại các doanh nghiệp
                        Việt</h3>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ....</p>
                    <img src={BlogImg} alt="img"/>
                    <h3>3. Doanh nghiệp có thể làm gì khi ứng dụng công nghệ
                        trong quản lý?</h3>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>

                    <h3>4. ERP - Phần mềm quản lý doanh nghiệp tối ưu hiệu quả
                    </h3>
                    <p> Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                        những logic
                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào
                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                        không đủ
                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                </section>

                <aside>
                    <div className="other-articles">
                        <h2>Bài viết khác</h2>
                        <div className="other-article-item">
                            <img src="./assets/img/bai1.png" alt="Bài viết 1"/>
                            <p>Top 5 khả năng của ERP uy tín nhất năm 2023</p>
                        </div>
                    </div>
                    <div className="courses">
                        <h2>Các khóa học</h2>
                        <ul className="course-list">
                            <li>Phân tích dữ liệu</li>
                            <li>Kĩ sư dữ liệu</li>
                            <li>Khoa học dữ liệu</li>
                            <li>Lập trình ứng dụng</li>
                        </ul>
                    </div>
                    <div className="solution-art">
                        <h2>ĐĂNG KÝ TƯ VẤN<br/>KHÓA HỌC</h2>
                        <form className="solution-art-item">
                            <div className="form-group">
                                <label htmlFor="name">Họ và tên</label>
                                <input type="text" id="name" name="name" placeholder="Nhập họ và tên" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Nhập email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="course">Khóa học mà bạn muốn tư vấn</label>
                                <select id="course" name="course" required>
                                    <option value="" disabled selected>Chọn khóa học</option>
                                    <option value="frontend">Front-end Development</option>
                                    <option value="backend">Back-end Development</option>
                                    <option value="fullstack">Full-stack Development</option>
                                    <option value="datascience">Data Science</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-button">ĐĂNG KÝ TƯ VẤN</button>
                        </form>
                    </div>
                </aside>
            </article>
            <div className="other-content">
                <section className="related-articles">
                    <h2>Bài viết khác</h2>
                    <div className="d-flex flex-row justify-content-between gap-3">
                    {[...Array(3)].map((_, idx) => (
                            <Card key={idx} style={{width: "100%"}} className="overflow-hidden">
                                {/* Ảnh chiếm toàn bộ khung */}
                                <div className="responsive-image-container">
                                    <Card.Img
                                        src="https://via.placeholder.com/300x200"
                                        className="w-100"
                                        alt="Card Image"
                                    />
                                </div>
                                {/* Nội dung dọc */}
                                <Card.Body className="d-flex flex-column p-3">
                                    <Card.Title className="post-title mb-2">
                                        Bạn Nguyễn Quang Hưng - Học DATA 1A và quá trình...
                                    </Card.Title>
                                    <Card.Text className="post-text text-muted">
                                        Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                                        những logic
                                        Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                        học vào
                                        các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                        không đủ
                                        điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                    </Card.Text>
                                    <Button variant="link" className="read-more align-self-start mt-auto ">
                                        Xem thêm
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default PageDetail;
