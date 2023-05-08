import Header from "@/components/header/header";
import { chuongTrinhHoc } from "@/services/course";
import { StarFilled } from "@ant-design/icons";
import { Card, Col, Divider, Row } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KhoaHoc() {

    const router = useRouter();

    const [data, setData] = useState<any>();

    useEffect(() => {
        if (router.query.id) {
            chuongTrinhHoc(router.query.id).then(response => {
                setData(response.data)
            })
        }
    }, [router]);

    return (
        <>
            <Head>
                <title>Khóa học</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
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
                                                <img src={book.hinhAnh || 'https://placehold.jp/1x1.png'} className="w-full h-64 object-cover" alt="IMG" />
                                            </picture>
                                        }
                                    >
                                        
                                <div className="text-xs text-red-500 text-right">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                </div>
                                        <Card.Meta title={book.tenChuongTrinhHoc} description={book.moTaChuongTrinh} />
                                    </Card>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
                <Divider />
            </main>
        </>
    )
}