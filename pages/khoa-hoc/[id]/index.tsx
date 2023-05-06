import { HeadTitle } from "@/components";
import { chuongTrinhHoc, queryKhoaHoc } from "@/services/course";
import { PageContainer, ProList } from "@ant-design/pro-components";
import { Card, Col, Divider, Row, Typography } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KhoaHoc() {

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);
    const [detail, setDetail] = useState<any>();

    useEffect(() => {
        if (router.query.id) {
            queryKhoaHoc(router.query.id).then(khoaHoc => {
                setDetail(khoaHoc)
                setLoading(false)
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
            <PageContainer title={detail?.tenKhoaHoc}>
                {
                    detail && (
                        <ProList<API.ChuongTrinhHocListItem>
                            loading={loading}
                            headerTitle="Chọn chương trình học"
                            request={(params) => chuongTrinhHoc(params, detail.khoaHocId)}
                            pagination={{
                                defaultPageSize: 8
                            }}
                            grid={{ gutter: 16, column: 3 }}
                            showActions="always"
                            metas={{
                                title: {
                                    dataIndex: 'name'
                                },
                                content: {
                                    dataIndex: 'description',
                                    render: (dom, entity) => (
                                        <div>
                                            <picture hidden={!entity.thumbnail}>
                                                <img src={entity.thumbnail} alt="IMG" className="mb-2" />
                                            </picture>
                                            <div>{entity.description}</div>
                                        </div>
                                    )
                                },
                                actions: {
                                    cardActionProps: 'actions',
                                    render: (dom, entity) => [
                                        <Link key={1} href={`/bai-giang/${entity.id}`}>
                                            Xem thêm
                                        </Link>
                                    ]
                                }
                            }}
                        />
                    )
                }
                
                <Divider />
            </PageContainer>
        </>
    )
}