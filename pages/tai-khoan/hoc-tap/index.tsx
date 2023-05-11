import AccountLeftBar from "@/components/tai-khoan/left-bar";
import { learningHistory, learningResult } from "@/services/user";
import { CheckCircleFilled, ClockCircleFilled, EditOutlined, PlayCircleOutlined, QuestionCircleFilled } from "@ant-design/icons";
import { PageContainer, ProList } from "@ant-design/pro-components";
import { Button, Col, Row, Tooltip } from "antd";
import { PieChart } from "bizcharts";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {
    const router = useRouter();

    const [result, setResult] = useState<any>([]);
    useEffect(() => {
        learningResult().then(response => setResult(response));
    }, []);

    return (
        <>
            <Head>
                <title>Quá trình học tập</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title="Quá trình học tập">
                <div className="md:flex gap-4">
                    <AccountLeftBar tab={3} />
                    <div className="flex-1">
                        <Row gutter={16}>
                            <Col span={16}>
                                <ProList<{
                                    id: number,
                                    status: boolean
                                }>
                                    headerTitle="Bài giảng gần đây"
                                    request={learningHistory}
                                    pagination={{
                                        defaultPageSize: 10
                                    }}
                                    metas={{
                                        title: {
                                            dataIndex: 'name'
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
                                                <Button key={0} type="link" icon={<PlayCircleOutlined />} disabled className="text-lg flex items-center" />,
                                                <Button key={1} type="link" onClick={() => router.push(`/luyen-tap/cau-hoi/${entity.id}`)} icon={<EditOutlined />} className="text-lg flex items-center" />
                                            ]
                                        },
                                    }}

                                />
                            </Col>
                            <Col span={8}>
                                <PieChart
                                    data={result}
                                    appendPadding={10}
                                    angleField="value"
                                    colorField="label"
                                    radius={1}
                                    innerRadius={0.6}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </PageContainer>
        </>
    )
}