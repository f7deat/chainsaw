import { Title } from "@/components";
import { listSubject } from "@/services/subject";
import { EyeOutlined } from "@ant-design/icons";
import { ProCard, ProColumns } from "@ant-design/pro-components";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
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

    const columns: ColumnsType<API.Subject> = [
        {
            title: '#',
            render: (value, record, index) => index + 1
        },
        {
            title: 'Môn học',
            dataIndex: 'name'
        },
        {
            title: '',
            render: (dom, entity) => [
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/mon-hoc/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Danh sách môn học</title>
            </Head>
            <main>
                <Title subTitle="Môn học" title="Danh sách môn học" />
                <div className="shadow mb-4">
                    <ProCard title="Danh sách">
                        <Table
                            rowKey="id"
                            dataSource={subjects}
                            columns={columns}
                        />
                    </ProCard>
                </div>
            </main>
        </>
    )
}