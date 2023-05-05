import CommentComponent from "@/components/comment";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import PracticeContent from "@/components/practice/item";
import SingleChoice from "@/components/practice/single-choice";
import { getBaiGiang, listQuestion } from "@/services/course";
import { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import { Alert, Space, Tabs } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export default function LuyenTap() {
    const router = useRouter();

    const [data, setData] = useState<API.QuestionListItem[]>([]);
    const [error, setError] = useState<string>();
    const [baiGiang, setBaiGiang] = useState<any>();

    useEffect(() => {
        if (router?.query?.id) {
            listQuestion(router.query.id).then(response => {
                if (response.succeeded) {
                    setData(response.data);
                    if (response.data) {
                        let point = 0;
                        for (let index = 0; index < response.data.length; index++) {
                            const element = response.data[index];
                            if (element.result) {
                                point++;
                            }
                        }
                        setScore(point);
                    }
                } else {
                    setError(response.errors[0].description);
                }
            });
            getBaiGiang(router.query.id).then(response => {
                setBaiGiang(response);
            })
        }
    }, [router])

    const [score, setScore] = useState<number>(0);

    const renderTab = (item: API.QuestionListItem, index: number) => {
        if (item.type === 'tuluan') {
            return <PracticeContent item={item} score={score} setScore={setScore} index={index} />
        } else {
            return <SingleChoice data={item} index={index} score={score} setScore={setScore} />
        }
    }

    const labelRender = (item: API.QuestionListItem, index: string) => {
        if (item.isCompleted) {
            if (item.result) {
                return <Space>
                    <span className="text-lg text-green-500 font-bold">{index}</span>
                    <CheckCircleOutlined className="text-green-500" />
                </Space>
            } else {
                return <Space>
                    <span className="text-lg text-red-500 font-bold">{index}</span>
                    <StopOutlined className="text-red-500" />
                </Space>
            }
        }
        return <span className="text-lg font-bold">{index}</span>
    }

    return (
        <>
            <Head>
                <title>Luyện tập</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="bg-cyan-900 px-4 py-4 md:py-20 text-white">
                <div className="container mx-auto">
                    {
                        error ? <Alert type="error" message={error} /> : (<Fragment />)
                    }
                </div>
                <div className="container mx-auto">
                    <div className="text-4xl text-white font-medium text-center mb-10">
                        {baiGiang?.tenBaiGiang}
                    </div>

                    <div className="md:border-[16px] border-4 rounded-lg border-cyan-700 bg-white p-4">
                        <div className="flex justify-end absolute right-4">
                            <div className="shadow-lg">
                                <div className="bg-red-500 py-2 px-4 font-bold text-xl rounded-t">Điểm</div>
                                <div className="p-2 text-blue-500 text-4xl text-center bg-white font-medium">
                                    <span>{score}</span>
                                    <span>/{data?.length}</span>
                                </div>
                            </div>
                        </div>

                        <Tabs
                            tabPosition="left"
                            items={data?.map((item: API.QuestionListItem, i: number) => {
                                const id = String(i + 1);
                                return {
                                    label: labelRender(item, id),
                                    key: id,
                                    children: renderTab(item, i),
                                };
                            })}
                        />
                    </div>

                    <CommentComponent />
                </div>
            </main>
            <Footer />
        </>
    )
}