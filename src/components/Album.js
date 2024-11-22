import React from 'react';
import '../styles/album.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import album1 from '../images/album1.png';
import album2 from '../images/album2.png';
import album3 from '../images/album3.png';
import album4 from '../images/album4.png';

function Album() {
    return (
        <div className="album">
        <Container className="py-5">
            <h2 className="text-center mb-4 album-content">Thư viện ảnh</h2>
            <div className="album-show">
            <Row>
                {/* Cột 1 */}
                <Col md={3} sm={6} className="mb-4">
                    <Card className="image-card">
                        <Card.Img
                            variant="top"
                            src={album1}
                            alt="Image 1"
                        />
                    </Card>
                </Col>

                {/* Cột 2 */}
                <Col md={3} sm={6} className="mb-4">
                    <Card className="image-card">
                        <Card.Img
                            variant="top"
                            src={album2}
                            alt="Image 2"
                        />
                    </Card>
                </Col>

                {/* Cột 3 */}
                <Col md={3} sm={6} className="mb-4">
                    <Card className="image-card">
                        <Card.Img
                            variant="top"
                            src={album3}
                            alt="Image 3"
                        />
                    </Card>
                </Col>

                {/* Cột 4 */}
                <Col md={3} sm={6} className="mb-4">
                    <Card className="image-card">
                        <Card.Img
                            variant="top"
                            src={album4}
                            alt="Image 4"
                        />
                    </Card>
                </Col>
            </Row>
            </div>
        </Container>
        </div>
    );
}

export default Album;
