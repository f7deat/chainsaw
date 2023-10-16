import { activeCourse, qyerySelectCourse } from "@/services/course";
import { listRoleByUser, removeFromRole } from "@/services/user";
import { ProCard, ProForm, ProFormDatePicker, ProFormDigit, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import { Card, Col, Row, Space, Tag, message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {

    const router = useRouter();
    const [roles, setRoles] = useState<string[]>([]);

    useEffect(() => {
        if (router?.query?.id) {
            listRoleByUser(router?.query?.id).then(response => {
                setRoles(response);
            })
        }
    }, [router])

    const onRemoveRole = async (role: string) => {
        const response = await removeFromRole(role, router?.query?.id)
        if (response.succeeded) {
            message.success('Removed!');
        }
    }

    const onActiveCourse = async (values: any) => {
        values.userId = router?.query?.id;
        const response = await activeCourse(values);
        if (response.succeeded) {
            message.success('Kích hoạt thành công!');
        }
    }

    return (
        <>
            <Head>
                <title>Chi tiết</title>
            </Head>
            <main>
                <Row gutter={16}>
                    <Col span={8}>
                        <ProCard title="Kích hoạt khóa học" className="shadow" headerBordered>
                            <ProForm onFinish={onActiveCourse}>
                                <ProFormSelect name="KhoaHocId" label="Khóa học" request={qyerySelectCourse} rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn khóa học'
                                    }
                                ]} />
                                <ProFormDigit name="SoTienThanhToan" label="Số tiền thanh toán" tooltip="Mặc định lấy giá tiền khóa học nếu không nhập" />
                                <ProFormText name="TenNguoiMua" label="Người mua" />
                                <Space>
                                    <ProFormText name="SoDienThoai" label="Số điện thoại" />
                                    <ProFormDatePicker name="ThoiGianHetHan" label="Thời gian hết hạn" rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn thời gian hết hạn'
                                    }
                                ]}  />
                                </Space>
                            </ProForm>
                        </ProCard>
                    </Col>
                    <Col span={4}>
                        <ProCard title="Role" className="shadow" headerBordered>
                            {
                                roles.map(role => (
                                    <Tag key={role} closable onClose={() => onRemoveRole(role)}>{role}</Tag>
                                ))
                            }
                        </ProCard>
                    </Col>
                </Row>

            </main>
        </>
    )
}