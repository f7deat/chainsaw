import { getClassroomBySchool } from "@/services/classroom";
import { getSchoolByUser } from "@/services/school";
import { listRefer } from "@/services/user";
import { EyeOutlined, GlobalOutlined } from "@ant-design/icons";
import { ProCard, ProColumns, ProList, ProTable } from "@ant-design/pro-components";
import { Button, Divider } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {

    const router = useRouter();
    const [school, setSchool] = useState<API.School>();
    useEffect(() => {
        getSchoolByUser().then(response => {
            setSchool(response);
        })
    }, []);

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
            render: (dom, entity) => [
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/tai-khoan/hoc-tap/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Thu nhập của tôi</title>
            </Head>
            <div className="md:flex gap-4">
                <div className="md:w-1/4">
                    <ProCard title={school?.name} headerBordered>
                        {
                            school?.id && (
                                <ProList
                                    pagination={{
                                        pageSize: 5
                                    }}
                                    ghost
                                    headerTitle="Danh sách lớp"
                                    request={(params) => getClassroomBySchool(params, school?.id)}
                                    metas={{
                                        title: {
                                            dataIndex: 'tenLopHoc'
                                        },
                                        actions: {
                                            render: () => <Button type="link">Chi tiết</Button>
                                        }
                                    }}
                                />
                            )
                        }
                        <Divider />
                        <div className="text-gray-500">
                            <GlobalOutlined /> {school?.address}, {school?.district}, {school?.province}
                        </div>
                    </ProCard>
                </div>
                <div className="md:w-3/4">
                    <ProTable<API.ReferListItem>
                        search={{
                            layout: 'vertical'
                        }}
                        request={listRefer}
                        rowKey="id"
                        columns={columns}
                    />
                </div>
            </div>
        </>
    )
}