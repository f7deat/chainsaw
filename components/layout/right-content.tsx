import { BarChartOutlined, BookOutlined, FacebookFilled, GoogleOutlined, LogoutOutlined, MoneyCollectOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Col, Form, Input, Modal, Row, Space, Typography, message } from "antd"
import HeaderDropdown from "./header-dropdown"
import { useRouter } from "next/router";
import type { MenuInfo } from 'rc-menu/lib/interface';
import { Fragment, useEffect, useRef, useState } from "react";
import { getUser, login } from "@/services/user";
import Link from "next/link";
import { StepsForm, ProFormSelect, ProFormInstance } from "@ant-design/pro-components";
import { Role } from "@/utils/constants";

const RightContent: React.FC = () => {

    const router = useRouter();
    const [options, setOptions] = useState<any>([]);
    const [user, setUser] = useState<API.User>();
    const formRef = useRef<ProFormInstance>();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        try {
            getUser().then(response => {
                setUser(response.data)
            });
        } catch (error) {

        }
    }, []);

    const loginOut = async () => {
        localStorage.removeItem('access_token');
        const urlParams = new URL(window.location.href).searchParams;
        const redirect = urlParams.get('redirect');
        if (window.location.pathname !== '/accounts/login' && !redirect) {
            window.location.href = "/";
        }
    };

    const onMenuClick = (event: MenuInfo) => {
        const { key } = event;
        if (key === 'logout') {
            loginOut();
            return;
        } else if (key === 'profile') {
            router.push(`/tai-khoan/thong-tin`);
            return;
        } else if (key === 'settings') {
            router.push(`/tai-khoan/khoa-hoc`);
            return;
        } else if (key === 'history') {
            router.push(`/tai-khoan/hoc-tap`);
            return;
        } else if (key === 'refer') {
            router.push(`/tai-khoan/thu-nhap`);
            return;
        }
        router.push(`/accounts/${key}`);
    }

    const menuItems = [
        ...(user?.roles?.find(x => x === Role.Referal) ?
            [{
                key: 'refer',
                icon: <MoneyCollectOutlined />,
                label: 'Thu nhập của tôi',
            }] : []),
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Thông tin cá nhân',
        },
        {
            key: 'settings',
            icon: <BookOutlined />,
            label: 'Khóa học của tôi',
        },
        {
            key: 'history',
            icon: <BarChartOutlined />,
            label: 'Quá trình học tập',
        },
        {
            type: 'divider' as const,
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Đăng xuất',
        }
    ];

    const onLogin = async (values: any) => {
        try {
            const data = await login(values);
            if (data.succeeded) {
                message.success(data.message);
                setOptions(data.data.map((u: any) => {
                    return {
                        label: u.user.hoVaTen,
                        value: u.token
                    }
                }));
                return true;
            } else {
                message.error(data.message);
                return false;
            }
        } catch (error) {
            message.error("Đã có lỗi xảy ra");
            return false;
        }
    }

    const onFinish = async (values: any) => {
        localStorage.setItem('access_token', values.token);
        window.location.reload();
    }

    const onForgotPassword = () => {
        setOpen(false);
        router.push('/tai-khoan/quen-mat-khau');
    }

    return user ? (
        <HeaderDropdown
            menu={{
                selectedKeys: [],
                onClick: onMenuClick,
                items: menuItems,
            }}
        >
            <Button type="link" className="flex items-center gap-2">
                <Avatar src={user?.avatar ? <picture>
                    <img src={user?.avatar} alt="avatar" />
                </picture> : <div className="bg-gray-500">
                    <UserOutlined />
                </div>} />
                <div className="text-left">
                    <div className="text-xs">Xin chào,</div>
                    <div className="font-medium text-sm">{user?.hoVaTen}</div>
                </div>
            </Button>
        </HeaderDropdown>
    ) : (
        <Space className="mr-4">
            <Button type="primary" size="large" onClick={() => setOpen(true)}>
                <Space>
                    <UserOutlined />
                    Đăng nhập
                </Space>
            </Button>
            <Modal open={open} onCancel={() => setOpen(false)} centered width={950} footer={<Fragment />}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Typography.Title level={3}>Xin chào!</Typography.Title>
                        <div className="p-10">
                            <picture>
                                <img src="https://finder.createx.studio/img/signin-modal/signin.svg" alt="" />
                            </picture>
                        </div>
                        <div className="p-4">
                            <Space>
                                <span className="text-lg">Bạn chưa có tài khoản?</span>
                                <Link href="/tai-khoan/dang-ky">
                                    <div className="font-medium underline text-lg">
                                        Đăng ký tại đây
                                    </div>
                                </Link>
                            </Space>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="py-4 flex justify-center gap-2 flex-col items-center">
                            <div className="mb-2 w-64">
                                <Button size="large" className="w-full">
                                    <Space>
                                        <GoogleOutlined />
                                        <div className="font-medium">
                                            Đăng nhập với Google
                                        </div>
                                    </Space>
                                </Button>
                            </div>
                            <div className="mb-4 w-64">
                                <Button size="large" className="w-full">
                                    <Space>
                                        <FacebookFilled />
                                        <div className="font-medium">
                                            Đăng nhập với Facebook
                                        </div>
                                    </Space>
                                </Button>
                            </div>
                        </div>
                        <StepsForm formRef={formRef}
                            submitter={{
                                render: ({ form, onSubmit, step, onPre }) => {
                                    return [
                                        <Button
                                            key="rest"
                                            onClick={() => {
                                                form?.resetFields();
                                            }}
                                            size="large"
                                        >
                                            Làm lại
                                        </Button>,
                                        step > 0 && (
                                            <Button
                                                key="pre"
                                                size="large"
                                                onClick={() => {
                                                    onPre?.();
                                                }}
                                            >
                                                Quay lại
                                            </Button>
                                        ),
                                        <Button
                                            key="next"
                                            size="large"
                                            type="primary"
                                            onClick={() => {
                                                onSubmit?.();
                                            }}
                                        >
                                            {
                                                step > 0 ? (<span>Đăng nhập</span>) : (<span>Bước sau</span>)
                                            }
                                        </Button>,
                                    ];
                                },
                            }}>
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
                                    <ProFormSelect name="token" label="Chọn học viên" options={options}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui Lòng chọn học viên'
                                            }
                                        ]}
                                    />
                                </div>
                            </StepsForm.StepForm>
                        </StepsForm>
                        <div className="mt-2 text-right">
                            <button className="text-blue-500" onClick={onForgotPassword}>
                                Quên mật khẩu?
                            </button>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </Space>
    )
}

export default RightContent