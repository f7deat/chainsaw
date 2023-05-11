import Head from "next/head";
import { useEffect, useState } from "react";
import { listBaiGiang, getChuongTrinhHoc, isBought, listNhomBaiGiang } from "@/services/course";
import { useRouter } from "next/router";
import CourseSummary from "@/components/bai-giang/summary";
import { Button, Divider, Tooltip, Typography, message } from "antd";
import { CheckCircleFilled, ClockCircleFilled, EditOutlined, PlayCircleOutlined, QuestionCircleFilled, SearchOutlined } from "@ant-design/icons";
import { ProList } from "@ant-design/pro-components";

export default function CourseContent() {
    const router = useRouter();
    const [data, setData] = useState<any>();
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const [chuongTrinhHoc, setChuongTrinhHoc] = useState<any>();

    useEffect(() => {
        if (router.query.id) {
            listNhomBaiGiang(router.query.id).then(response => {
                setData(response)
            })
            getChuongTrinhHoc(router.query.id).then(response => {
                setChuongTrinhHoc(response)
            })
            isBought(router.query.id).then(response => setHasAccess(response?.trangThai))
        }
    }, [router]);

    const onPractice = (item: any) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            message.info('Vui lòng đăng nhập để tham gia khóa học!');
            return;
        }
        if (!hasAccess && !item.free) {
            message.info('Bạn chưa đăng ký mua khóa học này!');
            return;
        }
        router.push(`/luyen-tap/cau-hoi/${item.id}`);
    }

    return (
        <>
            <Head>
                <title>{chuongTrinhHoc?.tenChuongTrinhHoc}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Typography.Title level={3}>{chuongTrinhHoc?.tenChuongTrinhHoc}</Typography.Title>
            <Divider dashed />
            <div className="md:flex gap-4">
                <div className="md:w-2/3">

                    <div className="flex bg-white shadow rounded-lg md:mb-10 mb-4">
                        <div className="flex-grow grid grid-cols-2 font-medium text-2xl text-center">
                            <button>
                                <div className="border-r py-2 hover:bg-blue-100">Thông tin khóa học</div>
                            </button>
                            <button>
                                <div className="border-r py-2 hover:bg-blue-100">Chương tình học</div>
                            </button>
                        </div>
                        <div className="flex items-center justify-center py-2 w-14">
                            <SearchOutlined className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="mb-2 text-2xl font-medium">Thông tin khóa học</div>
                    <div className="bg-white p-4 rounded-lg mb-4 text-gray-600" dangerouslySetInnerHTML={{
                        __html: chuongTrinhHoc?.moTaChiTiet
                    }}>
                    </div>
                    <div className="text-4xl font-medium mb-4">Chương trình học</div>
                    {
                        data?.map((group: any, index: number) => (

                            <ProList<{
                                id: number,
                                name: string,
                                free: boolean,
                                status?: boolean
                            }>
                                className="mb-4"
                                rowKey="id"
                                key={group.id}
                                headerTitle={<div className=" font-medium text-2xl rounded-t text-blue-600">{group.name}</div>}
                                request={(params) => listBaiGiang({
                                    nhomBaiGiangId: group.id,
                                    ...params
                                })}
                                showActions="always"
                                metas={{
                                    title: {
                                        render: (dom, entity) => (
                                            <div className="text-lg font-medium">
                                                <div>{entity.name}</div>
                                            </div>
                                        )
                                    },
                                    actions: {
                                        render: (dom, entity) => [
                                            <Button key={0} type="link" icon={<PlayCircleOutlined />} disabled className="text-lg flex items-center" />,
                                            <Button key={1} type="link" onClick={() => onPractice(entity)} icon={<EditOutlined />} className="text-lg flex items-center" />
                                        ]
                                    },
                                    avatar: {
                                        render: (dom, entity) => {
                                            if (entity.status == null) {
                                                return <div className="text-xl ml-2">
                                                    <QuestionCircleFilled className="text-gray-500" />
                                                </div>
                                            }
                                            if (entity.status) {
                                                return (
                                                    <Tooltip title="Đã hoàn thành bài giảng">
                                                        <div className="text-xl ml-2">
                                                            <CheckCircleFilled className="text-green-500" />
                                                        </div>
                                                    </Tooltip>
                                                )
                                            }
                                            return (
                                                <Tooltip title="Bài giảng đang học">
                                                    <div className="text-xl ml-2">
                                                        <ClockCircleFilled className="text-red-500" />
                                                    </div>
                                                </Tooltip>
                                            )
                                        }
                                    }
                                }}
                                rowClassName="bg-white"
                            />
                        ))
                    }
                </div>
                <div className="md:w-1/3">
                    <CourseSummary isBought={hasAccess} data={chuongTrinhHoc} />
                </div>
            </div>
        </>
    )
}