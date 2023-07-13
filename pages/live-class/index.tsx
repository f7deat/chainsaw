import { Title } from "@/components";
import { LoginOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, Divider, Space, Table } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

export default function LiveClass() {

    const router = useRouter();

    const data = [
        {
            id: '1',
            name: 'Tiếng anh 3-5: Object Pronouns',
            liveTime: new Date()
        }
    ]

    const columns: ProColumns<any>[] = [
        {
            title: '#',
            valueType: 'indexBorder'
        },
        {
            title: 'Khóa học',
            dataIndex: 'name'
        },
        {
            title: 'Thời gian diễn ra',
            dataIndex: 'liveTime'
        },
        {
            title: '',
            valueType: 'option',
            render: (dom, entity) => [
                <Button key={0} type="primary" onClick={() => router.push(`/live-class/${entity.id}`)}>
                    <Space>
                        <LoginOutlined />
                        <span>Vào học</span>
                    </Space>
                </Button>
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Học trực tuyến</title>
            </Head>
            <main>
                <Title title="Lớp học trực tuyến" subTitle="Live class" />
                <Table
                    columns={columns}
                    dataSource={data} />
                <div>
                    <Title subTitle="Lived" title="Danh sách Livestream" />
                    <Table />
                </div>
            </main>
        </>
    )
}