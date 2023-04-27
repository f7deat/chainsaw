import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Jumbotron from "@/components/jumbotron";
import { chuongTrinhHoc } from "@/services/course";
import { Card, Col, Divider, Row } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KhoaHoc() {

    const router = useRouter();

    const [data, setData] = useState<any>();

    useEffect(() => {
        if (router.query.slug) {
            chuongTrinhHoc(router.query.slug).then(response => {
                setData(response.data)
            })
        }
    }, [router.query.slug]);

    return (
        <>
            <Head>
                <title>Khóa học</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Jumbotron name="Toán học lớp một" />
            <main className="container mx-auto mt-6">
                <div className="mb-3 text-2xl font-medium">Chọn chương trình học</div>
                <Row gutter={16}>
                    {
                        data?.map((book: any) => (
                            <Col md={8} key={book.chuongTrinhHocId}>
                                <Link href={`/khoa-hoc/1/${book.chuongTrinhHocId}`}>
                                    <Card
                                        className="shadow-lg"
                                        bordered={false}
                                        cover={
                                            <picture>
                                                <img src={book.hinhAnh || 'https://placehold.jp/1x1.png'} className="w-full h-64 object-fit-cover" alt="IMG" />
                                            </picture>
                                        }
                                    >
                                        <Card.Meta title={book.tenChuongTrinhHoc} description={book.moTaChuongTrinh} />
                                    </Card>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
                <Divider />
            </main>
            <Footer />
        </>
    )
}