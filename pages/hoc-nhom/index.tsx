import { Card, Empty } from "antd";
import Head from "next/head";

export default function Duo() {
    return (
        <>
            <Head>
                <title>Học nhóm</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="py-10 px-4">
                <div className="container mx-auto">
                    <div className="md:flex gap-4">
                        <div className="md:w-2/3 mb-4">
                        <div className="md:grid grid-cols-3 gap-4">
                            <Card>
                                Lớp toán 1
                            </Card>
                            <Card>
                                Lớp tiếng việt 1
                            </Card>
                            <Card>
                                Lớp tiếng anh 1
                            </Card>
                        </div>
                        </div>
                        <div className="md:w-1/3">
                            <Card title="Lịch lớp học nhóm theo tháng">
                                <Empty />
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}