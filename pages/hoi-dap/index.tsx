import { Title } from "@/components";
import { FormSubject } from "@/components/forms";
import { AppContext } from "@/models/app-context";
import { getHelp } from "@/services/user";
import { FACEBOOK_FANPAGE } from "@/utils/constants";
import { FacebookFilled, GoogleOutlined, HomeOutlined, QuestionCircleOutlined, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";
import { Breadcrumb, Button, Form, Input, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

export default function QuestionAndAnswer() {

    const { user } = useContext<API.AppContext>(AppContext)

    const onFinish = async (values: any) => {
        if (!user) {
            message.warning('Vui lòng đăng nhập để gửi câu hỏi!');
            return;
        }
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

                <div className="mb-4">
                    <Breadcrumb items={[
                        {
                            title: (
                                <Link href="/">
                                    <HomeOutlined /> Trang chủ
                                </Link>
                            )
                        },
                        {
                            title: (
                                <Link href={`/hoi-dap`}>
                                    <QuestionCircleOutlined /> Hỏi đáp
                                </Link>
                            )
                        }
                    ]} />
                </div>

                <Title subTitle="Hỏi đáp" title="Gửi câu hỏi" />
                <div className="md:flex gap-4 md:gap-20 md:mb-10 mb-4">

                    <div className="md:w-1/2 text-center">
                        <picture className="hidden md:block">
                            <img src="https://www.weboundmarketing.com/wp-content/uploads/2019/10/faq-image.svg" alt="SUPPORT" loading="lazy" style={{
                                width: '80%'
                            }} />
                        </picture>
                    </div>

                    <div className="md:w-1/2">
                        <div className="h-full block flex items-center">
                            <div className="w-full"> <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label="Tiêu đề" rules={[{ required: true, message: 'Vui lòng nhập số tiêu đề' }]} name="title">
                                    <Input size="large" />
                                </Form.Item>
                                <FormSubject />
                                <Form.Item label="Nội dung" rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]} name="description">
                                    <Input.TextArea rows={10} />
                                </Form.Item>
                                <div className="flex justify-center gap-4">
                                    <Button htmlType="submit" type="primary" size="large" shape="round">Gửi câu hỏi</Button>
                                    <Button htmlType="reset" size="large" shape="round">Làm lại</Button>
                                </div>
                            </Form></div>
                        </div>
                    </div>

                </div>
                <div className="py-4 flex items-center justify-center gap-12">
                    <GoogleOutlined className="text-4xl text-red-500" />
                    <a href={FACEBOOK_FANPAGE}>
                        <FacebookFilled className="text-4xl" />
                    </a>
                    <TwitterOutlined className="text-4xl text-sky-400" />
                    <YoutubeFilled className="text-4xl text-red-500" />
                </div>
            </main>
        </>
    )
}