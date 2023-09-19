import AdminMenu from "@/components/menu/admin";
import { PlusOutlined } from "@ant-design/icons";
import { ModalForm, ProCard, ProFormDateTimePicker, ProFormDigit, ProFormText, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function CourseDiscount() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Head>
                <title>Khóa học giảm giá</title>
            </Head>
            <main className="md:flex gap-4">
                <div className="md:w-64">
                    <AdminMenu current="voucher" />
                </div>
                <div className="flex-1">
                    <ProCard extra={<Button icon={<PlusOutlined />} type="primary" onClick={() => setOpen(true)}>Tạo voucher</Button>}>
                        <ProTable />
                    </ProCard>

                    <ModalForm open={open} onOpenChange={setOpen} title="Tạo mã khuyến mại">
                        <ProFormText name="couponCode" label="Code" rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mã khuyến mại'
                            }
                        ]} />
                        <ProFormDateTimePicker name="expiredDate" label="Ngày hết hạn" />
                        <ProFormDigit name="fixedPrice" label="Giá tiền (cố định)" />
                    </ModalForm>
                </div>
            </main>
        </>
    )
}