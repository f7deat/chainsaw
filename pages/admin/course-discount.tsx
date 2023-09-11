import { PlusOutlined } from "@ant-design/icons";
import { ModalForm } from "@ant-design/pro-components";
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
            <main>
                <Button icon={<PlusOutlined />}>Tạo mã giảm giá</Button>
                <ModalForm>
                    
                </ModalForm>
            </main>
        </>
    )
}