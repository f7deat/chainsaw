import { LoginOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, Divider, Space } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

export default function LiveClass() {

    const router = useRouter();

    const data = [
        {
            id: '1',
            name: 'Tiếng anh 3-5: Object Pronouns'
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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <ProTable headerTitle="Livestream sắp diễn ra" columns={columns} dataSource={data} />
                <Divider />
                <ProTable headerTitle="Danh sách Livestream" />
            </main>
        </>
    )
}