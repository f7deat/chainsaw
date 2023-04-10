import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { practice } from "@/mock/practice";
import { Button, Form, Input, Tabs, message } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function LuyenTap() {

    const [score, setScore] = useState<number>(0);

    const onFinish = (values: any) => {
        if (!values.answer) {
            message.warning('Vui lòng điền đáp án');
            return;
        }
        const point = 10 / practice.data.length;
        if (values.answer === String(practice.data[Number(values.index)].answer)) {
            setScore(score + point);
            message.success('Đúng rồi!!!')
        }
    }

    const renderTab = (i: number, item: any) => (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <button className="bg-orange-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {i + 1}</button>
                </div>
                <div className="text-3xl mb-10">{item.text}</div>
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Form onFinish={onFinish}>
                    <Form.Item initialValue={item.type} name="type" hidden />
                    <Form.Item initialValue={i} name="index" hidden />
                    <Form.Item name="answer">
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item>
                        <Button size="large" htmlType="submit" className="w-full bg-blue-500 font-bold" type="primary">Gửi câu trả lời</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

    return (
        <>
            <Head>
                <title>{practice.name}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="bg-cyan-900 px-4 py-4 md:py-20 text-white">
                <div className="text-5xl font-medium text-center mb-10">{practice.name}</div>
                <div className="container mx-auto">
                    <div className="md:border-[16px] border-4 rounded-lg border-cyan-700 bg-white p-4 relative">
                        <div className="flex justify-end absolute right-4">
                            <div className="border">
                                <div className="bg-red-500 py-2 px-4 font-bold text-xl rounded-t">Điểm</div>
                                <div className="p-2 text-blue-500 text-4xl text-center">
                                    <span>{score}</span>
                                    <span>/{10}</span>
                                </div>
                            </div>
                        </div>
                        <Tabs
                            tabPosition="left"
                            items={practice.data.map((item, i) => {
                                const id = String(i + 1);
                                return {
                                    label: id,
                                    key: id,
                                    children: renderTab(i, item),
                                };
                            })}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}