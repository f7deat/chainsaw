import MyCourse from "@/components/course/my-course";
import { getBaiGiang2 } from "@/services/course";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import { ProForm, ProFormTextArea, ProList } from "@ant-design/pro-components";
import { Breadcrumb, Divider, Empty } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

export const getServerSideProps: GetServerSideProps<{
    video: {
        id: number;
        name: string;
        video: string;
        subjectId: number;
        subject: string;
        topicId: number;
        topic: string;
    };
}> = async (context) => {
    const video = await getBaiGiang2(context.params?.id);
    console.log(video)
    return { props: { video } };
};

export default function Index({ video }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
            <Head>
                <title>{video.name}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className="container mx-auto">
                <div className="md:text-3xl text-lg font-medium text-blue-800 text-center mb-4">{video.name}</div>
                <Breadcrumb className="mb-4" items={[
                    {
                        title: (
                            <Link href="/">
                                <HomeOutlined /> Trang chủ
                            </Link>
                        )
                    },
                    {
                        title: (
                            <Link href={`/mon-hoc/${video?.subjectId}`}>
                                <BookOutlined /> {video?.subject}
                            </Link>
                        )
                    },
                    {
                        title: (
                            <Link href={`/bai-giang/${video?.topicId}`}>
                                <BookOutlined /> {video?.topic}
                            </Link>
                        )
                    }
                ]} />

                <div className="md:flex gap-4">
                    <div className="md:w-2/3">
                        <Plyr
                            source={{
                                type: 'video',
                                sources: [
                                    {
                                        src: video.video,
                                        provider: 'youtube'
                                    }
                                ]
                            }} />
                    </div>
                    <div className="md:w-1/3">
                        <div className="flex border font-bold mb-2">
                            <button className="flex-1 py-3 border-r text-blue-500">Bình luận</button>
                            <span className="flex-1 py-3 border-r flex items-center justify-center hover:text-blue-500">
                                <Link href={`/luyen-tap/cau-hoi/${video.id}`}>
                                    Bài học
                                </Link>
                            </span>
                            <button className="flex-1 py-3 border-r">Thông tin</button>
                        </div>
                        <div className="border p-4">
                            <ProList />
                            <ProForm>
                                <ProFormTextArea label="Bình luận" name="comment" rules={[{
                                    required: true,
                                    message: 'Vui lòng điền nội dung'
                                }]} />
                            </ProForm>
                        </div>
                    </div>

                </div>

                <Divider />

                <MyCourse defaultPageSize={4} />
            </main>
        </>
    )
}