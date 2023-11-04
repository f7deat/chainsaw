import { listTopicBySubjectIdServer } from "@/services/course";
import { getSubject } from "@/services/subject";
import { ArrowRightOutlined, EyeOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
    subject: API.Subject;
    topics: API.Topic[];
}> = async (context) => {
    const subject = await getSubject(context.params?.id);
    const topics = await listTopicBySubjectIdServer(context.params?.id);
    return { props: { subject, topics: topics.data } };
};

export default function Index({ subject, topics }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const columns: ProColumns<API.Topic>[] = [
        {
            title: '#',
            valueType: 'indexBorder',
        },
        {
            title: 'Khóa học',
            dataIndex: 'name',
            render: (dom, entity) => (
                <Link type="primary" href={`/bai-giang/${entity.id}`}>
                    {dom}
                </Link>
            )
        },
        {
            title: '',
            valueType: 'option',
            render: (dom, entity) => [
                <Link key="view" type="primary" href={`/bai-giang/${entity.id}`}>
                    <ArrowRightOutlined />
                </Link>
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>{subject?.name}</title>
                <meta name="description" content="Danh sách khóa học thuộc môn học" />
            </Head>
            <div className="text-3xl font-medium text-blue-900 md:mb-8 mb-4">{subject?.name}</div>
            <ProTable
                rowKey="id"
                dataSource={topics}
                columns={columns}
                search={{
                    layout: 'vertical'
                }}
            />
        </>
    )
}