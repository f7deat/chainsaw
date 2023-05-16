import { chuongTrinhHoc, queryKhoaHoc } from "@/services/course";
import { StarFilled } from "@ant-design/icons";
import { PageContainer, ProList } from "@ant-design/pro-components";
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
                            grid={{ gutter: 16, column: 4 }}
                            showActions="always"
                            metas={{
                                content: {
                                    dataIndex: 'description',
                                    render: (dom, entity) => (
                                        <div className="-m-6">
                                            <picture>
                                                <img src={entity.thumbnail || 'https://cdn.getvisa.vn/images/cogiao.jpg'} alt="IMG" className="mb-2" />
                                            </picture>
                                            <div className="px-2 pb-1">
                                                <div className="line-clamp-2 font-medium text-blue-500 mb-1 min-h-[50px]">{entity.name}</div>
                                                <div className="text-xs text-red-500 text-right">
                                                    <StarFilled />
                                                    <StarFilled />
                                                    <StarFilled />
                                                    <StarFilled />
                                                    <StarFilled />
                                                </div>
                                                <div className="line-clamp-3 text-gray-500 text-sm">{entity.description}</div>
                                            </div>
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
            </PageContainer>
        </>
    )
}