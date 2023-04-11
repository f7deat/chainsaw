import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { BarChartOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import { Image, Card, Space } from "antd";
import Head from "next/head";

export default function Profile() {
    return (
        <>
            <Head>
                <title>Thông tin cá nhân</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="container mx-auto px-4 py-10">
                    <div className="md:flex gap-4">
                        <div className="md:w-1/4">
                            <Card>
                                <div className="mb-4 text-center">
                                    <Image src="https://placehold.jp/200x200.png" alt="IMG" width={200} height={200} className="rounded-full" />
                                </div>
                                <div className="text-xl text-center mb-4">Nguyễn Hiểu Minh</div>
                                <div className="px-4 py-2 rounded border border-blue-500 mb-1">
                                    <Space>
                                        <UserOutlined />
                                        <div className="text-lg">
                                            Thông tin cá nhân
                                        </div>
                                    </Space>
                                </div>
                                <div className="px-4 py-2 rounded border mb-1 hover:border-blue-500">
                                    <Space>
                                        <BookOutlined />
                                        <div className="text-lg">
                                            Khóa học của tôi
                                        </div>
                                    </Space>
                                </div>
                                <div className="px-4 py-2 rounded border mb-1 hover:border-blue-500">
                                    <Space>
                                        <BarChartOutlined />
                                        <div className="text-lg">
                                            Quá trình học tập
                                        </div>
                                    </Space>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}