import CommentComponent from "@/components/comment";
import { BaiGiang, FreeInput, MultipleChoice, OrderChoice, SingleChoice } from "@/components/practice";
import { getBaiGiang, listQuestion, resetResult } from "@/services/course";
import { playAudio } from "@/utils/audio";
import { QuestionType } from "@/utils/constants";
import { ArrowLeftOutlined, ArrowRightOutlined, BookOutlined, CheckCircleOutlined, GiftOutlined, HomeOutlined, InfoCircleOutlined, RedoOutlined, SoundOutlined, StopOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Alert, Breadcrumb, Button, Empty, Popconfirm, Popover, Space, Tabs, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export default function LuyenTap() {
    const router = useRouter();
    const [data, setData] = useState<API.QuestionListItem[]>([]);
    const [error, setError] = useState<string>();
    const [module, setModule] = useState<any>();
    const [activeKey, setActiveKey] = useState<string>('0');

    useEffect(() => {
        if (router?.query?.id) {
            listQuestion(router.query.id).then(response => {
                if (response.succeeded) {
                    if (response.data) {
                        setData(response.data);
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
                setModule(response);
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
        } else if (item.type === QuestionType.SORTABLE) {
            return <OrderChoice data={item} index={index} score={score} setScore={setScore} />
        }
        return <SingleChoice data={item} index={index} score={score} setScore={setScore} />
    }

    const labelRender = (item: API.QuestionListItem, index: number) => {
        if (item.isCompleted) {
            if (item.result) {
                return (
                    <Space>
                        <span className="text-lg text-green-500 font-bold">{index}</span>
                        <CheckCircleOutlined className="text-green-500" />
                    </Space>
                )
            } else {
                return (
                    <Space>
                        <span className="text-lg text-red-500 font-bold">{index}</span>
                        <StopOutlined className="text-red-500" />
                    </Space>
                )
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

    const onNextTab = (isNext: boolean) => {
        const newKey = isNext ? (Number(activeKey)) + 1 : (Number(activeKey)) - 1;
        setActiveKey(newKey.toString());
        onSound(newKey)
    }

    const onSound = (index: number) => {
        const question = data[index];
        if (question?.suggestion.endsWith('.mp3') || question?.suggestion.endsWith('.m4a')) {
            playAudio(question?.suggestion);
        }
    }

    const speak = (text: string) => {
        const doc = document.createElement('div');
        doc.innerHTML = text;
        playAudio(`https://texttospeech.responsivevoice.org/v1/text:synthesize?text=${doc.textContent}&lang=vi&engine=g1&name=&pitch=0.5&rate=0.5&volume=1&key=kvfbSITh&gender=female`)
    };

    const ShowMessage = (item: API.QuestionListItem) => {
        if (item.type === 'sapxep') {
            return;
        }
        if (item.isCompleted && item.result) {
            return <Alert message="Bạn đã hoàn thành chính xác câu hỏi này" type="success" showIcon className="text-lg" closable />
        }
        if (item.isCompleted && !item.result) {
            return <Alert message="Bạn đã trả lời sai câu hỏi này" type="error" showIcon className="text-lg" closable />
        }
        return <Fragment />
    }

    return (
        <>
            <Head>
                <title>{module?.name} - {module?.subject}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link href="/">
                        <HomeOutlined /> Trang chủ
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link href={`/mon-hoc/${module?.subjectId}`}>
                        <BookOutlined /> {module?.subject}
                    </Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="text-blue-700 md:text-4xl text-2xl font-medium mb-8 -mt-4 text-center">{module?.name}</div>
            <ProCard
                title={(
                    <div className="p-2 text-blue-500 text-2xl text-center bg-white font-medium flex gap-2">
                        <GiftOutlined />
                        <span>Điểm: </span>
                        <span className="text-red-500">{score}/{data?.filter((x: API.QuestionListItem) => x.type !== 'baigiang').length}</span>
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
                            type="card"
                            activeKey={activeKey}
                            tabPosition="top"
                            items={data?.map((item: API.QuestionListItem, i: number) => {
                                const id = String(i);
                                return {
                                    label: labelRender(item, i + 1),
                                    key: id,
                                    children: (
                                        <div>
                                            {renderTab(item, i)}
                                            <div className="mb-4">
                                                {ShowMessage(item)}
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                {
                                                    (module?.subjectId === 1 && item.title) && (
                                                        <Button className="flex items-center" onClick={() => speak(item.title)} icon={<SoundOutlined />}>Nghe đọc bài</Button>
                                                    )
                                                }
                                                {
                                                    (module?.subjectId === 1 && item.suggestion) && (
                                                        <Popover content={
                                                            <div dangerouslySetInnerHTML={{ __html: item.suggestion }} />
                                                        }>
                                                            <Button type="link">
                                                                <Space>
                                                                    <InfoCircleOutlined /> Gợi ý
                                                                </Space>
                                                            </Button>
                                                        </Popover>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    ),
                                };
                            })}
                            onTabClick={(activeKey) => {
                                setActiveKey(activeKey);
                                onSound(Number(activeKey));
                            }}
                        />
                    ) : <Empty />
                }
                {
                    data && (
                        <div className="flex mt-4 justify-between">
                            <Button type="primary" disabled={activeKey === "0"} onClick={() => onNextTab(false)}>
                                <Space>
                                    <ArrowLeftOutlined />
                                    Câu hỏi trước
                                </Space>
                            </Button>
                            <Button type="primary" disabled={activeKey === (data?.length - 1).toString()} onClick={() => onNextTab(true)}>
                                <Space>
                                    Câu hỏi sau
                                    <ArrowRightOutlined />
                                </Space>
                            </Button>
                        </div>
                    )
                }
            </ProCard>
            <div className="md:grid-cols-2"></div>
            <div className="md:grid-cols-5"></div>
            <CommentComponent />
        </>
    )
}