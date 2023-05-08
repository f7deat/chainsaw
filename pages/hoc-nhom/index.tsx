import { listKhoaHoc } from "@/services/course";
import { UserOutlined } from "@ant-design/icons";
import { ProList } from "@ant-design/pro-components";
import { Avatar, Calendar, Card } from "antd";
import Head from "next/head";

export default function Duo() {

    return (
        <>
            <Head>
                <title>Học nhóm</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="py-10 px-4">
                <div className="container mx-auto">
                    <div className="md:flex gap-4">
                        <div className="md:w-2/3 mb-4">
                            <ProList<{
                                id: number;
                                name: string;
                            }>
                                rowKey="id"
                                request={listKhoaHoc}
                                grid={{
                                    md: 3,
                                    column: 3
                                }}
                                headerTitle="Khóa học"
                                metas={{
                                    title: {
                                        render: (dom, entity) => (
                                            <div className="line-clamp-2">{entity.name}</div>
                                        )
                                    }
                                }} />
                        </div>
                        <div className="md:w-1/3">
                            <Card title="Lịch lớp học nhóm theo tháng">
                                <Calendar fullscreen={false} />
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}