import { createParent, createStudent } from "@/services/user";
import { PageContainer, ProCard, ProFormDatePicker, ProFormSelect, ProFormText, StepsForm } from "@ant-design/pro-components";
import { Alert, Button, message } from "antd";
import Head from "next/head";
import { useState } from "react";

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
            <PageContainer title="Đăng ký">
                <ProCard>
                    <StepsForm
                        submitter={{
                            render: ({ form, onSubmit, step, onPre }) => {
                                return [
                                    <Button
                                        key="rest"
                                        onClick={() => {
                                            form?.resetFields();
                                        }}
                                    >
                                        Làm lại
                                    </Button>,
                                    step > 0 && (
                                        <Button
                                            key="pre"
                                            onClick={() => {
                                                onPre?.();
                                            }}
                                        >
                                            Quay lại
                                        </Button>
                                    ),
                                    <Button
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
                        >
                            <ProFormText label="Tên phụ huynh" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]} name="tenPhuHuynh" />
                            <ProFormText
                                label="Số điện thoại"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                                name="soDienThoai"
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
                    <div hidden={!success}>
                        <Alert message="Đăng ký thành công!" type="success" showIcon closable />
                    </div>
                </ProCard>
            </PageContainer>
        </>
    )
}