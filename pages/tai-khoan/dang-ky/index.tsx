import { createParent, createStudent } from "@/services/user";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { PageContainer, ProCard, ProFormDatePicker, ProFormSelect, ProFormText, StepsForm } from "@ant-design/pro-components";
import { Alert, Button, Col, Row, Typography, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Register() {

    const [success, setSuccess] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>();

    const onParentCreate = async (values: API.PhuHuynh & {
        confirmPassword: string;
    }) => {
        if (values.matKhau !== values.confirmPassword) {
            message.error('Mật khẩu không khớp!');
            return false;
        }
        values.gioiTinh = values.gioiTinh === 1;
        const response = await createParent(values);
        if (response.succeeded) {
            message.success('Đăng ký thành công!');
            setPhoneNumber(values.soDienThoai);
            return true;
        } else {
            message.error(response.errors[0].description);
            return false;
        }
    }

    const onStudentCreate = async (values: API.HocVien) => {
        values.soDienThoai = phoneNumber;
        const response = await createStudent(values);
        if (response.succeeded) {
            message.success('Đăng ký thành công');
            setSuccess(true);
            return true;
        } else {
            message.error(response.errors[0].description);
            return false;
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
                                                    step > 1 ? 'Hoàn thành' : 'Bước sau'
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
                                    <ProFormText label="Tên phụ huynh" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]} name="tenPhuHuynh" />
                                    <ProFormText
                                        label="Số điện thoại"
                                        rules={[{ 
                                            required: true,
                                            max: 10
                                        }]}
                                        name="soDienThoai"
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
                                    <ProFormSelect label="Giới tính" options={[
                                        {
                                            label: 'Nam',
                                            value: 1
                                        },
                                        {
                                            label: 'Nữ',
                                            value: 0
                                        }
                                    ]} initialValue={1} name="gioiTinh" />
                                    <ProFormText label="Địa chỉ" name="diaChi" />
                                    <ProFormText.Password label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="matKhau" />
                                    <ProFormText.Password label="Nhập lại mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="confirmPassword" />
                                </StepsForm.StepForm>
                                <StepsForm.StepForm name="step2" title="Học sinh" onFinish={onStudentCreate}>
                                    <ProFormText label="Tên học viên" name="hoVaTen" rules={[
                                        {
                                            required: true
                                        }
                                    ]} />
                                    <ProFormDatePicker label="Ngày sinh" name="ngaySinh" />
                                </StepsForm.StepForm>
                            </StepsForm>
                            <div className="text-right text-sm py-4">
                                Bằng việc đăng ký, bạn đã đồng ý với <a href="#">Điều khoản sử dụng</a> và <a href="#">Chính sách bảo mật</a> của chúng tôi
                            </div>
                            <div hidden={!success}>
                                <Alert message="Đăng ký thành công!" type="success" showIcon closable />
                            </div>
                        </Col>
                        <Col md={12}>
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
                        </Col>
                    </Row>
                </ProCard>
            </PageContainer>
        </>
    )
}