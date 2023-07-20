import { Title } from "@/components";
import { listTopic, queryKhoaHoc } from "@/services/course";
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
}> = async (context) => {
    const course = await queryKhoaHoc(context.params?.id);
    const topics = await listTopic({
        current: context.query.current,
        pageSize: 12
    }, course.khoaHocId);
    return { props: { course, topics: topics.data, total: topics.total } };
};

export default function Index({ course, topics, total }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter();

    const itemRender: PaginationProps['itemRender'] = (page, type, originalElement) => {
        if (type === 'prev') {
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
                <Title subTitle="Khóa học" title={course?.tenKhoaHoc} />
                <div className="grid grid-cols-4 gap-4 mb-4">
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
                                            <div className="line-clamp-2 font-medium text-blue-500 mb-1 min-h-[50px]">{topic.name}</div>
                                        </Link>
                                        <div className="text-right mb-2">
                                            <Rate defaultValue={5} disabled />
                                        </div>
                                        <div className="line-clamp-3 text-gray-500 text-sm">{topic.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Pagination defaultCurrent={1} total={total} pageSize={2} itemRender={itemRender} />
            </main>
        </>
    )
}