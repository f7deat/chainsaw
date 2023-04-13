import { API_URL } from "@/constant";
import { DownOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Avatar, Button, ConfigProvider, message, Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

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
    const [user, setUser] = useState<any>();

    useEffect(() => {
        fetch(`${API_URL}/student`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    if (data.succeeded) {
                        setUser(data.data);
                    }
                })
            }
        })
    }, []);

    const onFinish = async (values: any) => {
        try {
            const response = await fetch(`${API_URL}/auth/password-sign-in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: values.userName,
                    Password: values.password
                })
            });
            const data = await response.json();
            if (data.succeeded) {
                localStorage.setItem('access_token', data.token);
                message.success(data.message);
                window.location.reload();
            }
        } catch (error) {
            message.error("Đã có lỗi xảy ra");
        }
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
            onClick: () => {
                localStorage.removeItem('access_token');
                window.location.reload();
            }
        },
    ];

    return (
        <div className="bg-blue-900 font-medium text-sm">
            <div className="mx-auto container">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="bg-orange-500 h-12 text-white flex items-center justify-center px-4 text-sm">
                            Tiểu học
                        </div>
                        <Item title="THCS" />
                        <Item title="THPT" />
                        <Link href="/kich-hoat">
                            <button className="rounded-full shadow bg-white ml-2 px-4 py-2">
                                Nhập mã kích hoạt
                            </button>
                        </Link>
                    </div>
                    <div className="flex gap-4 items-center">

                        {
                            user ? (
                                <Dropdown menu={{ items }}>
                                    <Button type="link" className="text-gray-200">
                                        <Space>
                                            {user.hoVaTen}
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>
                            ) : (
                                <div className="flex gap-3">
                                    <button className="h-12 flex gap-2 items-center text-gray-200 hover:text-white hover:underline" onClick={() => setOpen(true)}>
                                        <Avatar />
                                        Đăng nhập
                                    </button>
                                    <Link href="/tai-khoan/dang-ky">
                                        <button className="h-12 flex gap-2 items-center text-gray-200 hover:text-white hover:underline">
                                            Đăng ký
                                        </button>
                                    </Link>
                                </div>
                            )
                        }
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
                                <Form.Item label="Số điện thoại" initialValue={"0911717772"} rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]} name="userName">
                                    <Input size="large" />
                                </Form.Item>
                                <Form.Item label="Mật khẩu" initialValue="1" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="password">
                                    <Input.Password size="large" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" size="large" className="w-full bg-blue-500">Đăng nhập</Button>
                                </Form.Item>
                            </Form>
                            <div>Bạn chưa có tài khoản? <Link href="/tai-khoan/dang-ky"><b>Đăng ký</b></Link></div>
                        </div>
                    </div>
                </Modal>
            </ConfigProvider>

        </div>
    )
}

export default TopNav