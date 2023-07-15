import { login } from "@/services/user";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { StepsForm, ProFormSelect, ProFormInstance } from "@ant-design/pro-components";
import { Modal, Button, Space, Form, Input, Typography, message, SelectProps } from "antd";
import { useRouter } from "next/router";
import { Fragment, useRef, useState } from "react";

type LoginFormProps = {
    open: boolean;
    setOpen: any
}

const LoginForm: React.FC<LoginFormProps> = (props) => {

    const { open, setOpen } = props;
    const formRef = useRef<ProFormInstance>();
    const [options, setOptions] = useState<SelectProps<any>['options']>([]);

    const router = useRouter();

    const onForgotPassword = () => {
        setOpen(false);
        router.push('/tai-khoan/quen-mat-khau');
    }

    const onFinish = async (values: any) => {
        localStorage.setItem('access_token', values.token);
        window.location.reload();
    }

    const onRegister = () => {
        setOpen(false);
        router.push('/tai-khoan/dang-ky');
    }

    const onLogin = async (values: any) => {
        try {
            const data = await login(values);
            if (data.succeeded) {
                message.success('Đăng nhập thành công!');
                setOptions(data.data.map((u: any) => {
                    return {
                        label: u.user.name,
                        value: u.token
                    }
                }));
                if (data.data.length === 1) {
                    await onFinish({
                        token: data.data[0].token
                    });
                    return false;
                }
                return true;
            } else {
                message.error(data.errors[0].description);
                return false;
            }
        } catch (error) {
            message.error("Đã có lỗi xảy ra");
            return false;
        }
    }

    return (
        <Modal open={open} onCancel={() => setOpen(false)} centered width={950} footer={<Fragment />}>
            <div className="md:flex gap-4">
                <div className="md:w-1/2">
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
                            <Form.Item label="Số điện thoại" className="w-80" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]} name="userName">
                                <Input size="large" />
                            </Form.Item>
                            <Form.Item label="Mật khẩu" className="w-80" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="password">
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
                                    ]} params={undefined} request={undefined} debounceTime={undefined} valueEnum={undefined} />
                            </div>
                        </StepsForm.StepForm>
                    </StepsForm>
                    <div className="mt-2 text-right">
                        <button className="text-blue-500" onClick={onForgotPassword}>
                            Quên mật khẩu?
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Typography.Title level={3} className="md:block hidden">Xin chào!</Typography.Title>
                    <div className="p-10 hidden md:block">
                        <picture>
                            <img src="https://finder.createx.studio/img/signin-modal/signin.svg" alt="" />
                        </picture>
                    </div>
                    <div className="p-4">
                        <Space>
                            <span className="md:text-lg text-sm">Bạn chưa có tài khoản?</span>
                            <button className="font-medium underline md:text-lg text-sm" type="button" onClick={onRegister}>
                                Đăng ký tại đây
                            </button>
                        </Space>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default LoginForm