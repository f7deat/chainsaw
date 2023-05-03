import Footer from "@/components/footer";
import Header from "@/components/header/header";
import PracticeContent from "@/components/practice/item";
import { PracticeType, practice } from "@/mock/practice";
import { listQuestion } from "@/services/course";
import { Alert, Button, Form, Input, Tabs, message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export default function LuyenTap() {
    const router = useRouter();

    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (router?.query?.id) {
            listQuestion(router.query.id).then(response => {
                if (response.data.succeeded) {
                    setData(response.data.data);
                    if (response.data.data) {
                        let point = 10 / response.data.length;
                        let temp = 0;
                        for (let index = 0; index < response.data.length; index++) {
                            const element = response.data[index];
                            if (element.ketQuaThucHien) {
                                temp += point;
                            }
                        }
                        setScore(temp);
                    }
                } else {
                    setError(response.data.errors[0].description);
                }
            })
        }
    }, [router])

    const [score, setScore] = useState<number>(0);

    const renderTab = (item: any, index: number) => (
        <div>
            <PracticeContent item={item} score={score} setScore={setScore} total={data?.length || 0} index={index} />
        </div>
    )

    return (
        <>
            <Head>
                <title>Luyện tập</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="bg-cyan-900 px-4 py-4 md:py-20 text-white">
                <div className="container mx-auto">
                    {
                        error ? <Alert type="error" message={error} /> : (<Fragment />)
                    }
                </div>
                <div className="text-5xl font-medium text-center mb-10">{data?.name}</div>
                <div className="container mx-auto">
                    <div className="md:border-[16px] border-4 rounded-lg border-cyan-700 bg-white p-4 relative">
                        <div className="flex justify-end absolute right-4">
                            <div className="border">
                                <div className="bg-red-500 py-2 px-4 font-bold text-xl rounded-t">Điểm</div>
                                <div className="p-2 text-blue-500 text-4xl text-center">
                                    <span>{score}</span>
                                    <span>/{10}</span>
                                </div>
                            </div>
                        </div>

                        <Tabs
                            tabPosition="left"
                            items={data?.map((item: any, i: number) => {
                                const id = String(i + 1);
                                return {
                                    label: id,
                                    key: id,
                                    children: renderTab(item, i),
                                };
                            })}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}