import { ArticleRelated, Title } from "@/components";
import { getArticle, listArticle } from "@/services/article";
import { EyeOutlined } from "@ant-design/icons";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
    article: API.ArticleDetail;
    articles: API.Article[];
}> = async (context) => {
    const article = await getArticle(context.params?.id);
    const articles = await listArticle({
        current: 1,
        pageSize: 3
    });
    return { props: { article, articles: articles.data } };
};

export default function Index({ article, articles }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>{article.title}</title>
            </Head>
            <main>
                <Title subTitle="Bài viết" title={article.title} />
                <div className="bg-white shadow p-4 md:mb-10 mb-4">
                    <div dangerouslySetInnerHTML={{ __html: article.detail }} />

                    <div className="py-3">
                        <Link href="/">
                            <span className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200">{article.categoryName}</span>
                        </Link>
                    </div>

                    <div className="border-b py-1"></div>

                    <div className="py-4 text-sm text-gray-400 text-right">
                        <EyeOutlined /> {article.counter} Lượt xem
                    </div>
                </div>
                <div className="mb-4">
                    <ArticleRelated articles={articles} />
                </div>
            </main>
        </>
    )
}