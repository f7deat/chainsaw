import Link from "next/link";

const WhatIs: React.FC = () => {

    const Item = (image: string, title: string, isPrimary: boolean) => (
        <div className="relative flex justify-center">
            <picture className="bg-slate-900 block rounded-xl w-full h-full md:w-[600px] md:h-[400px]">
                <img src={image} width={600} height={400} alt="Intructor" loading="lazy" className="rounded-xl opacity-75" />
            </picture>
            <div className="absolute h-full w-full flex items-center justify-center flex-col">
                <div className="md:text-3xl text-sm font-medium text-white md:mb-6 mb-3 uppercase">{title}</div>
                {
                    !isPrimary && (<Link href="/tai-khoan/dang-ky" className="text-white transition duration-500 hover:bg-sky-400 text-sm md:text-xl font-medium md:px-10 px-4 md:py-3 py-1 rounded-full border border-white">Bắt đầu ngay</Link>)
                }
                {
                    isPrimary && (
                        <Link href="/tai-khoan/dang-ky" className="text-white transition duration-500 bg-sky-400 hover:bg-transparent md:text-xl text-sm font-medium md:px-10 px-4 md:py-3 py-1 rounded-full border border-white" style={{
                            opacity: 0.9
                        }}>Bắt đầu học</Link>
                    )
                }
            </div>
        </div>
    )

    return (
        <div className="mb-4" data-aos='fade-up'>
            <div className="text-4xl font-medium text-center mb-4">
                <span className="text-blue-500">E-Learning</span> là?
            </div>
            <div className="text-center mx-auto text-slate-500 md:text-lg md:mb-16 mb-8 text-sm" style={{
                maxWidth: 1100
            }}>
                E-Learning của GetVisa là một nền tảng cho phép các nhà giáo dục tạo các lớp học trực tuyến nhờ đó họ có thể lưu trữ tài liệu khóa học trực tuyến;
                quản lý bài tập, câu đố và bài kiểm tra;
                theo dõi kết quả học tập;
                kết quả chấm điểm và cung cấp cho học sinh cũng như phụ huynh thông tin phản hồi tất cả ở một nơi.
            </div>
            <div className="grid grid-cols-2 gap-4">
                {Item("https://i.imgur.com/qYUP6Ve.png", "Giáo viên, Phụ Huynh", false)}
                {Item("https://i.imgur.com/OvSjm38.png", "Học sinh", true)}
            </div>
        </div>
    )
}

export default WhatIs;