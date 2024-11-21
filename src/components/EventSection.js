import React from 'react';
import '../styles/eventSection.css'
import { Row, Col, Card, Button, Pagination } from "react-bootstrap";

function EventSection() {
    return (
        <div className="eventSection">
        <section className="py-5 ">
            <Row>
                {/* Cột Sự kiện */}
                <Col md={6} className="events-column">
                    <h4 className="mb-3">Sự kiện của MCI</h4>
                    <div className="events-list">
                        {[...Array(3)].map((_, idx) => (
                            <Card key={idx} className="mb-3 bg-orange">
                                <Card.Body></Card.Body>
                            </Card>
                        ))}
                    </div>
                    <Pagination className="justify-content-center">
                        <Pagination.Prev />
                        {[...Array(5)].map((_, idx) => (
                            <Pagination.Item key={idx} active={idx === 2}>
                                {idx + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next />
                    </Pagination>
                </Col>

                {/* Cột Bài viết */}
                <Col md={6} className="posts-column">
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Tìm kiếm bài viết"
                        />
                        <span className="search-icon">
    <i className="bi bi-search"></i>
  </span>
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

                    <div className="posts-list">
                        {[...Array(5)].map((_, idx) => (
                            <Card key={idx} className="mb-3 p-3" style={{display: "flex", alignItems: "center"}}>
                                <Row className="align-items-center">
                                    {/* Ảnh bên trái */}
                                    <Col xs="auto">
                                        <div className="responsive-image-container">
                                            <Card.Img
                                                src="https://via.placeholder.com/150"
                                                className="responsive-image"
                                                alt="Card Image"
                                            />
                                        </div>
                                    </Col>
                                    {/* Nội dung bên phải */}
                                    <Col>
                                        <Card.Body className="p-0">
                                            <Card.Title className="post-title mb-2">
                                                Bạn Nguyễn Quang Hưng - Học DATA 1A và quá trình...
                                            </Card.Title>
                                            <Card.Text className="post-text mb-2">
                                                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú
                                                vị...
                                            </Card.Text>
                                            <Button variant="link" className="read-more">
                                                Xem thêm
                                            </Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </section>
        </div>
    );
}

export default EventSection;
