import React from 'react';

function MemberSection() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Thành viên MCI</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="p-4 bg-secondary text-white">Thành viên 1</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="p-4 bg-secondary text-white">Thành viên 2</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberSection;
