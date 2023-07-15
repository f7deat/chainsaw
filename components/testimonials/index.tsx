import Link from "next/link"
import { ArrowRightOutlined, StarFilled } from "@ant-design/icons"

const Testimonial: React.FC = () => {
    return (
        <div className="md:mb-40 mb-4">
            <div className="md:flex md:gap-20">
                <div style={{
                    maxWidth: 607
                }}>
                    <div className="flex gap-4 items-center mb-4">
                        <div className="border-b-2 border-slate-300 w-20"></div>
                        <div className="uppercase text-slate-400">Đánh giá</div>
                    </div>
                    <div className="text-4xl font-medium text-blue-900 mb-6">Phụ Huynh Nói Gì?</div>
                    <div className="text-gray-500 text-lg mb-8">
                        <div className="mb-4 text-gray-500">
                            E-Learning đã nhận được hơn 100 nghìn xếp hạng tích cực từ người dùng của chúng tôi trên khắp thế giới.
                        </div>
                        <div className="mb-4 text-gray-500">
                            Một số học sinh và giáo viên đã được E-Learning giúp đỡ rất nhiều.
                        </div>
                        <div className="mb-4 text-gray-500">
                            Bạn cũng vậy? Xin vui lòng cho đánh giá của bạn
                        </div>
                    </div>
                    <div>
                        <Link href="/" className="flex">
                            <div className="pl-6 rounded-full border border-blue-500 border-r-0 flex items-center gap-6 text-blue-500">
                                Viết đánh giá của bạn
                                <span className="rounded-full h-12 flex items-center justify-center w-12 border-blue-500 border">
                                    <ArrowRightOutlined />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <div className="relative text-center">
                            <picture className="relative flex" style={{
                                maxWidth: 560
                            }}>
                                <img src="https://i.imgur.com/VRp1hwz.png" alt="IMG" loading="lazy" className="rounded-lg w-full" />
                                <Link href="/">
                                    <span style={{
                                        top: '40%',
                                        right: -24
                                    }} className="absolute h-14 w-14 shadow bg-white rounded-full flex items-center justify-center text-blue-500">
                                        <ArrowRightOutlined />
                                    </span>
                                </Link>
                            </picture>
                        </div>
                        <div className="absolute left-16 bg-white shadow rounded" style={{
                            maxWidth: 680,
                            bottom: -72
                        }}>
                            <div className="border-l-8 border-red-400 p-6 rounded">
                                <div className="border-l border-gray-300 px-4 text-gray-500 mb-8 text-lg">
                                    Thank you so much for your help. It is exactly what I have been looking for. You wont regret it. It really saves me time and effort. E-LEarning is exactly what our business has been lacking.
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="font-bold text-lg text-slate-500">
                                        Gloria Rose
                                    </div>
                                    <div>
                                        <div className="flex gap-1 text-yellow-500 mb-2">
                                            <StarFilled />
                                            <StarFilled />
                                            <StarFilled />
                                            <StarFilled />
                                            <StarFilled />
                                        </div>
                                        <div className="text-sm text-gray-400">2 tuần trước</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial