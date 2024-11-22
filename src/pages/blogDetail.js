import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/blogDetail.css'
import BlogImg from '../images/blog.jpg';
import {Card} from "react-bootstrap";


function pageDetail() {
    return (
        <div>
            <Header/>
            <article>
                <section className="content">
                    <h1 className="text-left mb-4">Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã
                        vượt qua nó như nào</h1>
                    <p>Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
                    <div className="collapsible">
                        <button className="collapsible-button">Nội dung</button>
                        <div className="collapsible-content">
                            <ul>
                                <li>1. Ứng dụng công nghệ thông tin trong doanh
                                    nghiệp là gì?
                                </li>
                                <li>2. Thực trạng ứng dụng công nghệ tại các
                                    doanh nghiệp Việt
                                </li>
                                <li>3. Doanh nghiệp có thể làm gì khi ứng dụng
                                    công nghệ trong quản lý?
                                </li>
                                <li>4. ERP - Phần mềm quản lý doanh nghiệp tối
                                    ưu hiệu quả
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3>1. Ứng dụng công nghệ thông tin trong doanh nghiệp là
                        gì?</h3>
                    <p> Ứng dụng công nghệthông tin trong các lĩnh vực khác nhau
                        là việc sử dụng công nghệ hiện đại để cải thiện chất
                        lượng sản phẩm, năng suất và hiệu quả công việc.</p>
                    <p> Trong doanh nghiệp, ứng dụng công nghệ thông tin là việc
                        sử dụng công nghệ để hỗ trợ các hoạt động sản xuất, kinh
                        doanh và quản lý. Quá trình này giúp tận dụng nguồn lực
                        và tối ưu hóa hoạt động để đạt lợi nhuận cao nhất.</p>

                    <h3>2. Thực trạng ứng dụng công nghệ tại các doanh nghiệp
                        Việt</h3>
                    <p> Theo kết quả khảo sát của Cục phát triển doanh nghiệp,
                        Bộ Kế hoạch và Đầu tư, phần lớn doanh nghiệp nhận thức
                        được sự cần thiết của việc chuyển đổi số, tuy nhiên, họ
                        chưa đạt được mục tiêu mong đợi. Các doanh nghiệp chủ
                        yếu đang ở giai đoạn số hóa hoặc đã từng ứng dụng công
                        nghệ và phần mềm mới, nhưng chưa đạt được mục tiêu đề
                        ra, dẫn đến việc ngừng sử dụng hoặc gặp khó khăn và
                        không thuận lợi. Cụ thể:</p>
                    <p> 48.8% doanh nghiệp đã từng sử dụng một số giải pháp
                        chuyển đổi số nhưng hiện không sử dụng nữa do giải pháp
                        chưa phù hợp hoặc doanh nghiệp chỉ áp dụng để đáp ứng
                        nhu cầu ngắn hạn trong bối cảnh dịch Covid-19 và không
                        còn nhu cầu sử dụng hiện tại. Lý do khác cho tình trạng
                        này là doanh nghiệp chưa xác định được mục tiêu và chiến
                        lược chuyển đổi số chính xác, cũng như thiếu nhân sự đủ
                        lượng và chất lượng để hỗ trợ chuyển đổi số. Điều này rõ
                        ràng phản ánh qua chỉ có 6.2% đã hoàn thành việc xác
                        định mục tiêu chuyển đổi số và chỉ 7.6% đã từng bước xây
                        dựng kế hoạch ngắn và dài hạn để thực hiện chuyển đổi
                        số.</p>
                    <p> 35.3% doanh nghiệp đã số hóa dữ liệu và quy trình (chủ
                        yếu bằng cách chuyển đổi các dữ liệu, văn bản và giấy tờ
                        từ hình thức vật lý sang hình thức điện tử lưu trữ trên
                        hệ thống). Đây là hoạt động quan trọng nhằm tiến tới
                        chuyển đổi số một cách rộng rãi và đồng bộ hơn.</p>
                    <p> Chỉ có một tỉ lệ nhỏ các doanh nghiệp (2.2%) đã sử dụng
                        thành thạo công nghệ và phần mềm quản lý để phân tích dữ
                        liệu và tự động hóa việc đưa ra quyết định trong quá
                        trình sản xuất kinh doanh, mặc dù một số vẫn gặp khó
                        khăn trong quá trình sử dụng công nghệ này.</p>
                    <img src={BlogImg} alt="img"/>
                    <h3>3. Doanh nghiệp có thể làm gì khi ứng dụng công nghệ
                        trong quản lý?</h3>
                    <p> Trên thực tế, việc ápdụng công nghệ thông tin trong quản
                        lý doanh nghiệp hiện nay vẫn còn hạn chế. Có nhiều công
                        cụ giúp tăng hiệu quả vận hành và quản trị, trong đó có
                        phần mềm quản lý doanh ghiệp.</p>
                    <p> Với một phần mềm quản lý hiện đại, nhà quản trị có
                        thể:</p>
                    <p> Tối ưu hoá thời gian quản lý công việc kinh doanh, nhân
                        viên, các bộ phận, phòng ban. Phần mềm giúp nhà quản trị
                        loại bỏ công đoạn không cần thiết, xử lý số liệu phức
                        tạp và tạo báo cáo nhanh chóng và hiệu quả.</p>
                    <p> Xử lý các công việc trong quá trình vận hành doanh
                        nghiệp một cách hiệu quả hơn để đảm bảo năng suất làm
                        việc. Nó hỗ trợ kiểm soát thời gian, hiệu suất và tiến
                        độ làm việc cùng với hệ thống thông tin chi tiết và dễ
                        dàng.</p>
                    <p> Nâng cao chất lượng và xây dựng tác phong làm việc
                        chuyên nghiệp và linh hoạt. Ngay cả khi không có mặt tại
                        công ty, bạn vẫn có thể giao nhiệm vụ và họp trực tuyến
                        với đối tác và nhân viên trên phần mềm.</p>

                    <h3>4. ERP - Phần mềm quản lý doanh nghiệp tối ưu hiệu quả
                    </h3>
                    <p> Ứng dụng công nghệ thông tin trong quản lý doanh nghiệp
                        giúp tổ chức giải quyết nhiều bài toán khó trong quá
                        trình kinh doanh hiện nay. Trong đó, sử dụng hệ thống
                        quản trị nguồn lực doanh nghiệp (ERP) là một phần mềm
                        quan trọng.</p>
                </section>

                <aside>
                    <div className="other-articles">
                        <h2>Bài viết khác</h2>
                        <div className="other-article-item">
                            <img src="./assets/img/bai1.png" alt="Bài viết 1"/>
                            <p>Top 5 khả năng của ERP uy tín nhất năm 2023</p>
                        </div>
                        <div className="other-article-item">
                            <img src="./assets/img/bai2.png" alt="Bài viết 2"/>
                            <p>Top 10 các phần mềm quản lý doanh nghiệp ERP phổ
                                biến nhất ở Việt Nam</p>
                        </div>
                        <div className="other-article-item">
                            <img src="./assets/img/bai3.png" alt="Bài viết 3"/>
                            <p>Các loại giải pháp phần mềm ERP tại Việt Nam hiện
                                nay</p>
                        </div>
                        <div className="other-article-item">
                            <img src="./assets/img/bai4.png" alt="Bài viết 4"/>
                            <p>Các phương pháp triển khai ERP: Chìa khóa thành
                                công cho dự án ERP</p>
                        </div>
                        <div className="other-article-item">
                            <img src="./assets/img/bai5.png" alt="Bài viết 5"/>
                            <p>Case study ứng dụng phần mềm ERP thành công trong
                                ngành Bán lẻ</p>
                        </div>
                    </div>

                    <div className="solution-art">
                        <h2>Giải pháp</h2>
                        <div className="solution-item-art">
                            <img src="./assets/img/content.png" alt="Giải pháp"/>
                            <p>Đào tạo sử dụng phần mềm quản trị doanh
                                nghiệp</p>
                        </div>
                    </div>
                </aside>
            </article>
            <div className="other-content">
            <section className="related-articles">
                <h2>Bài viết khác</h2>
                {[...Array(3)].map((_, idx) => (
                    <Card key={idx} className="mb-3 d-flex">
                        <Card.Body></Card.Body>
                    </Card>
                ))}
            </section>
            </div>
            <Footer/>
        </div>
    );
}

export default pageDetail;
