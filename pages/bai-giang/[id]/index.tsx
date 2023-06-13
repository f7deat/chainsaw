import Head from "next/head";
import { useEffect, useState } from "react";
import { listBaiGiang, getChuongTrinhHoc, isBought, listNhomBaiGiang } from "@/services/course";
import { useRouter } from "next/router";
import CourseSummary from "@/components/bai-giang/summary";
import { Button, Divider, Tooltip, Typography, message } from "antd";
import { CheckCircleFilled, ClockCircleFilled, EditOutlined, PlayCircleOutlined, QuestionCircleFilled, SearchOutlined } from "@ant-design/icons";
import { ProCard, ProList } from "@ant-design/pro-components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Title } from "@/components";

export const getServerSideProps: GetServerSideProps<{
    topic: API.ChuongTrinhHoc;
}> = async (context) => {
    const topic = await getChuongTrinhHoc(context.params?.id);
    return { props: { topic } };
};

export default function Index({ topic }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    const [data, setData] = useState<any>();
    const [hasAccess, setHasAccess] = useState<boolean>(false);

    useEffect(() => {
        if (router.query.id) {
            listNhomBaiGiang(router.query.id).then(response => {
                setData(response)
            })
            isBought(router.query.id).then(response => setHasAccess(response))
        }
    }, [router]);

    const onPractice = (item: any) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            message.info('Vui lòng đăng nhập để tham gia khóa học!');
            return;
        }
        if (!hasAccess && !item.free) {
            message.info('Bạn chưa đăng ký mua khóa học này!');
            return;
        }
        router.push(`/luyen-tap/cau-hoi/${item.id}`);
    }

    return (
        <>
            <Head>
                <title>{topic.tenChuongTrinhHoc}</title>
                <meta name="description" content={topic.moTaChuongTrinh} />
            </Head>
            <Title subTitle="Chương trình học" title={topic.tenChuongTrinhHoc} />
            <div className="md:flex gap-4">
                <div className="md:w-2/3">

                    <div className="flex bg-white shadow rounded-lg md:mb-10 mb-4">
                        <div className="flex-grow grid grid-cols-2 font-medium md:text-2xl text-center">
                            <button>
                                <div className="border-r py-2 hover:bg-blue-100">Thông tin khóa học</div>
                            </button>
                            <button>
                                <div className="border-r py-2 hover:bg-blue-100">Chương tình học</div>
                            </button>
                        </div>
                        <div className="flex items-center justify-center py-2 w-14">
                            <SearchOutlined className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="md:text-4xl text-xl font-medium mb-4">Chương trình học</div>
                    {
                        data?.map((group: any, index: number) => (

                            <ProList<{
                                id: number,
                                name: string,
                                free: boolean,
                                status?: boolean,
                                video?: string
                            }>
                                className="mb-4"
                                rowKey="id"
                                key={group.id}
                                headerTitle={<div className=" font-medium text-2xl rounded-t text-blue-600">{group.name}</div>}
                                request={(params) => listBaiGiang({
                                    nhomBaiGiangId: group.id,
                                    ...params
                                })}
                                showActions="always"
                                metas={{
                                    title: {
                                        render: (dom, entity) => (
                                            <div className="text-lg font-medium">
                                                <div dangerouslySetInnerHTML={{
                                                    __html: entity.name
                                                }}></div>
                                            </div>
                                        )
                                    },
                                    actions: {
                                        render: (dom, entity) => [
                                            <Button
                                                key={0} type="link"
                                                icon={<PlayCircleOutlined />}
                                                disabled={!entity.video}
                                                className="text-lg flex items-center"
                                                onClick={() => router.push(`/luyen-tap/video/${entity.id}`)}
                                            />,
                                            <Button key={1} type="link" onClick={() => onPractice(entity)} icon={<EditOutlined />} className="text-lg flex items-center" />
                                        ]
                                    },
                                    avatar: {
                                        render: (dom, entity) => {
                                            if (entity.status == null) {
                                                return <div className="text-xl ml-2">
                                                    <QuestionCircleFilled className="text-gray-500" />
                                                </div>
                                            }
                                            if (entity.status) {
                                                return (
                                                    <Tooltip title="Đã hoàn thành bài giảng">
                                                        <div className="text-xl ml-2">
                                                            <CheckCircleFilled className="text-green-500" />
                                                        </div>
                                                    </Tooltip>
                                                )
                                            }
                                            return (
                                                <Tooltip title="Bài giảng đang học">
                                                    <div className="text-xl ml-2">
                                                        <ClockCircleFilled className="text-red-500" />
                                                    </div>
                                                </Tooltip>
                                            )
                                        }
                                    }
                                }}
                                rowClassName="bg-white"
                            />
                        ))
                    }
                </div>
                <div className="md:w-1/3">
                    <CourseSummary isBought={hasAccess} data={topic} />

                    <Divider />

                    <ProCard className="shadow">
                        <div className="mb-2 text-2xl font-medium">Thông tin khóa học</div>
                        <div className="bg-white p-4 rounded-lg mb-4 text-gray-600 text-base" dangerouslySetInnerHTML={{
                            __html: topic?.moTaChiTiet
                        }}></div>
                    </ProCard>
                </div>
            </div>
        </>
    )
}