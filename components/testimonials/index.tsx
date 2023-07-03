import { Avatar } from "antd"
import { Title } from ".."
import { QuoteOutlined } from "../icons"

const Testimonial: React.FC = () => {
    return (
        <div className="md:mb-16 mb-4">
            <Title subTitle="Đánh giá" title="Phụ huynh nói gì về chúng tôi" />
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded" data-aos="fade-up">
                        <QuoteOutlined />
                        <p className="leading-relaxed mb-6">Con nhà mình không phải lười học nhưng tư duy hơi chậm. Ở nhà mình cố gắng dạy con học nhưng không có chuyên môn nên được 1 lúc là lại nóng lên quát con.
                            Tuần học đến bài phân số, kiến thức mới, cô giảng trên lớp hơi nhanh nên con chưa hiểu lắm, làm bài tập sai nhiều. Về nhà mình cho con nghe lại bài giảng của thầy Tám. Thầy có phương pháp dạy đơn giản nhưng dễ hiểu, lấy hình ảnh quen thuộc như quả cáo, pizza minh họa nên con mình dễ tưởng tượng lắm. Kỳ này cô chủ nhiệm cũng bảo con tiến bộ, hăng hái phát biểu hơn...</p>
                        <div className="inline-flex items-center">
                            <img src="https://cdn.getvisa.vn/files/0123.png" alt="I" width={40} height={40} className="rounded-full" loading="lazy" />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Phụ huynh Tùng Lâm</span>
                                <span className="text-gray-500 text-sm">Học sinh Đỗ Huy Quang</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded" data-aos="fade-up">
                        <QuoteOutlined />
                        <p className="leading-relaxed mb-6">Bạn bé nhà mình học ở GET được gần 2 tháng rồi. Trước bạn ấy ko tự giác học lắm, phải có mẹ kè kè ngồi bên kèm tí một. Nhưng giờ con rất thích học, cứ 7 rưỡi là tự giác ngồi vào bàn học.
                            Cô vẫn giảng các bài theo SGK nhưng có cách dạy khác; giống như trò chuyện, vui chơi với con. Ví dụ thay vì yêu cầu con “làm bài 1,2,3” thì cô bảo con cùng giải cứu gia đình Thỏ bằng cách trả lời đúng các câu hỏi của bà phù thủy chẳng hạn. Thế nên mình thấy con thích học hơn nhiều.</p>
                        <div className="inline-flex items-center">
                            <img src="https://cdn.getvisa.vn/files/msthuytrang.jpg" alt="I" width={40} height={40} className="rounded-full" loading="lazy" />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Phụ Huynh Đặng Thùy Dung</span>
                                <span className="text-gray-500 text-sm">Học sinh Nguyễn Khánh Toàn</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial