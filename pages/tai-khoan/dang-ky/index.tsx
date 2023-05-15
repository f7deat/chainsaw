import { register } from "@/services/user";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { PageContainer, ProCard, ProFormDatePicker, ProFormSelect, ProFormText, StepsForm } from "@ant-design/pro-components";
import { Button, Col, Row, Typography, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Register() {

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
            parent: {
                tenPhuHuynh: values.parentName,
                soDienThoai: values.phoneNumber,
                diaChi: values.address,
                matKhau: values.password,
                gioiTinh: values.parentGender === 1
            },
            student: {
                hoVaTen: values.studentName,
                ngaySinh: values.dateOfBirth,
                soDienThoai: values.phoneNumber,
                gioiTinh: values.studentGender === 1
            }
        }
        const response = await register(body);
        if (response.succeeded) {
            message.success('Đăng ký thành công!');
        } else {
            message.error(response.errors[0].description);
        }
    }

    return (
        <>
            <Head>
                <title>Đăng ký</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
                                                >
                                                    Quay lại
                                                </Button>
                                            ),
                                            <Button
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
                                    <ProFormText label="Tên phụ huynh" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]} name="parentName" colProps={{
                                        md: 12
                                    }} />

                                    <ProFormSelect label="Giới tính" name="parentGender" colProps={{
                                        md: 12
                                    }}
                                        options={[
                                            {
                                                value: 1,
                                                label: 'Nam'
                                            },
                                            {
                                                value: 0,
                                                label: 'Nữ'
                                            }
                                        ]}
                                    />

                                    <ProFormText
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
                                    <ProFormText
                                        label="Email"
                                        name="email"
                                        colProps={{
                                            md: 12
                                        }}
                                    />
                                    <ProFormText label="Địa chỉ" name="address" />
                                    <ProFormText.Password label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="password" />
                                    <ProFormText.Password label="Nhập lại mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="confirmPassword" />
                                </StepsForm.StepForm>
                                <StepsForm.StepForm name="step2" title="Học sinh" grid>
                                    <ProFormText label="Tên học viên" name="studentName" rules={[
                                        {
                                            required: true
                                        }
                                    ]} />
                                    <ProFormDatePicker label="Ngày sinh" name="dateOfBirth" colProps={{
                                        md: 8
                                    }}
                                        fieldProps={{
                                            disabledDate: (current) => current.valueOf() > Date.now()
                                        }}
                                    />
                                    <ProFormSelect label="Giới tính" name="studentGender" colProps={{
                                        md: 16
                                    }}
                                        options={[
                                            {
                                                value: 1,
                                                label: 'Nam'
                                            },
                                            {
                                                value: 0,
                                                label: 'Nữ'
                                            }
                                        ]}
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