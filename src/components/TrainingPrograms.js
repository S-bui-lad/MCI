import React from 'react';

function TrainingPrograms() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Chương trình đào tạo</h2>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="p-4 bg-danger text-white text-center rounded-circle">Phân tích dữ liệu</div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="p-4 bg-danger text-white text-center rounded-circle">Khoa học dữ liệu</div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="p-4 bg-danger text-white text-center rounded-circle">Kĩ sư dữ liệu</div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="p-4 bg-danger text-white text-center rounded-circle">Lập trình ứng dụng</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrainingPrograms;
