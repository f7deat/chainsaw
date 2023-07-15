import { getParent } from "@/services/user";
import { CheckOutlined, FacebookFilled, FacebookOutlined, FileGifOutlined, IdcardFilled, IdcardOutlined, LoginOutlined, PhoneOutlined, SketchOutlined, TwitterOutlined, YoutubeFilled } from "@ant-design/icons"
import { ProCard } from "@ant-design/pro-components";
import { Button, Modal, Rate, message } from "antd"
import { useRouter } from "next/router";
import { useState } from "react";

type CourseSummaryProps = {
    isBought: boolean;
    data?: API.ChuongTrinhHoc;
}

const CourseSummary: React.FC<CourseSummaryProps> = (props) => {

    const [open, setOpen] = useState<boolean>(false);
    const [user, setUser] = useState<API.User>();
    const router = useRouter();

    const onRegister = async () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            router.push('/tai-khoan/dang-ky');
            return;
        }
        const response = await getParent();
        setUser(response.data);
        setOpen(true);
    }

    const onCopy = () => {
        navigator.clipboard.writeText(`KH${props.data?.khoaHocId} ${user?.phoneNumber}`);
        message.success('Đã sao chép vào bộ nhớ tạm!');
    }

    return (
        <ProCard className="shadow">
            <div className="h-52 bg-gray-500 rounded-lg mb-2">
                <picture>
                    <img src="https://cdn.getvisa.vn/images/cogiao.jpg" className="w-full h-52 object-cover" alt="cover" loading="lazy" />
                </picture>
            </div>
            <div className="text-right mb-2">
                <Rate defaultValue={5} onChange={() => message.success('Đánh giá thành công!')} />
            </div>
            <div className="mb-4 text-gray-500 text-base">
                {props.data?.moTaChuongTrinh}
            </div>
            <div className="py-4 text-center" hidden={!props.isBought}>
                <button className="px-10 py-2 rounded bg-green-500 text-white">
                    <CheckOutlined /> Đã đăng ký
                </button>
            </div>
            <div className="text-right" hidden={props.isBought}>
                <div className="text-xl text-gray-500 mb-2"><s>{props.data?.giaCu} đ</s></div>
                <div className="flex gap-2 justify-end font-bold mb-1">
                    <b>Chỉ còn</b>
                    <span className="text-4xl">{props.data?.gia}</span>
                </div>
                <div className="text-red-400 font-bold text-sm">Chỉ còn nốt 2 ngày</div>
                <div className="py-4 flex justify-center gap-4 border-b">
                    <button onClick={onRegister} className="px-4 py-2 rounded-full items-center bg-blue-500 hover:bg-blue-600 text-white flex gap-2 text-lg font-medium">
                        <LoginOutlined />Đăng ký ngay
                    </button>
                    <a href="tel:+84911717772" className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white flex gap-2 text-lg font-medium">
                        <PhoneOutlined />Nhận tư vấn
                    </a>
                </div>
                <div className="mb-4 text-left py-3 border-b">
                    <div className="text-2xl font-medium mb-4">Khóa học bao gồm</div>
                    <div className="text-gray-500 font-medium">
                        <div className="flex gap-2 items-center mb-2">
                            <SketchOutlined className="text-blue-500 text-lg" />Money Back Guarantee
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <IdcardFilled className="text-blue-500 text-lg" />Chứng chỉ sau khóa học
                        </div>
                    </div>
                </div>
                <div className="mb-4 text-left">
                    <div className="text-xl font-medium mb-4">Chia sẻ khóa học</div>
                    <div className="flex gap-4 text-xl">
                        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-sky-500 text-white">
                            <TwitterOutlined />
                        </div>
                        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
                            <FacebookFilled />
                        </div>
                        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-red-500 text-white">
                            <YoutubeFilled />
                        </div>
                    </div>
                </div>
            </div>

            <Modal open={open} onCancel={() => setOpen(false)} title="Đăng ký khóa học" footer={false} centered>
                <div className="mb-4">
                    <label className="font-bold block mb-2">Họ và tên</label>
                    <div className="px-2 bg-slate-100 py-1 rounded border">{user?.name}</div>
                </div>
                <div className="mb-4">
                    <label className="font-bold block mb-2">Số điện thoại</label>
                    <div className="px-2 bg-slate-100 py-1 rounded border">{user?.phoneNumber}</div>
                </div>
                <div className="mb-2">Để đăng ký khóa học, bạn vui lòng chuyển khoản tới:</div>
                <div className="font-bold mb-2">Ngân hàng TMCP Đông Nam Á (SeABank)</div>
                <div className="py-1 px-2 bg-slate-100">
                    <div className="flex mb-2">
                        <div className="flex-1">
                            <ul>
                                <li>Chủ Tài Khoản: <b>Nguyễn Văn Nam</b></li>
                                <li>Số Tài Khoản: <b>000005100680</b></li>
                            </ul>
                        </div>
                        <picture>
                            <img src="https://www.seabank.com.vn/assets/images/brands/logo-seabank4.png" alt="l" className="w-32 mt-2" />
                        </picture>
                    </div>
                    <div className="mb-2">
                        <div className="mb-2 text-orange-700">Nội dung chuyển khoản:</div>
                        <div className="font-bold">
                            KH{props.data?.khoaHocId} {user?.phoneNumber}
                            <Button type="link" onClick={onCopy}>Sao chép</Button>
                        </div>
                    </div>
                </div>
                <div className="text-gray-500 text-xs text-right">
                    <CheckOutlined /> Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!
                </div>
            </Modal>
        </ProCard>
    )
}

export default CourseSummary