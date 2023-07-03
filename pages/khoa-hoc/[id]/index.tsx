import { Title } from "@/components";
import { chuongTrinhHoc, queryKhoaHoc } from "@/services/course";
import { BookOutlined, HomeOutlined, StarFilled } from "@ant-design/icons";
import { ProList } from "@ant-design/pro-components";
import { Breadcrumb, Rate } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
    course: {
        tenKhoaHoc: string;
        khoaHocId: number;
        moTaKhoaHoc: string;
    };
}> = async (context) => {
    const course = await queryKhoaHoc(context.params?.id);
    return { props: { course } };
};

export default function Index({ course }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
            <Head>
                <title>{course?.tenKhoaHoc}</title>
                <meta name="description" content={course?.moTaKhoaHoc} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
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
            {
                <ProList<API.ChuongTrinhHocListItem>
                    ghost
                    request={(params) => chuongTrinhHoc(params, course.khoaHocId)}
                    pagination={{
                        defaultPageSize: 8
                    }}
                    grid={{ gutter: 16, column: 4, xs: 1 }}
                    showActions="always"
                    metas={{
                        content: {
                            dataIndex: 'description',
                            render: (dom, entity) => (
                                <div className="-m-6">
                                    <picture>
                                        <img src={entity.thumbnail || 'https://cdn.getvisa.vn/images/cogiao.jpg'} alt="IMG" className="mb-2" />
                                    </picture>
                                    <div className="px-2 pb-1">
                                        <Link key={1} href={`/bai-giang/${entity.id}`}>
                                            <div className="line-clamp-2 font-medium text-blue-500 mb-1 min-h-[50px]">{entity.name}</div>
                                        </Link>
                                        <div className="text-right mb-2">
                                            <Rate defaultValue={5} disabled />
                                        </div>
                                        <div className="line-clamp-3 text-gray-500 text-sm">{entity.description}</div>
                                    </div>
                                </div>
                            )
                        },
                        actions: {
                            cardActionProps: 'actions',
                            render: (dom, entity) => [
                                <Link key={1} href={`/bai-giang/${entity.id}`}>
                                    Xem thêm
                                </Link>
                            ]
                        }
                    }}
                />
            }
        </>
    )
}