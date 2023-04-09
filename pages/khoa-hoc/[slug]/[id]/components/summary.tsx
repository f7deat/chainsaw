const CourseSummary: React.FC = () => {
    return (
        <div className="bg-white shadow p-2 rounded-lg md:-mt-20">
            <div className="h-52 bg-gray-500 rounded-lg mb-4"></div>
            <div className="text-right">
                <div className="text-xl text-gray-500 mb-2"><s>1.500.000 đ</s></div>
                <div className="flex gap-2 justify-end font-bold mb-1">
                    <b>Chỉ còn</b>
                    <span className="text-4xl">1.200.000</span>
                </div>
                <div className="text-red-400 font-bold text-sm">Chỉ còn nốt 2 ngày</div>
            </div>
        </div>
    )
}

export default CourseSummary