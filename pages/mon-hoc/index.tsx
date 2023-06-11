import { Title } from "@/components";
import { listSubject } from "@/services/subject";
import { EyeOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
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

    const columns: ProColumns<any>[] = [
        {
            title: '#',
            valueType: 'indexBorder',
        },
        {
            title: 'Môn học',
            dataIndex: 'name'
        },
        {
            title: '',
            valueType: 'option',
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
            <Title subTitle="Môn học" title="Danh sách môn học" />
            <div className="shadow mb-4">
                <ProTable
                    search={{
                        layout: 'vertical'
                    }}
                    rowKey="id"
                    dataSource={subjects}
                    columns={columns}
                />
            </div>
        </>
    )
}