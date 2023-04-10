import { DownOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Avatar, Button, ConfigProvider, message, Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import { Fragment, useState } from "react";

type ItemProps = {
    title: string;
}

const Item: React.FC<ItemProps> = (props) => {
    return (
        (
            <button className="hover:bg-orange-500 h-12 text-white bg-blue-800 flex items-center justify-center px-4 text-sm">
                {props.title}
            </button>
        )
    )
}

const TopNav: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);
    const onFinish = async (values: any) => {
        if (!values.userName || !values.password) {
            message.warning('Vui lòng điền tên đăng nhập hoặc mật khẩu!');
            return;
        }
        // TODO: Make token
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Link href="/tai-khoan/thong-tin">
                Thông tin cá nhân
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link href="/tai-khoan/khoa-hoc">
                Khóa học của tôi
            </Link>
          )
        },
        {
          key: '3',
          label: (
            <Link href="/tai-khoan/qua-trinh">
                Quá trình học tập
            </Link>
          ),
          disabled: true,
        },
        {
          key: '5',
          label: (
            <Link href="/tai-khoan/kich-hoat">
                Kích hoạt khóa học
            </Link>
          )
        },
        {
          key: '6',
          label: (
            <Link href="/tai-khoan/lich-su">
                Lịch sử kích hoạt
            </Link>
          )
        },
        {
          key: '4',
          danger: true,
          label: 'Đăng xuất',
        },
      ];

    return (
        <div className="bg-blue-900 font-medium text-sm">
            <div className="mx-auto container">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="bg-orange-500 h-12 text-white flex items-center justify-center px-4 text-sm">
                            Tiểu học
                        </div>
                        <Item title="THCS" />
                        <Item title="THPT" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="h-12 flex gap-2 items-center text-gray-200 hover:text-white hover:underline" onClick={() => setOpen(true)}>
                            <Avatar />
                            Đăng nhập
                        </button>
                        <button className="h-12 flex gap-2 items-center text-gray-200 hover:text-white hover:underline" onClick={() => setOpen(true)}>
                            Đăng ký
                        </button>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()} className="text-gray-200">
                                <Space>
                                    Nguyễn Hiểu Minh
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: '__Quicksand_1a17df'
                    },
                }}
            >
                <Modal open={open} title="Đăng nhập" onCancel={() => setOpen(false)} centered width={800} footer={<Fragment />}>
                    <div className="md:flex">
                        <div className="hidden md:block md:w-1/2">
                            <div className="flex items-center justify-center h-full">
                                <picture>
                                    <img src="https://www.go.ooo/img/bg-img/Login.jpg" alt="login" />
                                </picture>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label="Tài khoản" required name="userName">
                                    <Input size="large" />
                                </Form.Item>
                                <Form.Item label="Mật khẩu" required name="password">
                                    <Input.Password size="large" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" size="large" className="w-full bg-blue-500">Đăng nhập</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Modal>
            </ConfigProvider>

        </div>
    )
}

export default TopNav