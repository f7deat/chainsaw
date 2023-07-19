import Link from "next/link";
import Title from "../title";
import { LoadingOutlined, SyncOutlined, UsergroupAddOutlined, WifiOutlined } from "@ant-design/icons";

type TeachersProps = {
    data: API.User[]
}

const Teachers: React.FC<TeachersProps> = (props) => {
    return (
        <div className="md:mb-32 mb-4">
            <div className="md:flex gap-10 md:mb-40 mb-8 items-center" data-aos="fade-up">
                <div className="md:w-1/2">
                    <div className="relative" style={{
                        maxWidth: 590
                    }}>
                        <picture>
                            <img src="https://i.imgur.com/d1LiVe5.png" loading="lazy" alt="IMG" width={658} />
                        </picture>
                        <div className="absolute shadow rounded-lg bg-white md:left-10 top-10 w-full">
                            <div className="bg-gray-300 w-full rounded-t-lg py-1 flex gap-2 px-3">
                                <div className="h-4 w-4 rounded-full bg-red-400"></div>
                                <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                                <div className="h-4 w-4 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-10">
                                <div className="flex justify-between mb-6 md:gap-10">
                                    <div className="relative px-4">
                                        <picture>
                                            <img src="https://i.imgur.com/krjaoun.png" loading="lazy" alt="Le" className="rounded-xl" />
                                        </picture>
                                    </div>
                                    <div className="border-l"></div>
                                    <div className="relative px-4">
                                        <picture>
                                            <img src="https://i.imgur.com/WVwrpTM.png" loading="lazy" alt="Le" className="rounded-xl" />
                                        </picture>
                                        <div className="absolute bottom-2 bg-gray-500 rounded-lg md:px-2 text-xs md:text-sm text-white md:left-6">
                                            <WifiOutlined /> Patricia Mendoza
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="w-72">
                                        <div className="font-medium md:text-lg text-gray-600">Học trực tuyến</div>
                                        <div className="text-gray-400 text-sm md:text-base">Trực tiếp giảng dạy trực tuyến</div>
                                    </div>
                                    <button type="button" className="text-white px-6 py-2 rounded-full md:text-lg relative font-medium" style={{
                                        background: 'linear-gradient(157deg, #F55454 0%, #E5422B 100%)'
                                    }}>
                                        Tham gia học
                                        <span className="w-full h-4 absolute" style={{
                                            filter: 'blur(25.42075538635254px)',
                                            background: '#EB493A',
                                            left: 0,
                                            bottom: -10
                                        }}></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-20 left-2">
                            <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center">
                                <div className="bg-white h-14 w-14 flex items-center justify-center rounded-full">
                                    <UsergroupAddOutlined className="text-3xl text-blue-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-center">
                        <div style={{
                            maxWidth: 540
                        }}>
                            <div className="md:text-5xl text-xl font-medium text-blue-900 mb-3">Đội ngũ</div>
                            <div className="md:text-5xl text-xl font-medium text-blue-500 mb-6">Gia sư - Giảng viên</div>
                            <div className="text-gray-500 md:text-xl">
                                Đội ngũ chuyên môn mạnh, tâm huyết, trách nhiệm và chuyên nghiệp là điều kiện đảm bảo cho chất lượng các hoạt động giáo dục và đào tạo của nhà Trường, đảm bảo cho người học của E-Learning đáp ứng được điều kiện đào tạo chất lượng cao, mang tính toàn cầu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-4">
                <Link href="/tai-khoan/giao-vien" className="border rounded-full border-blue-500 text-blue-500 py-3 px-6 hover:bg-blue-500 hover:text-white md:text-xl">
                    Tìm hiểu thêm
                </Link>
            </div>
        </div>
    )
}

export default Teachers;