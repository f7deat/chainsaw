import { AddStudentForm } from "@/components";
import { getClassroom, getStudentInClassroom } from "@/services/classroom";
import { EyeOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { ProCard, ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, Empty, Space } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {

    const router = useRouter();
    const [classroom, setClassroom] = useState<{
        tenLopHoc: string
    }>();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (router?.query?.id) {
            getClassroom(router.query.id).then(response => {
                setClassroom(response)
            })
        }
    }, [router]);

    const columns: ProColumns<API.ReferListItem>[] = [
        {
            title: '#',
            valueType: 'indexBorder',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber'
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dateOfBirth',
            valueType: 'date',
            search: false
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            valueEnum: {
                true: 'Nam',
                false: 'Nữ'
            }
        },
        {
            title: '',
            valueType: 'option',
            render: (dom: any, entity: { id: any; }) => [
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/tai-khoan/hoc-tap/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>{classroom?.tenLopHoc}</title>
                <meta name="description" content={classroom?.tenLopHoc} />
            </Head>
            <div className="text-3xl font-medium mb-4">{classroom?.tenLopHoc}</div>
            <div className="md:flex gap-4">
                <div className="md:w-1/4">
                    <div className="px-8 py-4 rounded bg-white shadow flex gap-4 items-center mb-4">
                        <div className="text-3xl text-red-500">
                            <UserOutlined />
                        </div>
                        <div className="flex-1">
                            <div className="text-gray-500">Sĩ số</div>
                            <div className="text-2xl">-</div>
                        </div>
                    </div>
                    <ProCard className="shadow" title="Bảng thi đua" headerBordered>
                        <Empty />
                    </ProCard>
                </div>
                <div className="md:w-3/4">
                    <div className="mb-4 text-right">
                        <Button type="primary" onClick={() => setOpen(true)}>
                            <Space>
                                <UserAddOutlined /> Thêm học sinh
                            </Space>
                        </Button>
                    </div>
                    {
                        router?.query?.id && (
                            <ProTable
                                rowKey="id"
                                search={{
                                    layout: 'vertical'
                                }}
                                columns={columns}
                                request={(params: any) => getStudentInClassroom(params, router.query.id)} />
                        )
                    }
                </div>
            </div>
            <AddStudentForm open={open} setOpen={setOpen} />
        </>
    )
}