import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { getTopic, isBought, listNhomBaiGiang } from "@/services/course";
import { useRouter } from "next/router";
import CourseSummary from "@/components/bai-giang/summary";
import { Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ArticleRelated, Title } from "@/components";
import { AppContext } from "@/models/app-context";
import { listArticleRandom } from "@/services/article";
import ModuleList from "@/components/module/list";

export const getServerSideProps: GetServerSideProps<{
    topic: API.ChuongTrinhHoc;
    articles: API.Article[];
}> = async (context) => {
    const topic = await getTopic(context.params?.id) as any;
    const articles = await listArticleRandom() as any;
    return { props: { topic, articles } };
};

export default function Index({ topic, articles }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    const [data, setData] = useState<any>();
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const { user } = useContext<API.AppContext>(AppContext);

    useEffect(() => {
        if (router?.query?.id) {
            listNhomBaiGiang(router.query.id).then(response => {
                setData(response)
            });
            if (user) {
                isBought(router.query.id).then(response => {
                    setHasAccess(response);
                })
            }
        }
    }, [router, user]);

    return (
        <>
            <Head>
                <title>{topic.tenChuongTrinhHoc}</title>
                <meta name="description" content={topic.moTaChuongTrinh} />
            </Head>
            <Title subTitle="Chương trình học" title={topic.tenChuongTrinhHoc} />
            <div className="md:flex gap-4">
                <div className="md:w-2/3">

                    <div className="flex bg-white shadow rounded-lg md:mb-10 mb-4">
                        <div className="flex-grow grid grid-cols-2 font-medium md:text-2xl text-center">
                            <button>
                                <div className="border-r py-2 hover:bg-blue-100">Thông tin khóa học</div>
                            </button>
                            <button>
                                <div className="border-r py-2 hover:bg-blue-100">Chương tình học</div>
                            </button>
                        </div>
                        <div className="flex items-center justify-center py-2 w-14">
                            <SearchOutlined className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="md:text-4xl text-xl font-medium mb-4">Chương trình học</div>
                    {
                        data?.map((group: any, index: number) => (
                            <ModuleList key={group.id} moduleGroupId={group.id} moduleGroupName={group.name} />
                        ))
                    }
                </div>
                <div className="md:w-1/3">
                    <CourseSummary isBought={hasAccess} data={topic} />

                    <Divider />

                    <ProCard className="shadow">
                        <div className="mb-2 text-2xl font-medium">Thông tin khóa học</div>
                        <div className="bg-white p-4 rounded-lg mb-4 text-gray-600 text-base" dangerouslySetInnerHTML={{
                            __html: topic?.moTaChiTiet
                        }}></div>
                    </ProCard>

                    <Divider />
                </div>
            </div>
            <ArticleRelated articles={articles} />
        </>
    )
}