
const JoinWithUs: React.FC = () => {
    return (
        <div>
            <div className="four-step flex mb-20">
                <div className="w-1/4 step one">
                    <div className="header">
                        <div className="title">Bước 1</div>
                        <span className="glyphicon glyphicon-triangle-bottom" />
                    </div>
                    <div className="content">
                        <i className="fas fa-search" />
                        <span>CHỌN KHÓA HỌC</span>
                    </div>
                </div>
                <div className="w-1/4 step two">
                    <div className="header bg-red-500">
                        <div className="title">Bước 2</div>
                        <span className="glyphicon glyphicon-triangle-bottom" />
                        <span className="glyphicon glyphicon-triangle-right" />
                    </div>
                    <div className="content">
                        <i className="fas fa-book-reader" />
                        <span>HỌC THỬ MIỄN PHÍ</span>
                    </div>
                </div>
                <div className="w-1/4 step three">
                    <div className="header bg-cyan-500">
                        <div className="title">Bước 3</div>
                        <span className="glyphicon glyphicon-triangle-bottom" />
                        <span className="glyphicon glyphicon-triangle-right" />
                    </div>
                    <div className="content">
                        <i className="fas fa-wallet" />
                        <span>NỘP HỌC PHÍ</span>
                    </div>
                </div>
                <div className="w-1/4 step four">
                    <div className="header bg-blue-500">
                        <div className="title">Bước 4</div>
                        <span className="glyphicon glyphicon-triangle-bottom" />
                        <span className="glyphicon glyphicon-triangle-right" />
                    </div>
                    <div className="content">
                        <i className="fas fa-user-graduate" />
                        <span>VÀO HỌC</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JoinWithUs