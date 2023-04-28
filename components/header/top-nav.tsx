import { API_URL } from "@/constant";
import { getStudent } from "@/services/user";
import { DownOutlined, FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { ProFormInstance, ProFormSelect, StepsForm } from "@ant-design/pro-components";
import { Modal, Form, Input, Avatar, Button, message, Dropdown, MenuProps, Space, Row, Col, Typography } from "antd";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

type ItemProps = {
    title: string;
}

const Item: React.FC<ItemProps> = (props) => {
    return (
        (
            <button className="hover:bg-orange-500 h-12 text-white bg-sky-900 flex items-center justify-center px-4 text-sm">
                {props.title}
            </button>
        )
    )
}

const TopNav: React.FC = () => {

    const formRef = useRef<ProFormInstance>();
    const [open, setOpen] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const [options, setOptions] = useState<any>([]);

    useEffect(() => {
        try {
            getStudent().then(response => {
                if (response.status === 200) {
                    setUser(response.data.data)
                }
            });
        } catch (error) {

        }
    }, []);

    const onLogin = async (values: any) => {
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
                message.success(data.message);
                setOptions(data.data.map((u: any) => {
                    return {
                        label: u.user.hoVaTen,
                        value: u.token
                    }
                }))
                return true;
            }
        } catch (error) {
            message.error("Đã có lỗi xảy ra");
        }
    }

    const onFinish = async (values: any) => {
        localStorage.setItem('access_token', values.token);
        window.location.reload();
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
        <div className="bg-sky-800 font-medium">
            <div className="mx-auto container">
                <div className="flex justify-between">
                    <div className="flex items-center font-bold text-sm">
                        <div className="bg-orange-500 h-12 text-white flex items-center justify-center px-4">
                            TIỂU HỌC
                        </div>
                        <Item title="THCS" />
                        <Item title="THPT" />
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
            <Modal open={open} onCancel={() => setOpen(false)} centered width={950} footer={<Fragment />}>
                <Row>
                    <Col span={12}>
                        <Typography.Title level={3}>Xin chào!</Typography.Title>
                        <div className="p-10">
                            <picture>
                                <img src="https://finder.createx.studio/img/signin-modal/signin.svg" alt="" />
                            </picture>
                        </div>
                        <div className="p-4">
                            <Space>
                                <span>Bạn chưa có tài khoản?</span>
                                <Link href="/tai-khoan/dang-ky">
                                    <Button size="small" type="link"><b>Đăng ký</b></Button>
                                </Link>
                            </Space>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="py-4 flex justify-center gap-2 flex-col items-center">
                            <div className="mb-4 w-64">
                                <Button size="large" icon={<GoogleOutlined />} className="w-full">Đăng nhập với Google</Button>
                            </div>
                            <div className="mb-4 w-64">
                                <Button size="large" icon={<FacebookOutlined />} className="w-full">Đăng nhập với Facebook</Button>
                            </div>
                        </div>
                        <StepsForm formRef={formRef}>
                            <StepsForm.StepForm name="step1" title="Đăng nhập" onFinish={onLogin}>
                                <Form.Item label="Số điện thoại" className="w-80" initialValue={"0911717772"} rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]} name="userName">
                                    <Input size="large" />
                                </Form.Item>
                                <Form.Item label="Mật khẩu" className="w-80" initialValue="1" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="password">
                                    <Input.Password size="large" />
                                </Form.Item>
                            </StepsForm.StepForm>
                            <StepsForm.StepForm name="step2" title="Học viên" onFinish={onFinish}>
                                <div className="w-64">
                                    <ProFormSelect name="token" label="Chọn học viên" options={options} />
                                </div>
                            </StepsForm.StepForm>
                        </StepsForm></Col>
                </Row>
            </Modal>

        </div>
    )
}

export default TopNav