import { HeadTitle } from "@/components";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import AccountLeftBar from "@/components/tai-khoan/left-bar";
import { Card, Col, Row } from "antd";
import Head from "next/head";

export default function MyCourse() {
    const { Meta } = Card;

    return (
        <>
            <Head>
                <title>Khóa học của tôi</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="container mx-auto px-4 py-10">
                    <div className="md:flex gap-4">
                        <AccountLeftBar tab={1} />
                        <div className="flex-1">
                            <HeadTitle center>Khóa học của tôi</HeadTitle>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card
                                        hoverable
                                        cover={<picture><img alt="example" src="https://placehold.jp/350x200.png" /></picture>}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        hoverable
                                        cover={<picture><img alt="example" src="https://placehold.jp/350x200.png" /></picture>}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        hoverable
                                        cover={<picture><img alt="example" src="https://placehold.jp/350x200.png" /></picture>}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}