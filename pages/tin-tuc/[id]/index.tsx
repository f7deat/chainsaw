import { Title } from "@/components";
import { getArticle } from "@/services/article";
import { EyeOutlined } from "@ant-design/icons";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps<{
    article: API.Article;
}> = async (context) => {
    const article = await getArticle(context.params?.id);
    return { props: { article } };
};

export default function Index({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>{article.title}</title>
            </Head>
            <main>
                <Title subTitle="Bài viết" title={article.title} />
                <div className="bg-white shadow p-4">
                    <div dangerouslySetInnerHTML={{ __html: article.detail}} />
                    <div className="py-4 text-sm text-gray-400 text-right">
                        <EyeOutlined /> {article.counter} Lượt xem
                    </div>
                </div>
            </main>
        </>
    )
}