import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Button, Checkbox, Form, Input, message } from "antd";
import Head from "next/head";

export default function Register() {

    const onFinish = (values: any) => {
        if (!values.acceptTerm) {
            message.warning('Bạn cần đồng ý với điều khoản sử dụng trước khi đăng ký!')
            return;
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
            <Header />
            <main className="container mx-auto px-4 py-4 md:py-10">
                <div className="md:flex gap-4">
                    <div className="md:w-1/2">
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="Họ và tên" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]} name="name">
                                <Input size="large" />
                            </Form.Item>
                            <Form.Item label="Số điện thoại" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]} name="phoneNumber">
                                <Input size="large" />
                            </Form.Item>
                            <Form.Item label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="password">
                                <Input.Password size="large" />
                            </Form.Item>
                            <Form.Item label="Nhập lại mật khẩu" rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu' }]} name="confirmPassword">
                                <Input.Password size="large" />
                            </Form.Item>
                            <Form.Item name="acceptTerm" valuePropName="checked">
                                <Checkbox>Tôi đã đọc và đồng ý với điều khoản sử dụng</Checkbox>
                            </Form.Item>
                            <Button size="large" type="primary" className="bg-blue-500" htmlType="submit">Đăng ký</Button>
                        </Form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}