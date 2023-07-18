import { Title } from "@/components";
import { listArticle } from "@/services/article";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
    articles: API.Article[];
    total: number;
    current: number;
}> = async (context) => {
    const articles = await listArticle({
        current: Number(context?.query?.current || 1),
        pageSize: 20
    });
    return { props: { articles: articles.data, total: articles.total, current: Number(context?.query?.current || 1) } };
};

export default function Index({ articles, total, current }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter();

    const columns: ColumnsType<API.Article> = [
        {
            title: '#',
            dataIndex: 'id',
            render: (dom, record, index) => index + 1
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            render: (dom, record) => (
                <Link href={`/tin-tuc/${record.seo}`}>{dom}</Link>
            )
        }
    ]

    return (
        <>
            <Head>
                <title>Tin tức</title>
            </Head>
            <main>
                <Title subTitle="News" title="Tin tức mới" />
                <Table dataSource={articles} columns={columns} pagination={{
                    pageSize: 20,
                    current: current,
                    total: total,
                    onChange(page, pageSize) {
                        router.push(`/tin-tuc?current=${page}`);
                    },
                }} rowKey="id" />
            </main>
        </>
    )
}