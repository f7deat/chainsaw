import { Alert, Button, Form, Input } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function Active() {

    const [visible, setVisible] = useState<boolean>(false);

    const onFinish = (values: any) => {
        setVisible(true);
        return;
    }

    return (
        <>
            <Head>
                <title>Kích hoạt khóa học</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="py-4 px-4 md:py-10">
                <div className="container mx-auto">
                    <div className="flex justify-center flex-col items-center">

                        <div hidden={!visible}>
                            <Alert message="Kích hoạt thành công" className="mb-4" type="success" showIcon />
                        </div>

                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="Nhập mã kích hoạt" className="w-96" rules={[{ required: true, message: 'Vui lòng nhập mã kích hoạt' }]} name="code">
                                <Input size="large" disabled={visible} />
                            </Form.Item>
                            <Form.Item>
                                <div className="text-center">
                                    <Button size="large" type="primary" className="bg-blue-500" htmlType="submit" disabled={visible}>
                                        Kích hoạt
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </main>
        </>
    )
}