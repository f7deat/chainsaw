import CommentComponent from "@/components/comment";
import { BaiGiang, FreeInput, MultipleChoice, OrderChoice, SingleChoice } from "@/components/practice";
import { getBaiGiang, listQuestion, resetResult } from "@/services/course";
import { QuestionType } from "@/utils/constants";
import { CheckCircleOutlined, RedoOutlined, StopOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Alert, Button, Divider, Empty, Popconfirm, Space, Tabs, message } from "antd";
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
                <title>Luyện tập</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProCard
                title={
                    <div className="text-blue-500 text-2xl">{baiGiang?.tenBaiGiang}</div>
                }
                extra={<Popconfirm title="Bạn có chắc chắn muốn làm lại không?" onConfirm={onConfirm}>
                    <Button size="large" type="primary">
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
                <div className="flex justify-end absolute right-4 top-32">
                    <div className="shadow border">
                        <div className="bg-red-500 text-white py-2 px-4 font-bold text-xl rounded-t">Điểm</div>
                        <div className="p-2 text-blue-500 text-4xl text-center bg-white font-medium">
                            <span>{score}</span>
                            <span>/{data?.filter((x: API.QuestionListItem) => x.type !== 'baigiang').length}</span>
                        </div>
                    </div>
                </div>
                <Divider dashed />
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
        </>
    )
}