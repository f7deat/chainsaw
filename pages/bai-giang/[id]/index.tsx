import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Jumbotron from "@/components/jumbotron";
import { course } from "@/mock/course";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBaiGiang, isBought } from "@/services/course";
import { useRouter } from "next/router";
import CourseSummary from "@/components/bai-giang/summary";
import { Button, message } from "antd";
import { EditOutlined, PlayCircleOutlined, SearchOutlined } from "@ant-design/icons";

export default function CourseContent() {
    const router = useRouter();
    const [data, setData] = useState<any>();
    const [hasAccess, setHasAccess] = useState<boolean>(false);

    useEffect(() => {
        if (router.query.id) {
            getBaiGiang(router.query.id).then(response => {
                setData(response.data)
            });

            isBought(router.query.id).then(response => setHasAccess(response.data?.trangThai))
        }
    }, [router]);

    const onPractice = (item: any) => {
        console.log(item)
        const token = localStorage.getItem('access_token');
        if (!token) {
            message.info('Vui lòng đăng nhập để tham gia khóa học!');
            return;
        }
        if (!hasAccess && !item.free) {
            message.info('Bạn chưa đăng ký mua khóa học này!');
            return;
        }
        router.push(`/luyen-tap/cau-hoi/${item.id}`);
    }

    return (
        <>
            <Head>
                <title>Khóa học</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Jumbotron name="Khóa Toán nâng cao theo chuyên đề lớp 2" />
            <main className="bg-gray-100 py-4">
                <div className="container mx-auto">
                    <div className="md:flex gap-4">
                        <div className="md:w-2/3">
                            <div className="mb-4">
                                <picture>
                                    <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2020/04/09/70/6b/bai-thi-dau-vao-04.jpg" alt="IMG" className="w-full" />
                                </picture>
                            </div>

                            <div className="flex bg-white shadow rounded-lg md:mb-10 mb-4">
                                <div className="flex-grow grid grid-cols-2 font-medium text-2xl text-center">
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

                            <div className="mb-2 text-2xl">Thông tin khóa học</div>
                            <div className="bg-white p-4 rounded-lg mb-4 shadow">
                                {
                                    course.description
                                }
                            </div>
                            <div className="text-4xl font-bold mb-4">Chương trình học</div>
                            {
                                data?.map((group: any, index: number) => (
                                    <div key={index} className="bg-white mb-4">
                                        <div className="bg-blue-500 font-medium text-white text-xl px-4 py-2 rounded-t">{group.name}</div>
                                        {
                                            group.items.map((item: any) => (
                                                <div key={item.baiGiangId}>
                                                    <div className="px-4 py-2 hover:bg-blue-100 flex justify-between items-center text-lg">
                                                        <div>{item.name}</div>
                                                        <div className="flex gap-4 items-center">
                                                            <Link href={`${item.videoUrl}`}>
                                                                <Button type="link" icon={<PlayCircleOutlined />} className="text-lg flex items-center" />
                                                            </Link>
                                                            <Button type="link" onClick={() => onPractice(item)} icon={<EditOutlined />} className="text-lg flex items-center" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="md:w-1/3">
                            <CourseSummary isBought={hasAccess} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}