import { Title } from "@/components";
import { FacebookOutlined, LinkedinOutlined, LoginOutlined, PlayCircleOutlined, StarOutlined, TwitterOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import { ColumnType } from "antd/es/table";
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

    const columns: ColumnType<any>[] = [
        {
            title: '#',
            render: (v, r, i) => i + 1
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
                <meta name="description" content="Học trực tuyến với những giáo viên hàng đầu" />
            </Head>
            <main>
                <div className="flex flex-col md:flex-row md:gap-10 gap-4 md:p-10 p-4 h-72 rounded-3xl md:mb-10 mb-4" style={{
                    backgroundImage: 'url(https://i.imgur.com/PgKxsbb.png)'
                }}>
                    <div className="md:w-1/5"></div>
                    <div className="md:w-4/5">
                        <div className="bg-white rounded-lg p-4 opacity-75">
                            <div className="font-medium text-3xl mb-2">John Anderson</div>
                            <div className="text-gray-500 mb-2">Assistant Professor at Mcmaster University</div>
                            <div className="mb-2">
                                Thank you so much for your help. It&apos;s exactly what I&apos;ve been looking for. You won&apos;t regret it. It really saves me time and effort. Elearning is exactly what our business has been lacking.
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <StarOutlined /> 4.9 instructor Rating
                                </div>
                                <div>
                                    <UserAddOutlined /> 1,592 Students
                                </div>
                                <div>
                                    <PlayCircleOutlined /> Courses
                                </div>
                                <div className="flex gap-4">
                                    <Button icon={<FacebookOutlined />} type="primary" shape="circle" />
                                    <Button icon={<TwitterOutlined />} type="primary" shape="circle" />
                                    <Button icon={<LinkedinOutlined />} type="primary" shape="circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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