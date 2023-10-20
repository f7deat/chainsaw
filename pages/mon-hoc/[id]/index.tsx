import { listTopicBySubjectIdServer } from "@/services/course";
import { getSubject } from "@/services/subject";
import { EyeOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<{
    subject: API.Subject;
    topics: API.Topic[];
}> = async (context) => {
    const subject = await getSubject(context.params?.id);
    const topics = await listTopicBySubjectIdServer(context.params?.id);
    return { props: { subject, topics: topics.data } };
};

export default function Index({ subject, topics }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter();

    const columns: ProColumns<API.Topic>[] = [
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
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/bai-giang/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>{subject?.name}</title>
            </Head>
            <div className="text-3xl font-medium text-blue-900 md:mb-8 mb-4">{subject?.name}</div>
            {
                router?.query?.id && (
                    <ProTable
                        rowKey="id"
                        dataSource={topics}
                        columns={columns}
                    />
                )
            }
        </>
    )
}