import { HeadTitle } from "@/components";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Jumbotron from "@/components/jumbotron";
import { chuongTrinhHoc, queryKhoaHoc } from "@/services/course";
import { Card, Col, Divider, Row, Typography } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KhoaHoc() {

    const router = useRouter();

    const [data, setData] = useState<any>();
    const [detail, setDetail] = useState<any>();

    useEffect(() => {
        if (router.query.id) {
            queryKhoaHoc(router.query.id).then(khoaHoc => {
                if (khoaHoc) {
                    setDetail(khoaHoc)
                    chuongTrinhHoc(khoaHoc.khoaHocId).then(response => {
                        setData(response)
                    })
                }
            })
        }
    }, [router]);

    return (
        <>
            <Head>
                <title>{detail?.tenKhoaHoc}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Jumbotron name={detail?.tenKhoaHoc} />
            <main className="container mx-auto mt-6">
                <HeadTitle center>Chọn chương trình học</HeadTitle>
                <Row gutter={16}>
                    {
                        data?.map((book: any) => (
                            <Col md={8} key={book.chuongTrinhHocId}>
                                <Link href={`/bai-giang/${book.chuongTrinhHocId}`}>
                                    <Card
                                        className="shadow-lg mb-4"
                                        bordered={false}
                                        cover={
                                            <picture>
                                                <img src={book.hinhAnh || 'https://placehold.jp/1x1.png'} className="w-full h-64 object-fit-cover" alt="IMG" />
                                            </picture>
                                        }
                                    >
                                        <Typography.Title level={3}>{book.tenChuongTrinhHoc}</Typography.Title>
                                        <div dangerouslySetInnerHTML={{ __html: book.moTaChuongTrinh }}></div>
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