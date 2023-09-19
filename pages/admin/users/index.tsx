import AdminMenu from "@/components/menu/admin";
import { deleteUser, queryUsers } from "@/services/user";
import { DeleteOutlined } from "@ant-design/icons";
import { ActionType, ProColumnType, ProTable } from "@ant-design/pro-components";
import { Button, Popconfirm, message } from "antd";
import Head from "next/head";
import { useRef } from "react";

export default function Index() {

    const actionRef = useRef<ActionType>();

    const onConfirm = async (id: string) => {
        const response = await deleteUser(id);
        if (response.succeeded) {
            message.success('Deleted!')
            actionRef.current?.reload()
        }
    }

    const columns: ProColumnType<any>[] = [
        {
            title: '#',
            valueType: 'indexBorder'
        },
        {
            title: 'SDT',
            dataIndex: 'phoneNumber'
        },
        {
            title: 'UserName',
            dataIndex: 'userName'
        },
        {
            title: 'Tên',
            dataIndex: 'name'
        },
        {
            title: '',
            valueType: 'option',
            render: (dom, entity) => [
                <Popconfirm key="delete" title="Are you sure?" onConfirm={() => onConfirm(entity.id)}>
                    <Button type="primary" danger icon={<DeleteOutlined />} />
                </Popconfirm>
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Quản trị người dùng</title>
            </Head>
            <main className="md:flex gap-4">
                <div className="md:w-64">
                    <AdminMenu current="users" />
                </div>
                <div className="flex-1">
                    <ProTable 
                    rowSelection={{}}
                    search={{
                        layout: 'vertical'
                    }}
                    request={queryUsers} columns={columns} actionRef={actionRef} />
                </div>
            </main>
        </>
    )
}