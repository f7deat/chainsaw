import { Title } from "@/components";
import { listSubject } from "@/services/subject";
import { BookOutlined, ExportOutlined, EyeOutlined, GlobalOutlined } from "@ant-design/icons";
import { ProCard, ProColumns } from "@ant-design/pro-components";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";

export const getServerSideProps: GetServerSideProps<{
    subjects: API.Subject[];
}> = async (context) => {
    const subjects = await listSubject({
        current: context.params?.current,
        pageSize: 10
    });
    return { props: { subjects: subjects.data } };
};

export default function Index({ subjects }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const bg = (id: number) => {
        if (id === 1) {
            return '#49BBBD4D'; 
        }
        return '#5B72EE4D';
    }

    const icon = (id: number) => {
        if (id === 1) {
            return <ExportOutlined style={{ color: '#49BBBD' }} />
        }
        return <GlobalOutlined style={{ color: '#5B72EE' }}  />
    }

    return (
        <>
            <Head>
                <title>Danh sách môn học</title>
                <meta name="description" content="Danh sách các môn học" />
            </Head>
            <main>
                <Title subTitle="Môn học" title="Danh sách môn học" />
                <div className="grid grid-cols-4 md:gap-20 gap-4">
                    {
                        subjects.map(subject => (
                            <div key={subject.id} className="shadow bg-white rounded-lg">
                                <div className="flex flex-col items-center justify-center gap-4 h-64">
                                    <div className="w-20 h-20 rounded-lg flex items-center justify-center" style={{
                                        backgroundColor: bg(subject.id),
                                        fontSize: 30
                                    }}>
                                        {icon(subject.id)}
                                    </div>
                                    <Link href={`/mon-hoc/${subject.id}`}>
                                        <div className="text-2xl font-medium hover:text-blue-500">{subject.name}</div>
                                    </Link>
                                    <div className="text-gray-400">
                                        Nhấn để xem thông tin chi tiết
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </>
    )
}