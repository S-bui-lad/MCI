import React from 'react';
import '../styles/trainingPrograms.css';
import training1 from '../images/training1.png' ;
import training2 from '../images/training2.png' ;
import training3 from '../images/training3.png' ;
import training4 from '../images/training4.png' ;

function TrainingPrograms() {
    return (
        <section className="py-5 bg-light">
            <div className="training-container">
                <h2>Chương trình đào tạo của MCI</h2>
                <div className="training-grid">
                    <div className="training-item">
                        <img src={training1} alt="Phân tích dữ liệu"/>
                        <h3>Phân tích dữ liệu</h3>
                        <p>Phân tích dữ liệu (Data Analytics), là sự lựa chọn cho những ai đam mê thu thập, khai thác và
                            xử lý các bộ dữ liệu để đưa ra quan sát...</p>
                        <a href="#" className="read-more">Xem thêm</a>
                    </div>
                    <div className="training-item">
                        <img src={training2} alt="Khoa học dữ liệu"/>
                        <h3>Khoa học dữ liệu</h3>
                        <p>Khoa học dữ liệu (Data Science) là lĩnh vực nghiên cứu kết hợp chuyên môn lập trình và kiến
                            thức toán học, thống kê để xử lý khối lượng dữ liệu...</p>
                        <a href="#" className="read-more">Xem thêm</a>
                    </div>
                    <div className="training-item">
                        <img src={training3} alt="Kỹ sư dữ liệu"/>
                        <h3>Kỹ sư dữ liệu</h3>
                        <p>Kỹ sư dữ liệu (Data Engineer), là một trong những vị trí quan trọng trong lĩnh vực khoa học
                            dữ liệu, nơi người nắm vị trí then chốt xây dựng, kiểm tra...</p>
                        <a href="#" className="read-more">Xem thêm</a>
                    </div>
                    <div className="training-item">
                        <img src={training4} alt="Lập trình ứng dụng"/>
                        <h3>Lập trình ứng dụng</h3>
                        <p>Lập trình ứng dụng, top ngành được săn đón nhất hiện nay. Sử dụng các ngôn ngữ lập trình để
                            tạo ra các ứng dụng có thể hoạt động trên nền tảng...</p>
                        <a href="#" className="read-more">Xem thêm</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrainingPrograms;
