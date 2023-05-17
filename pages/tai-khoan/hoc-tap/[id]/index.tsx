import AccountLeftBar from "@/components/tai-khoan/left-bar";
import { learningHistory, learningResult } from "@/services/user";
import { CheckCircleFilled, ClockCircleFilled, EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { PageContainer, ProCard, ProList } from "@ant-design/pro-components";
import { Button, Col, Empty, Row, Tooltip } from "antd";
import { PieChart } from "bizcharts";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {
    const router = useRouter();

    const [result, setResult] = useState<any>([]);
    const [tab, setTab] = useState<string>('learning-history');

    useEffect(() => {
        if (router?.query?.id) {
            learningResult(router.query.id).then(response => setResult(response));
        }
    }, [router]);

    return (
        <>
            <Head>
                <title>Quá trình học tập</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title="Quá trình học tập">
                <div className="md:flex gap-4">
                    <AccountLeftBar tab={3} />
                    <div className="flex-1">
                        <div className="md:flex gap-4">
                            <div className="md:w-2/3">
                                <ProCard 
                                tabs={{
                                    activeKey: tab,
                                    tabPosition: 'top',
                                    items: [
                                        {
                                            label: 'Kết quả học tập',
                                            key: 'learning-history',
                                            children: <ProList<{
                                                id: number,
                                                status: boolean
                                            }>
                                                ghost
                                                headerTitle="Bài giảng gần đây"
                                                request={(params) => learningHistory(params, router?.query?.id)}
                                                pagination={{
                                                    pageSize: 5
                                                }}
                                                metas={{
                                                    title: {
                                                        dataIndex: 'name'
                                                    },
                                                    description: {
                                                        dataIndex: 'modifiedDate',
                                                        valueType: 'fromNow'
                                                    },
                                                    avatar: {
                                                        render: (dom, entity) => {
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
                                                    },
                                                    actions: {
                                                        render: (dom, entity) => [
                                                            <Tooltip title="Thông tin chi tiết" key="info">
                                                                <Button className="text-lg text-gray-500 flex items-center" type="link" icon={<InfoCircleOutlined />} 
                                                                onClick={() => router.push(`/tai-khoan/hoc-tap/chi-tiet/${entity.id}?userId=${router.query?.id}`)} />
                                                            </Tooltip>,
                                                            <Button key={1} type="link" onClick={() => router.push(`/luyen-tap/cau-hoi/${entity.id}`)} icon={<EditOutlined />} className="text-lg flex items-center" />
                                                        ]
                                                    },
                                                }}

                                            />,
                                        },
                                        {
                                            label: 'Thành tích',
                                            key: 'achivement',
                                            children: <Empty />,
                                        },
                                    ],
                                    onChange: (key) => {
                                        setTab(key);
                                    },
                                }} />

                            </div>
                            <div className="md:w-1/3">
                                {/* <PieChart
                                    data={result}
                                    appendPadding={10}
                                    angleField="value"
                                    colorField="label"
                                    radius={1}
                                    innerRadius={0.6}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </>
    )
}