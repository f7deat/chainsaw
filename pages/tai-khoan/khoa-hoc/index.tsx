import AccountLeftBar from "@/components/accounts/left-bar";
import { getMyCourse } from "@/services/course";
import { BookOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { ActionType, PageContainer, ProList } from "@ant-design/pro-components";
import { Rate } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

export default function Index() {

    const actionRef = useRef<ActionType>();

    return (
        <>
            <Head>
                <title>Khóa học của tôi</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title="Khóa học của tôi">
                <div className="md:flex gap-4">
                    <AccountLeftBar tab={1} />
                    <div className="flex-1">
                        <div className="mb-4">
                            <div className="grid gap-4 md:grid-cols-4 grid-cols-2">
                                <div className="px-8 py-4 rounded shadow bg-white flex gap-4">
                                    <BookOutlined className="text-3xl text-red-500" />
                                    <div>
                                        <div className="text-sm text-gray-400">Khóa học</div>
                                        <div className="text-2xl font-bold">
                                            {actionRef.current?.pageInfo?.total}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-8 py-4 rounded shadow bg-white flex gap-4">
                                    <QuestionCircleOutlined className="text-3xl text-orange-500" />
                                    <div>
                                        <div className="text-sm text-gray-400">Câu hỏi</div>
                                        <div className="text-2xl font-bold">-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProList<API.TopicListItem>
                            ghost
                            headerTitle="Khóa học của tôi"
                            actionRef={actionRef}
                            request={getMyCourse}
                            grid={{
                                gutter: 16,
                                column: 3,
                                md: 3,
                                xs: 1,
                            }}
                            pagination={{
                                pageSize: 12
                            }}
                            showActions="always"
                            metas={{
                                content: {
                                    render: (dom, entity) => (
                                        <div className="-m-6 shadow">
                                            <picture>
                                                <img src={entity.thumbnail || 'https://cdn.getvisa.vn/images/cogiao.jpg'} alt="IMG" className="mb-2" />
                                            </picture>
                                            <div className="px-2 pb-1">
                                                <Link href={`/bai-giang/${entity.id}`}>
                                                    <div className="line-clamp-2 font-medium text-blue-500 mb-1 min-h-[45px]">{entity.name}</div>
                                                </Link>
                                                <div className="text-xs text-red-500 text-right">
                                                    <Rate defaultValue={5} />
                                                </div>
                                                <div className="line-clamp-3 text-gray-500 min-h-[72px]">{entity.description}</div>
                                            </div>
                                        </div>
                                    )
                                },
                                actions: {
                                    cardActionProps: 'actions',
                                    render: (dom, entity) => [
                                        <Link key={1} href={`/bai-giang/${entity.id}`}>
                                            Xem thêm
                                        </Link>
                                    ]
                                },
                            }}
                        />
                    </div>
                </div>
            </PageContainer>
        </>
    )
}