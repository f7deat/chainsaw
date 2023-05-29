import CommentComponent from "@/components/comment";
import { BaiGiang, FreeInput, MultipleChoice, OrderChoice, SingleChoice } from "@/components/practice";
import { getBaiGiang, listQuestion, resetResult } from "@/services/course";
import { playAudio } from "@/utils/audio";
import { QuestionType } from "@/utils/constants";
import { CheckCircleOutlined, GifOutlined, GiftOutlined, RedoOutlined, StopOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Alert, Button, Empty, Popconfirm, Space, Tabs, message } from "antd";
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
        }
        else if (item.type === QuestionType.SAPXEP) {
            return <OrderChoice data={item} index={index} score={score} setScore={setScore} />
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

    const onConfirm = async () => {
        const response = await resetResult(router.query.id);
        if (response.succeeded) {
            message.success('Thực hiện thành công!');
            window.location.reload();
        } else {
            message.error('Có lỗi xảy ra!');
        }
    }

    return (
        <>
            <Head>
                <title>{baiGiang?.tenBaiGiang}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="text-blue-700 md:text-4xl font-medium mb-8 -mt-4 text-center">{baiGiang?.tenBaiGiang}</div>
            <ProCard
                title={(
                    <div className="p-2 text-blue-500 text-2xl text-center bg-white font-medium flex gap-2">
                        <GiftOutlined />
                        <span>Điểm: </span>
                        <span>{score}/{data?.filter((x: API.QuestionListItem) => x.type !== 'baigiang').length}</span>
                    </div>
                )}
                className="shadow mb-4"
                headerBordered
                extra={<Popconfirm title="Bạn có chắc chắn muốn làm lại không?" onConfirm={onConfirm}>
                    <Button type="primary">
                        <Space>
                            <RedoOutlined />
                            Làm lại
                        </Space>
                    </Button>
                </Popconfirm>}
            >
                {
                    error ? <Alert type="error" message={error} /> : (<Fragment />)
                }

                {
                    data?.length > 0 ? (
                        <Tabs
                            tabPosition="top"
                            style={{ height: 1000 }}
                            items={data?.map((item: API.QuestionListItem, i: number) => {
                                const id = String(i + 1);
                                return {
                                    label: labelRender(item, id),
                                    key: item.id.toString(),
                                    children: renderTab(item, i),
                                };
                            })}
                            onTabClick={(activeKey) => {
                                const question = data?.find(x => x.id.toString() === activeKey)
                                if (question && question.type === QuestionType.BAI_GIANG) {
                                    playAudio(question?.suggestion);
                                }
                            }}
                        />
                    ) : <Empty />
                }

            </ProCard>
            <div className="md:grid-cols-2"></div>
            <CommentComponent />
        </>
    )
}