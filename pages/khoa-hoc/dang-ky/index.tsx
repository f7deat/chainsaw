import { HeadTitle } from "@/components";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { StepsForm, ProFormText, ProFormDatePicker, ProFormDateRangePicker, ProFormTextArea, ProFormCheckbox, ProForm, ProFormDependency, ProFormSelect } from "@ant-design/pro-components";
import { Alert, Button, Card, message } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function Index() {
    const [success, setSuccess] = useState<boolean>(false);

    const waitTime = (time: number = 100) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
    };
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Head>
                <title>Đăng ký khóa học</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container mx-auto md:py-10 py-4 px-4">
                <HeadTitle center>Đăng ký khóa học</HeadTitle>
                <Card hidden={!success}>
                    <Alert message="Đăng ký thành công!" />
                </Card>
                <Card>
                    <StepsForm
                        onFinish={async () => {
                            setLoading(true);
                            await waitTime(1000);
                            message.success('Đăng ký thành công!');
                            setLoading(false);
                            setSuccess(true);
                        }}
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
                                        loading={loading}
                                        type="primary"
                                        onClick={() => {
                                            onSubmit?.();
                                        }}
                                    >
                                        Hoàn thành
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
                            name="base"
                            title="Bước 1: Thông tin"
                            onFinish={async () => {
                                setLoading(true);
                                await waitTime(2000);
                                setLoading(false);
                                return true;
                            }}
                        >
                            <ProFormText
                                name="name"
                                label="Tên phụ huynh"
                                width="md"
                                rules={[{ required: true }]}
                            />
                            <ProFormText
                                name="phoneNumber"
                                label="Số điện thoại"
                                width="md"
                                rules={[{ required: true }]}
                            />
                            <ProFormTextArea name="remark" label="Ghi chú" width="lg" />
                        </StepsForm.StepForm>
                        <StepsForm.StepForm name="checkbox" title="Bước 2: Thanh toán">
                            <ProFormSelect name="paymentType" initialValue="office" options={[
                                {
                                    label: 'Chuyển khoản',
                                    value: 'napas'
                                },
                                {
                                    label: 'Thanh toán tại trung tâm',
                                    value: 'office'
                                }
                            ]} />
                            <ProFormDependency name={['paymentType']}>
                                {({ paymentType }) => {
                                    return paymentType === 'napas' ? (
                                        <div>
                                            <ProFormText name="bank" label="Tên ngân hàng" />
                                            <ProForm.Group>
                                                <ProFormText name="dbName" label="Số tài khoản" />
                                                <ProFormText name="datetime" label="Chủ tài khoản" width="sm" />
                                            </ProForm.Group>
                                        </div>
                                    ) : (
                                        <ProForm.Item>
                                            <Alert message="Bạn đã chọn thanh toán tại trung tâm"></Alert>
                                        </ProForm.Item>
                                    );
                                }}
                            </ProFormDependency>
                        </StepsForm.StepForm>
                    </StepsForm>
                </Card>
            </div>
            <Footer />
        </>
    )
}