import { UserContext } from "@/models/user";
import { queryTeachersClient } from "@/services/user";
import { Role } from "@/utils/constants";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Index() {
    const router = useRouter();
    const { user } = useContext<{
        user: API.User
    }>(UserContext);

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
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/tai-khoan/giao-vien/${entity.id}`)} />,
                <Link href={`/tai-khoan/chinh-sua/${entity.id}`} key="edit" hidden={!user.roles.includes(Role.Admin)}>
                    <EditOutlined className="h-8 w-8 btn-icon border rounded-full" />
                </Link>
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