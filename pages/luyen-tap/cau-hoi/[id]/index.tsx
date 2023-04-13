import Footer from "@/components/footer";
import Header from "@/components/header/header";
import PracticeContent from "@/components/practice/item";
import { PracticeType, practice } from "@/mock/practice";
import { Button, Form, Input, Tabs, message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LuyenTap() {
    const router = useRouter();

    const [score, setScore] = useState<number>(0);
    const data: any = practice[`${router.query.id}`]

    const renderTab = (item: any, index: number) => (
        <div>
            <PracticeContent item={item} score={score} setScore={setScore} total={data?.data.length || 0} index={index} />
        </div>
    )

    return (
        <>
            <Head>
                <title>{data?.name}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="bg-cyan-900 px-4 py-4 md:py-20 text-white">
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
                            items={data?.data.map((item: PracticeType, i: number) => {
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