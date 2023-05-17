import AccountLeftBar from "@/components/tai-khoan/left-bar";
import { learningHistory, learningResult } from "@/services/user";
import { BarChartOutlined, CheckCircleFilled, ClockCircleFilled, DotChartOutlined, EditOutlined, InfoCircleOutlined, PieChartOutlined } from "@ant-design/icons";
import { ProCard, ProList } from "@ant-design/pro-components";
import { Button, Empty, Tooltip } from "antd";
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

    const colors = ['text-green-500', 'text-red-500', 'text-sky-500']
    const icons = [<DotChartOutlined key={1} />, <BarChartOutlined key={2} />, <PieChartOutlined key={3} />]

    return (
        <>
            <Head>
                <title>Quá trình học tập</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="text-3xl font-medium mb-6 text-blue-800">Quá trình học tập</div>

            <div className="md:flex gap-4">
                <AccountLeftBar tab={3} />
                <div className="flex-1">
                    <div className="">
                        <div className="mb-4">
                            <div className="mb-4 grid md:grid-cols-3 grid-cols-2 gap-4">
                                {
                                    result?.map((x: any, index: number) => (
                                        <div className="shadow px-8 py-4 rounded flex items-center bg-white gap-6" key={index}>
                                            <div className={`text-5xl ${colors[index]}`}>
                                                {icons[index]}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-gray-400">{x.label}</div>
                                                <div className="text-3xl font-medium text-blue-800">{x.value}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
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
                </div>
            </div>
        </>
    )
}