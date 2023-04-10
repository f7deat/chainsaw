const StatisticsHome: React.FC = () => {
    return (
        <div className="bg-cyan-700 flex flex-wrap justify-center items-center gap-40 text-white font-bold uppercase p-10 md:p-20 text-center">
            <div>
                <div className="text-6xl mb-2">100.000+</div>
                <div className="text-2xl">Học viên</div>
            </div>
            <div>
                <div className="text-6xl">5.000+</div>
                <div className="text-2xl">Bài giảng</div>
            </div>
            <div>
                <div className="text-6xl">200.000+</div>
                <div className="text-2xl">Bài ôn tập</div>
            </div>
            <div>
                <div className="text-6xl">4.000+</div>
                <div className="text-2xl">Đề luyện thi</div>
            </div>
        </div>
    )
}

export default StatisticsHome