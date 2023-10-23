import CommentComponent from "@/components/comment";
import { BaiGiang, DragDrop, FreeInput, MultipleChoice, OrderChoice, SingleChoice } from "@/components/practice";
import QuizContent from "@/components/practice/content";
import { getBaiGiang2, listQuestion, resetResult } from "@/services/course";
import { QuestionType } from "@/utils/constants";
import { BookOutlined, CheckCircleOutlined, GiftOutlined, HomeOutlined, InfoCircleOutlined, LeftOutlined, RedoOutlined, RightOutlined, SoundOutlined, StopOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Alert, Breadcrumb, Button, Divider, Empty, Popconfirm, Popover, Space, Tabs, Tooltip, message } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps<{
    module: {
        id: number;
        name: string;
        video: string;
        subjectId: number;
        subject: string;
        topicId: number;
        topic: string;
    };
}> = async (context) => {
    const response = await getBaiGiang2(context.params?.id);
    return { props: { module: response } };
};

export default function Index({ module }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    const [data, setData] = useState<API.QuestionListItem[]>([]);
    const [error, setError] = useState<string>();
    const [learn, setLearn] = useState<API.QuestionListItem[]>([]);
    const [quiz, setQuiz] = useState<API.QuestionListItem[]>([]);
    const [activeTab, setActiveTab] = useState<string>('learn');
    const [learnDisabled, setLearnDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (router?.query?.id) {
            listQuestion(router.query.id).then(response => {
                if (response.succeeded) {
                    if (response.data) {
                        setData(response.data);
                        const learnData = response.data.filter((x: any) => x.type === QuestionType.BAI_GIANG);
                        if (!learnData || learnData.length < 1) {
                            setActiveTab('pratice');
                            setLearnDisabled(true);
                        }
                        setLearn(learnData);
                        setQuiz(response.data.filter((x: any) => x.type !== QuestionType.BAI_GIANG));
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
                    if (response.errors) {
                        setError(response.errors[0].description);
                    } else {
                        message.error('Vui lòng đăng nhập!');
                    }
                }
            });
        }
    }, [router])

    const [score, setScore] = useState<number>(0);

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
                <title>{module?.name}</title>
                <meta name="description" content={module?.name} />
            </Head>
            <div>
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
                            title: module?.subjectId && (
                                <Link href={`/mon-hoc/${module?.subjectId}`}>
                                    <BookOutlined /> {module?.subject}
                                </Link>
                            )
                        },
                        {
                            title: module?.topicId && (
                                <Link href={`/bai-giang/${module?.topicId}`}>
                                    <BookOutlined /> {module?.topic}
                                </Link>
                            )
                        }
                    ]} />
                </div>
                <div className="text-blue-700 md:text-4xl text-2xl font-medium mb-8 text-center">{module?.name}</div>
                <ProCard
                    tabs={{
                        activeKey: activeTab,
                        onChange: (actKey) => setActiveTab(actKey),
                        items: [
                            {
                                label: 'Bài giảng',
                                children: <QuizContent items={learn} error={error} score={score} setScore={setScore} module={module} />,
                                key: 'learn',
                                disabled: learnDisabled
                            },
                            {
                                label: 'Luyện tập',
                                children: <QuizContent items={quiz} error={error} score={score} setScore={setScore} module={module} />,
                                key: 'pratice'
                            }
                        ]
                    }}
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

                </ProCard>
                <Divider />
                <div className="md:grid-cols-2"></div>
                <div className="md:grid-cols-5"></div>
                {
                    router?.query?.id && <CommentComponent id={router.query.id} />
                }
            </div>
        </>
    )
}