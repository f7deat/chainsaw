import { register } from "@/services/user";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { PageContainer, ProCard, ProFormDatePicker, ProFormSelect, ProFormText, StepsForm } from "@ant-design/pro-components";
import { Button, Col, Row, Typography, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Register() {

    const router = useRouter();

    const onParentCreate = async (values: API.PhuHuynh & {
        confirmPassword: string;
        password: string;
    }) => {
        if (values.password !== values.confirmPassword) {
            message.error('Mật khẩu không khớp!');
            return false;
        }
        return true;
    }

    const onFinish = async (values: any) => {
        const body = {
            phoneNumber: values.phoneNumber,
            password: values.password,
            email: values.email,
            parent: {
                name: values.parentName,
                address: values.address
            },
            student: {
                name: values.studentName,
                dateOfBirth: values.dateOfBirth
            }
        }
        const response = await register(body);
        if (response.succeeded) {
            message.success('Đăng ký thành công!');
            router.push('/tai-khoan/dang-ky/thanh-cong');
        } else {
            switch (response.errors[0].code) {
                case 'PasswordTooShort':
                    message.error('Mật khẩu cần ít nhất 6 ký tự');
                    break;
                case 'PasswordRequiresNonAlphanumeric':
                    message.error('Mật khẩu cần ít nhất một chữ cái thường');
                    break;
                case 'PasswordRequiresNonAlphanumeric':
                    message.error('Mật khẩu cần ít nhất một ký tự đặc biệt');
                    break;
                case 'PasswordRequiresLower':
                    message.error('Mật khẩu cần ít nhất một chữ cái thường (a - z)');
                    break;
                case 'PasswordRequiresUpper':
                    message.error('Mật khẩu cần ít nhất một chữ cái in hoa (A - Z)');
                    break;
                case 'PasswordRequiresDigit':
                    message.error('Mật khẩu cần ít nhất một chữ số (0 - 9)');
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <>
            <Head>
                <title>Đăng ký</title>
                <meta name="description" content="Đăng ký tài khoản mới" />
            </Head>
            <PageContainer title={<Fragment />}>
                <ProCard title="Đăng ký">
                    <Row gutter={20}>
                        <Col md={12}>
                            <StepsForm
                                onFinish={onFinish}
                                submitter={{
                                    render: ({ form, onSubmit, step, onPre }) => {
                                        return [
                                            <Button
                                                size="large"
                                                key="rest"
                                                onClick={() => {
                                                    form?.resetFields();
                                                }}
                                                shape="round"
                                            >
                                                Làm lại
                                            </Button>,
                                            step > 0 && (
                                                <Button
                                                    size="large"
                                                    key="pre"
                                                    onClick={() => {
                                                        onPre?.();
                                                    }}
                                                    shape="round"
                                                >
                                                    Quay lại
                                                </Button>
                                            ),
                                            <Button
                                            shape="round"
                                                size="large"
                                                key="next"
                                                type="primary"
                                                onClick={() => {
                                                    onSubmit?.();
                                                }}
                                            >
                                                {
                                                    step > 0 ? 'Hoàn thành' : 'Bước sau'
                                                }
                                            </Button>,
                                        ];
                                    },
                                }}
                                formProps={{
                                    validateMessages: {
                                        required: 'Vui lòng điền đầy đủ các thông tin bắt buộc',
                                    },
                                }}
                            >
                                <StepsForm.StepForm
                                    name="step1"
                                    title="Phụ Huynh"
                                    onFinish={onParentCreate}
                                    grid
                                >
                                    <ProFormText fieldProps={{
                                        size: "large"
                                    }} label="Tên phụ huynh" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]} name="parentName" />

                                    <ProFormText fieldProps={{
                                        size: "large"
                                    }}
                                        label="Số điện thoại"
                                        rules={[{
                                            required: true,
                                            message: 'Vui lòng nhập số điện thoại'
                                        },
                                        {
                                            max: 10,
                                            min: 9,
                                            message: 'Số điện thoại không hợp lệ'
                                        }]}
                                        name="phoneNumber"
                                        colProps={{
                                            md: 12
                                        }}
                                    />
                                    <ProFormText fieldProps={{
                                        size: "large"
                                    }}
                                        label="Email"
                                        name="email"
                                        colProps={{
                                            md: 12
                                        }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập email'
                                            }
                                        ]}
                                    />
                                    <ProFormText fieldProps={{
                                        size: "large"
                                    }} label="Địa chỉ"
                                    name="address" />
                                    <ProFormText.Password fieldProps={{
                                        size: "large"
                                    }}
                                    colProps={{
                                        md: 12
                                    }} label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="password" />
                                    <ProFormText.Password fieldProps={{
                                        size: "large"
                                    }}
                                    colProps={{
                                        md: 12
                                    }} label="Nhập lại mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="confirmPassword" />
                                </StepsForm.StepForm>
                                <StepsForm.StepForm name="step2" title="Học sinh" grid>
                                    <ProFormText fieldProps={{
                                        size: "large"
                                    }} colProps={{
                                        md: 16
                                    }} label="Tên học viên" name="studentName" rules={[
                                        {
                                            required: true
                                        }
                                    ]} />
                                    <ProFormDatePicker label="Ngày sinh" name="dateOfBirth" colProps={{
                                        md: 8
                                    }}
                                        fieldProps={{
                                            disabledDate: (current) => current.valueOf() > Date.now(),
                                            size: "large"
                                        }}
                                    />
                                </StepsForm.StepForm>
                            </StepsForm>
                            <div className="text-right text-sm py-4">
                                Bằng việc đăng ký, bạn đã đồng ý với <Link href="/faq/dieu-khoan" className="text-blue-500 font-medium">Điều khoản sử dụng</Link> và <a href="#" className="text-blue-500 font-medium">Chính sách bảo mật</a> của chúng tôi
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="px-4">
                                <Typography.Title level={3}>
                                    <div className="mb-2">Tham gia E-Learning</div>
                                    <div>Để nhận những lợi ích hấp dẫn</div>
                                </Typography.Title>
                                <ul>
                                    <li className="flex gap-2 mb-2">
                                        <CheckCircleTwoTone color="blue" />
                                        <span>Học bất cứ lúc nào</span>
                                    </li>
                                    <li className="flex gap-2 mb-2">
                                        <CheckCircleTwoTone color="blue" />
                                        <span>Nhận giải đáp 24/7</span>
                                    </li>
                                    <li className="flex gap-2 mb-2">
                                        <CheckCircleTwoTone color="blue" />
                                        <span>Thống kê kết quả học tập</span>
                                    </li>
                                </ul>
                                <div className="flex justify-center">
                                    <picture>
                                        <img src="https://finder.createx.studio/img/signin-modal/signup-dark.svg" alt="1" />
                                    </picture>
                                </div>
                                <div className="text-right py-4 text-lg">
                                    <Link href="/tai-khoan/quen-mat-khau">
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ProCard>
            </PageContainer>
        </>
    )
}