import { Avatar } from "antd"
import { Title } from ".."

const Testimonial: React.FC = () => {
    return (
        <div className="md:mb-16 mb-4">
            <Title subTitle="Đánh giá" title="Phụ huynh nói gì về chúng tôi" />
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded" data-aos="fade-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" /></svg>
                        <p className="leading-relaxed mb-6">Con nhà mình không phải lười học nhưng tư duy hơi chậm. Ở nhà mình cố gắng dạy con học nhưng không có chuyên môn nên được 1 lúc là lại nóng lên quát con.
                            Tuần học đến bài phân số, kiến thức mới, cô giảng trên lớp hơi nhanh nên con chưa hiểu lắm, làm bài tập sai nhiều. Về nhà mình cho con nghe lại bài giảng của thầy Tám. Thầy có phương pháp dạy đơn giản nhưng dễ hiểu, lấy hình ảnh quen thuộc như quả cáo, pizza minh họa nên con mình dễ tưởng tượng lắm. Kỳ này cô chủ nhiệm cũng bảo con tiến bộ, hăng hái phát biểu hơn...</p>
                        <a className="inline-flex items-center">
                            <Avatar src="https://cdn.getvisa.vn/files/0123.png" />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Phụ huynh Tùng Lâm</span>
                                <span className="text-gray-500 text-sm">Học sinh Đỗ Huy Quang</span></span>
                        </a>
                    </div>
                </div>
                <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded" data-aos="fade-right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" /></svg>
                        <p className="leading-relaxed mb-6">Bạn bé nhà mình học ở GET được gần 2 tháng rồi. Trước bạn ấy ko tự giác học lắm, phải có mẹ kè kè ngồi bên kèm tí một. Nhưng giờ con rất thích học, cứ 7 rưỡi là tự giác ngồi vào bàn học.
                            Cô vẫn giảng các bài theo SGK nhưng có cách dạy khác; giống như trò chuyện, vui chơi với con. Ví dụ thay vì yêu cầu con “làm bài 1,2,3” thì cô bảo con cùng giải cứu gia đình Thỏ bằng cách trả lời đúng các câu hỏi của bà phù thủy chẳng hạn. Thế nên mình thấy con thích học hơn nhiều.</p>
                        <a className="inline-flex items-center">
                            <Avatar src="https://cdn.getvisa.vn/files/msthuytrang.jpg" />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Phụ Huynh Đặng Thùy Dung</span>
                                <span className="text-gray-500 text-sm">Học sinh Nguyễn Khánh Toàn</span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial