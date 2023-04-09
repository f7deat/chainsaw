import { Divider } from "antd"

const Footer: React.FC = () => {
    return (
        <footer>
            <div style={{
                minHeight: 450,
                backgroundImage: 'url(https://static.xx.vuihoc.vn/theme/vuihoc/imgs/footer_img_svg.png)'
            }} className="bg-no-repeat bg-bottom">

                <div className="md:py-20 py-4 container mx-auto">
                    <div className="md:flex gap-4">
                        <div className="md:w-1/2">
                            <div className="mb-4 text-2xl text-blue-800 uppercase font-medium">Chăm sóc khách hàng</div>
                            <div className="md:flex gap-4">
                                <div className="md:w-1/2">
                                    <div className="mb-2 font-bold">Trung tâm trợ giúp</div>
                                    <div className="text-gray-500 mb-2">Email: <span className="text-gray-800">hotro@defzone.net</span></div>
                                    <div className="text-gray-500">Đường dây nóng: <span className="text-gray-800">0762 55 9696</span></div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="mb-2">Hình thức thanh toán</div>
                                    <div className="mb-2">Trả hàng & hoàn tiền</div>
                                    <div className="mb-2">Chính sách bảo mật</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:flex gap-4">
                            <div className="md:w-1/2">
                                <div className="mb-4 text-2xl text-blue-800 uppercase font-medium">Giới thiệu</div>
                                <div className="mb-2">Giới thiêu chương trình</div>
                                <div className="mb-2">Liên hệ với chúng tôi</div>
                                <div className="mb-2">Sơ đồ trang web</div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mb-4 text-2xl text-blue-800 uppercase font-medium">Sân chơi</div>
                                <div className="mb-2">Bảng tin trường học</div>
                                <div className="mb-2">Thử tài đố vui</div>
                                <div className="mb-2">Hỏi và chữa bài</div>
                            </div>
                        </div>
                    </div>

                    <Divider />

                </div>

            </div>
        </footer>
    )
}

export default Footer