import { ArticleRelated, Title } from "@/components";
import { listArticleRandom } from "@/services/article";
import { listSubject } from "@/services/subject";
import { ExportOutlined, GlobalOutlined } from "@ant-design/icons";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
    subjects: API.Subject[];
    articles: API.Article[];
}> = async (context) => {
    const subjects = await listSubject({
        current: context.params?.current,
        pageSize: 10
    });
    const articles = await listArticleRandom();
    return { props: { subjects: subjects.data, articles } };
};

export default function Index({ subjects, articles }: InferGetServerSidePropsType<typeof getServerSideProps>) {

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
        return <GlobalOutlined style={{ color: '#5B72EE' }} />
    }

    return (
        <>
            <Head>
                <title>Danh sách môn học</title>
                <meta name="description" content="Danh sách các môn học" />
            </Head>
            <main>
                <Title subTitle="Môn học" title="Danh sách môn học" />
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-4 mb-4">
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
                                    <div className="text-gray-400 px-2 text-center">
                                        Nhấn để xem thông tin chi tiết
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <ArticleRelated articles={articles} />
            </main>
        </>
    )
}