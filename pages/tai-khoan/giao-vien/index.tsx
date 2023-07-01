import { queryTeachersClient } from "@/services/user";
import { EyeOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();

    const columns: ProColumns<API.User>[] = [
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
            search: false
        },
        {
            title: '',
            valueType: 'option',
            render: (dom: any, entity: { id: any; }) => [
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/tai-khoan/giao-vien/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Danh sách giáo viên</title>
                <meta name="description" content="Danh sách giáo viên" />
            </Head>
            <main>
                <div>
                    <ProTable
                        rowKey="id"
                        search={{
                            layout: 'vertical'
                        }}
                        columns={columns}
                        request={queryTeachersClient}
                    />
                </div>
            </main>
        </>
    )
}