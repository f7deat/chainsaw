import { getClassroomBySchool } from "@/services/classroom";
import { getSchoolByUser } from "@/services/school";
import { getCurrentUser, listRefer } from "@/services/user";
import { ArrowRightOutlined, BarChartOutlined, EyeOutlined, GlobalOutlined, HeatMapOutlined, HomeOutlined, InfoCircleOutlined, MoneyCollectOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { ProCard, ProColumns, ProList, ProTable } from "@ant-design/pro-components";
import { Button, Divider, Space } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {

    const router = useRouter();
    const [school, setSchool] = useState<API.School>();
    const [user, setUser] = useState<API.User>();

    useEffect(() => {
        getSchoolByUser().then(response => {
            setSchool(response);
        });
        getCurrentUser().then(response => {
            setUser(response.data)
        });
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
            render: (dom: any, entity: API.ReferListItem) => [
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
                    <ProCard 
                    title="Thông tin" 
                    headerBordered className="mb-4"
                    actions={[
                        <HeatMapOutlined key={1} />,
                        <EyeOutlined key={2} />
                    ]}
                    >
                        <div className="text-base mb-2">
                            <HomeOutlined className="text-sm text-gray-400 mr-2" />
                            Trường: <b>{school?.name}</b>
                        </div>
                        <div className="text-base mb-2">
                            <UserAddOutlined className="text-sm text-gray-400 mr-2" /> 
                            <span className="mr-2">Chức vụ:</span>
                            <span className="font-medium">
                                { user?.roles.includes('President') ? 'Hiệu trưởng' : 'Giáo viên'}
                            </span>
                        </div>
                        <div className="text-base mb-2">
                            <GlobalOutlined className="text-sm text-gray-400 mr-2" /> Địa chỉ: <span className="font-medium">{school?.address}, {school?.district}, {school?.province}</span>
                        </div>
                    </ProCard>
                    {
                        school?.id && (
                            <ProList<{
                                id: number,
                                name: string,
                                totalStudent: number
                            }>
                                pagination={{
                                    pageSize: 5
                                }}
                                headerTitle="Danh sách lớp"
                                request={(params: any) => getClassroomBySchool(params, school?.id)}
                                metas={{
                                    title: {
                                        dataIndex: 'name',
                                        render: (dom, entity) => (
                                            <div>
                                                <ArrowRightOutlined className="mr-2" />
                                                <span className="mr-2 font-medium text-lg">{dom}</span>
                                                <i className="text-gray-400 text-sm">(<UserOutlined /> sĩ số {entity.totalStudent})</i>
                                            </div>
                                        )
                                    },
                                    actions: {
                                        render: (dom: any, entity: { id: any; }) => <Button type="link" onClick={() => router.push(`/lop-hoc/${entity.id}`)}>
                                            <Space>
                                                <InfoCircleOutlined /> Chi tiết
                                            </Space>
                                        </Button>
                                    }
                                }}
                            />
                        )
                    }
                </div>
                <div className="md:w-3/4">

                    <div className="mb-4 grid md:grid-cols-3 grid-cols-2 gap-4">
                        <div className="shadow px-8 py-4 rounded flex items-center bg-white gap-4">
                            <div className="text-4xl text-green-500">
                                <MoneyCollectOutlined />
                            </div>
                            <div className="flex-1">
                                <div className="text-gray-400">Tháng này</div>
                                <div className="text-3xl">-</div>
                            </div>
                        </div>
                        <div className="shadow px-8 py-4 rounded flex items-center bg-white gap-4">
                            <div className="text-4xl text-red-500">
                                <BarChartOutlined />
                            </div>
                            <div className="flex-1">
                                <div className="text-gray-400">Tổng thu nhập</div>
                                <div className="text-3xl">-</div>
                            </div>
                        </div>
                        <div className="shadow px-8 py-4 rounded flex items-center bg-white gap-4">
                            <div className="text-4xl text-sky-500">
                                <UserAddOutlined />
                            </div>
                            <div className="flex-1">
                                <div className="text-gray-400">Học viên</div>
                                <div className="text-3xl">-</div>
                            </div>
                        </div>
                    </div>

                    <Divider dashed />

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