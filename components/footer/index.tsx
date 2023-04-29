import { FacebookOutlined, GithubOutlined, GoogleOutlined, TwitterOutlined } from "@ant-design/icons"
import { Divider } from "antd"

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto">

                <div className="md:py-20 py-4 container mx-auto">
                    <div className="md:flex gap-4">
                        <div className="md:w-1/2">
                            <div className="mb-4 text-2xl uppercase font-medium">Chăm sóc khách hàng</div>
                            <div className="md:flex gap-4">
                                <div className="md:w-1/2">
                                    <div className="mb-2 font-bold">Trung tâm trợ giúp</div>
                                    <div className="mb-2">Email: <span className="text-gray-800">hotro@getvisa.vn</span></div>
                                    <div className="mb-2">Đường dây nóng: <span className="text-gray-800">0762 55 9696</span></div>
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
                                <div className="mb-4 text-2xl uppercase font-medium">Giới thiệu</div>
                                <div className="mb-2">Giới thiêu chương trình</div>
                                <div className="mb-2">Liên hệ với chúng tôi</div>
                                <div className="mb-2">Sơ đồ trang web</div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mb-4 text-2xl uppercase font-medium">Sân chơi</div>
                                <div className="mb-2">Bảng tin trường học</div>
                                <div className="mb-2">Thử tài đố vui</div>
                                <div className="mb-2">Hỏi và chữa bài</div>
                            </div>
                        </div>
                    </div>

                    <Divider />

                </div>

            </div>
                <div className="border-b border-slate-600"></div>
                <div className="py-8 flex items-center justify-between container mx-auto">
                    <div className="">
                        © All rights reserved. Made by <a href="#" className="font-bold">GETVISA</a>
                    </div>
                    <div className="flex gap-6 items-center justify-end">
                        <a href="/gioi-thieu">Giới thiệu</a>
                        <a href="#">Blog</a>
                        <a href="#">Hỗ trợ</a>
                        <a href="#">Liên hệ</a>
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <GoogleOutlined />
                        <GithubOutlined />
                    </div>
                </div>
        </footer>
    )
}

export default Footer