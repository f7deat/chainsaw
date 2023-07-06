import { Title } from "@/components";
import { getHelp } from "@/services/user";
import { FacebookFilled, GoogleOutlined, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Alert, Button, Form, Input, message } from "antd";
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

    const onFinish = async (values: any) => {
        const response = await getHelp(values);
        if (response.succeeded) {
            message.success('Gửi câu hỏi thành công!')
        } else {
            message.error(response.errors[0].description);
        }
    }

    return (
        <>
            <Head>
                <title>Hỏi đáp</title>
                <meta name="description" content="Gửi câu hỏi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <Title subTitle="Hỏi đáp" title="Gửi câu hỏi" />
                <div className="md:flex gap-4 md:mb-10 mb-4">
                    <div className="md:w-2/3">
                        <ProCard className="h-full" title="Mẫu">
                            <div hidden={allowed} className="mb-6">
                                <Alert type="info" showIcon message="Vui lòng đăng nhập để gửi câu hỏi" />
                            </div>
                            <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label="Tiêu đề" rules={[{ required: true, message: 'Vui lòng nhập số tiêu đề' }]} name="title">
                                    <Input disabled={!allowed} size="large" />
                                </Form.Item>
                                <Form.Item label="Nội dung" rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]} name="description">
                                    <Input.TextArea disabled={!allowed} size="large" />
                                </Form.Item>
                                <div className="flex justify-center gap-4">
                                    <Button htmlType="submit" type="primary" disabled={!allowed} size="large">Gửi câu hỏi</Button>
                                    <Button htmlType="reset" disabled={!allowed} size="large">Làm lại</Button>
                                </div>
                            </Form>
                        </ProCard>
                    </div>
                    <div className="md:w-1/3">
                        <picture className="hidden md:block">
                            <img src="https://www.weboundmarketing.com/wp-content/uploads/2019/10/faq-image.svg" alt="1" loading="lazy" />
                        </picture>
                    </div>
                </div>
                <div className="py-4 flex items-center justify-center gap-8">
                    <GoogleOutlined className="text-4xl text-red-500" />
                    <FacebookFilled className="text-4xl text-blue-600" />
                    <TwitterOutlined className="text-4xl text-sky-400" />
                    <YoutubeFilled className="text-4xl text-red-500" />
                </div>
            </main>
        </>
    )
}