import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Alert, Button, Card, Form, Input, message } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function QuestionAndAnswer() {

    const [allowed, setAllowed] = useState<boolean>(false);
    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            setAllowed(true);
        }
    }, []);

    const onFinish = (values: any) => {
        message.success('Gửi câu hỏi thành công!')
    }

    return (
        <>
            <Head>
                <title>Hỏi đáp</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title="Gửi câu hỏi">
                <ProCard>
                    <div hidden={allowed} className="mb-6">
                        <Alert type="info" showIcon message="Vui lòng đăng nhập để gửi câu hỏi" />
                    </div>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Tiêu đề" rules={[{ required: true, message: 'Vui lòng nhập số tiêu đề' }]} name="title">
                            <Input disabled={!allowed} />
                        </Form.Item>
                        <Form.Item label="Nội dung" rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]} name="content">
                            <Input.TextArea disabled={!allowed} />
                        </Form.Item>
                        <div className="flex justify-center gap-4">
                            <Button htmlType="submit" type="primary" disabled={!allowed}>Gửi câu hỏi</Button>
                            <Button htmlType="reset" disabled={!allowed}>Làm lại</Button>
                        </div>
                    </Form>
                </ProCard>
            </PageContainer>
        </>
    )
}