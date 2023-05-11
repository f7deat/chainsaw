import CommentComponent from "@/components/comment";
import { BaiGiang, FreeInput, MultipleChoice, SingleChoice } from "@/components/practice";
import { getBaiGiang, listQuestion } from "@/services/course";
import { QuestionType } from "@/utils/constants";
import { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Alert, Divider, Empty, Space, Tabs } from "antd";
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
                        const length = response.data.filter((x: API.QuestionListItem) => x.type !== 'baigiang').length;
                        console.log(response.data)
                        for (let index = 0; index < length; index++) {
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
        if (item.type === QuestionType.FREE_INPUT) {
            return <FreeInput item={item} score={score} setScore={setScore} index={index} />
        } else if (item.type === QuestionType.MULTIPLE_CHOICE) {
            return <MultipleChoice data={item} index={index} score={score} setScore={setScore} />
        } else if (item.type === QuestionType.BAI_GIANG) {
            return <BaiGiang data={item} index={index} />
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
            <PageContainer title={baiGiang?.tenBaiGiang}>
                {
                    error ? <Alert type="error" message={error} /> : (<Fragment />)
                }

                <ProCard>
                    <div className="flex justify-end absolute right-4">
                        <div className="shadow border">
                            <div className="bg-red-500 text-white py-2 px-4 font-bold text-xl rounded-t">Điểm</div>
                            <div className="p-2 text-blue-500 text-4xl text-center bg-white font-medium">
                                <span>{score}</span>
                                <span>/{data?.filter((x: API.QuestionListItem) => x.type !== 'baigiang').length}</span>
                            </div>
                        </div>
                    </div>
                    {
                        data?.length > 0 ? (
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
                        ) : <Empty />
                    }

                </ProCard>

                <CommentComponent />
                <Divider />
            </PageContainer>
        </>
    )
}