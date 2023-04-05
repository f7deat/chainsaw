import { Modal, Form, Input, Avatar } from "antd";
import { useState } from "react";

type ItemProps = {
    title: string;
}

const Item: React.FC<ItemProps> = (props) => {
    return (
        (
            <button className="hover:bg-orange-500 h-12 text-white flex items-center justify-center px-4 text-sm">
                {props.title}
            </button>
        )
    )
}

const TopNav: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="bg-blue-900 font-medium text-sm">
            <div className="mx-auto container">
                <div className="flex justify-between">
                <div className="flex">
                    <div className="bg-orange-500 h-12 text-white flex items-center justify-center px-4 text-sm">
                        Tiểu học
                    </div>
                    <Item title="THCS"/>
                    <Item title="THPT"/>
                </div>
                <div>
                    <button className="h-12 flex gap-2 items-center text-white" onClick={() => setOpen(true)}>
                        <Avatar />
                        Đăng nhập
                    </button>
                </div>
                </div>
            </div>
            <Modal open={open} title="Đăng nhập" onCancel={() => setOpen(false)}>
                <Form.Item label="Tài khoản">
                    <Input />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input.Password />
                </Form.Item>
            </Modal>
        </div>
    )
}

export default TopNav