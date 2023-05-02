import { getParent } from "@/services/user";
import { waitTime } from "@/utils/wait";
import { CheckOutlined, LoginOutlined, PhoneOutlined } from "@ant-design/icons"
import { ModalForm, ProFormInstance, ProFormText } from "@ant-design/pro-components";
import { Button, Input, Modal, Space } from "antd"
import { useEffect, useRef, useState } from "react";

type CourseSummaryProps = {
    isBought: boolean;
}

const CourseSummary: React.FC<CourseSummaryProps> = (props) => {

    const [open, setOpen] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const formRef = useRef<ProFormInstance>();

    const onRegister = async () => {
        const response = await getParent();
        console.log(response.data)
        formRef.current?.setFields([
            {
                name: 'parentName',
                value: response.data.tenPhuHuynh
            },
            {
                name: 'phoneNumber',
                value: response.data.soDienThoai
            }
        ])
        setUser(response.data);
        setOpen(true);
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
                <label className="font-bold">Họ và tên</label>
                <Input name="parentName" disabled value={user?.tenPhuHuynh} />
                <ProFormText readonly name="phoneNumber" label="Số điện thoại" />
            </Modal>
        </div>
    )
}

export default CourseSummary