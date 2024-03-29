import AdminMenu from "@/components/menu/admin";
import { allRole, deleteUser, queryUsers } from "@/services/user";
import { DeleteOutlined, FolderOutlined, UserAddOutlined } from "@ant-design/icons";
import { ActionType, ModalForm, ProCard, ProColumnType, ProFormSelect, ProFormText, ProTable } from "@ant-design/pro-components";
import { Button, Empty, Popconfirm, Space, message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Index() {

    const router = useRouter();
    const actionRef = useRef<ActionType>();
    const [open, setOpen] = useState<boolean>(false);

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
                <Button key="view" icon={<FolderOutlined />} type="primary" onClick={() => router.push(`/admin/users/${entity.id}`)}></Button>,
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
                    <ProCard
                        tabs={{
                            type: 'card'
                        }}
                        extra={<Button icon={<UserAddOutlined />} type="primary" onClick={() => setOpen(true)}>Tạo tài khoản</Button>}
                    >
                        <ProCard.TabPane key="all" tab="Tất cả">
                            <ProTable
                                rowSelection={{}}
                                search={{
                                    layout: 'vertical'
                                }}
                                request={queryUsers} columns={columns} actionRef={actionRef} />
                        </ProCard.TabPane>
                        <ProCard.TabPane key="student" tab="Học sinh">
                            <Empty />
                        </ProCard.TabPane>
                        <ProCard.TabPane key="teacher" tab="Giáo viên">
                            <Empty />
                        </ProCard.TabPane>
                        <ProCard.TabPane key="referal" tab="Người giới thiệu">
                            <Empty />
                        </ProCard.TabPane>
                        <ProCard.TabPane key="admin" tab="Admin">
                            <Empty />
                        </ProCard.TabPane>
                    </ProCard>
                </div>
                <ModalForm open={open} onOpenChange={setOpen} title="Tạo tài khoản" grid>
                    <ProFormText name="userName" label="Tài khoản" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tài khoản'
                        }
                    ]} colProps={{
                        md: 12
                    }} />
                    <ProFormText name="name" label="Name" colProps={{
                        md: 12
                    }} />
                    <ProFormText name="phoneNumber" label="Số điện thoại" colProps={{
                        md: 8
                    }} />
                    <ProFormText name="email" label="Email" colProps={{
                        md: 8
                    }} />
                    <ProFormSelect name="role" label="Loại tài khoản" request={async () => {
                        const response = await allRole();
                        return response.map((role: API.Role) => {
                            return {
                                label: role.name,
                                value: role.id
                            }
                        })
                    }} colProps={{
                        md: 8
                    }} />
                </ModalForm>
            </main>
        </>
    )
}