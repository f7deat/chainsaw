import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Button, Card, Form, Input } from "antd";
import Head from "next/head";

export default function QuestionAndAnswer() {

    const onFinish = (values: any) => {

    }

    return (
        <>
            <Head>
                <title>Hỏi đáp</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container px-4 mx-auto md:py-10 py-4">
                <Card title="Gửi câu hỏi">
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Tiêu đề" rules={[{ required: true, message: 'Vui lòng nhập số tiêu đề' }]} name="title">
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item label="Nội dung" rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]} name="content">
                            <Input.TextArea size="large" />
                        </Form.Item>
                        <Form.Item>
                            <div className="flex justify-center">
                                <Button size="large" htmlType="submit" className="bg-blue-500 shadow" type="primary">Gửi câu hỏi</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            </main>
            <Footer />
        </>
    )
}