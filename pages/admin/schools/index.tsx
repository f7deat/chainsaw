import AdminMenu from "@/components/menu/admin";
import { ModalForm, ProCard, ProFormText, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function School() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Head>
                <title>Quản lý trường học</title>
            </Head>
            <main>
                <div className="md:flex gap-4">
                    <AdminMenu current="schools" />
                    <div className="flex-1">
                        <ProCard extra={<Button type="primary" onClick={() => setOpen(true)}>Thêm trường học</Button>}>
                            <ProTable />
                        </ProCard>
                        <ModalForm open={open} onOpenChange={setOpen} title="Trường học">
                            <ProFormText name="name" label="Tên trường" />
                            <ProFormText name='address' label="Địa chỉ" />
                        </ModalForm>
                    </div>
                </div>
            </main>
        </>
    )
}