import { ArticleRelated, Title } from "@/components";
import { listArticle, listArticleRandom } from "@/services/article";
import { listTopic, listCourse } from "@/services/course";
import { stripeHTML } from "@/utils/formatter";
import { BookOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Pagination, PaginationProps, Rate } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
    course: {
        tenKhoaHoc: string;
        khoaHocId: number;
        moTaKhoaHoc: string;
    };
    topics: API.TopicListItem[];
    total: number;
    articles: API.Article[];
}> = async (context) => {
    const course = await listCourse(context.params?.id) as any;
    const topics = await listTopic({
        current: context.query.current || 1,
        pageSize: 12
    }, course.khoaHocId);
    const articles = await listArticleRandom() as any;
    return { props: { course, topics: topics.data, total: topics.total, articles: articles } };
};

export default function Index({ course, topics, total, articles }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter();

    const itemRender: PaginationProps['itemRender'] = (page, type, originalElement) => {
        if (type === 'prev') {
            if (page < 1) {
                return "Trang trước";
            }
            return <Link href={`/khoa-hoc/${router.query.id}?current=${page}`}>Trang trước</Link>;
        }
        if (type === 'next') {
            return <Link href={`/khoa-hoc/${router.query.id}?current=${page}`}>Trang sau</Link>;
        }
        return originalElement;
    };

    return (
        <>
            <Head>
                <title>{course?.tenKhoaHoc}</title>
                <meta name="description" content={course?.moTaKhoaHoc} />
            </Head>
            <main>
                <div className="mb-4">
                    <Breadcrumb items={[
                        {
                            title: (
                                <Link href="/">
                                    <HomeOutlined /> Trang chủ
                                </Link>
                            )
                        },
                        {
                            title: (
                                <Link href="/khoa-hoc">
                                    <BookOutlined /> Khóa học
                                </Link>
                            )
                        }
                    ]} />
                </div>
                <div className="md:mb-20 mb-10">
                    <Title subTitle="Khóa học" title={course?.tenKhoaHoc} />
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-4">
                        {
                            topics.map(topic => (
                                <div className="flex flex-col bg-white shadow rounded" key={topic.id}>
                                    <div>
                                        <Link href={`/bai-giang/${topic.id}`}>
                                            <picture className="relative overflow-hidden bg-cover bg-no-repeat block">
                                                <img src={topic.thumbnail || 'https://cdn.getvisa.vn/images/cogiao.jpg'} alt="IMG" className="mb-2 w-full rounded-t transition duration-300 ease-in-out hover:scale-110" />
                                            </picture>
                                        </Link>
                                        <div className="px-2 pb-1">
                                            <Link href={`/bai-giang/${topic.id}`}>
                                                <div className="line-clamp-2 font-medium text-blue-500 mb-1 min-h-[50px] text-lg hover:text-blue-600">{topic.name}</div>
                                            </Link>
                                            <div className="text-right mb-2">
                                                <Rate defaultValue={5} disabled />
                                            </div>
                                            <div className="line-clamp-3 text-gray-500">{stripeHTML(topic.description)}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Pagination defaultCurrent={1} total={total} pageSize={2} itemRender={itemRender} />
                </div>

                <ArticleRelated articles={articles} />
            </main>
        </>
    )
}