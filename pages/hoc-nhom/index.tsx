import { Title } from "@/components";
import { listKhoaHoc } from "@/services/course";
import { ProCard, ProList } from "@ant-design/pro-components";
import { Calendar } from "antd";
import Head from "next/head";

export default function Duo() {

    return (
        <>
            <Head>
                <title>Học nhóm</title>
                <meta name="description" content="Lớp học theo nhóm" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <Title subTitle="Học nhóm" title="Lớp học nhóm" />
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
                            <ProCard title="Lịch lớp học nhóm theo tháng" bordered headerBordered>
                                <Calendar fullscreen={false} />
                            </ProCard>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}