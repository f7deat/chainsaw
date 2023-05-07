import { FacebookOutlined, GithubOutlined, GoogleOutlined, TwitterOutlined } from "@ant-design/icons"

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white z-20 ">
            <div className="container mx-auto">
                <div className="p-8">
                    <div className="md:flex gap-4">
                        <div className="md:w-2/3">
                            <div className="mb-4 text-xl uppercase font-medium">Chăm sóc khách hàng</div>
                            <div className="md:flex gap-4">
                                <div className="md:w-1/2">
                                    <div className="mb-2 font-bold">Trung tâm trợ giúp</div>
                                    <div className="mb-2">Email: <span>hotro@getvisa.vn</span></div>
                                    <div className="mb-2">Đường dây nóng: <span>0762 55 9696</span></div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="mb-2">Hình thức thanh toán</div>
                                    <div className="mb-2">Trả hàng & hoàn tiền</div>
                                    <div className="mb-2">Chính sách bảo mật</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 md:flex gap-4">
                            <div className="md:w-1/2">
                                <div className="mb-4 text-xl uppercase font-medium">Giới thiệu</div>
                                <div className="mb-2">Giới thiêu chương trình</div>
                                <div className="mb-2">Liên hệ với chúng tôi</div>
                                <div className="mb-2">Sơ đồ trang web</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="border-b border-slate-600"></div>
            <div className="pt-4 px-4 flex md:flex-row flex-col items-center justify-between container mx-auto">
                <div className="mb-4">
                    © All rights reserved. Made by <a href="#" className="font-bold">GETVISA</a>
                </div>
                <div className="flex md:flex-row flex-col gap-6 items-center justify-end mb-4">
                    <div className="flex gap-6">
                        <a href="/gioi-thieu">Giới thiệu</a>
                        <a href="#">Blog</a>
                        <a href="#">Hỗ trợ</a>
                        <a href="#">Liên hệ</a>
                    </div>
                    <div className="flex gap-6 items-center">
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <GoogleOutlined />
                        <GithubOutlined />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer