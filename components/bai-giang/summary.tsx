import { getParent } from "@/services/user";
import { CheckOutlined, LoginOutlined, PhoneOutlined } from "@ant-design/icons"
import { Button, Input, Modal, Space, message } from "antd"
import { useRouter } from "next/router";
import { useState } from "react";

type CourseSummaryProps = {
    isBought: boolean;
}

const CourseSummary: React.FC<CourseSummaryProps> = (props) => {

    const [open, setOpen] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const router = useRouter();

    const onRegister = async () => {
        const response = await getParent();
        setUser(response.data);
        setOpen(true);
    }

    const onCopy = () => {
        navigator.clipboard.writeText(`KH${router?.query?.id} ${user?.soDienThoai}`);
        message.success('Đã sao chép vào bộ nhớ tạm!');
    }

    return (
        <div className="bg-white shadow p-2 rounded-lg md:-mt-20">
            <div className="h-52 bg-gray-500 rounded-lg mb-4">
                <picture>
                    <img src="https://cdn.getvisa.vn/images/cogiao.jpg" className="w-full h-52 object-fit-cover" alt="cover" />
                </picture>
            </div>
            <div className="py-4 text-center" hidden={!props.isBought}>
                <button className="px-10 py-2 rounded bg-green-500 text-white">
                    <CheckOutlined /> Đã đăng ký
                </button>
            </div>
            <div className="text-right" hidden={props.isBought}>
                <div className="text-xl text-gray-500 mb-2"><s>1.500.000 đ</s></div>
                <div className="flex gap-2 justify-end font-bold mb-1">
                    <b>Chỉ còn</b>
                    <span className="text-4xl">1.200.000</span>
                </div>
                <div className="text-red-400 font-bold text-sm">Chỉ còn nốt 2 ngày</div>
                <div className="py-3 flex justify-center gap-4">
                    <Button size="large" type="primary" onClick={onRegister}>
                        <Space><LoginOutlined />Đăng ký ngay</Space>
                    </Button>
                    <a href="tel:+84911717772" className="px-4 py-2 rounded-lg bg-red-500 text-white">
                        <Space>
                            <PhoneOutlined />Nhận tư vấn
                        </Space>
                    </a>
                </div>
            </div>

            <Modal open={open} onCancel={() => setOpen(false)} title="Đăng ký khóa học" footer={false} centered>
                <div className="mb-4">
                    <label className="font-bold block mb-2">Họ và tên</label>
                    <Input disabled value={user?.tenPhuHuynh} />
                </div>
                <div className="mb-4">
                    <label className="font-bold block mb-2">Số điện thoại</label>
                    <Input disabled value={user?.soDienThoai} />
                </div>
                <div className="mb-2">Để đăng ký khóa học, bạn vui lòng chuyển khoản tới:</div>
                <div className="font-bold mb-2">Ngân hàng TMCP Đông Nam Á (SeABank)</div>
                <div className="flex mb-2">
                    <div className="flex-1">
                        <ul>
                            <li>Chủ Tài Khoản: <b>Nguyễn Văn Nam</b></li>
                            <li>Số Tài Khoản: <b>000005100680</b></li>
                        </ul>
                    </div>
                    <picture>
                        <img src="https://www.seabank.com.vn/assets/images/brands/logo-seabank4.png" alt="l" className="w-32" />
                    </picture>
                </div>
                <div className="mb-2">
                    <div className="mb-2">Nội dung chuyển khoản:</div>
                    <div className="font-bold">
                        KH{router?.query?.id} {user?.soDienThoai}
                        <Button type="link" onClick={onCopy}>Sao chép</Button>
                    </div>
                </div>
                <div className="text-gray-500 text-sm text-right">
                    <CheckOutlined /> Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!
                </div>
            </Modal>
        </div>
    )
}

export default CourseSummary