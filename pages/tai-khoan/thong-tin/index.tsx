import Footer from "@/components/footer";
import { Header } from "@/components/header";
import AccountLeftBar from "@/components/tai-khoan/left-bar";
import { BarChartOutlined, BookOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Image, Card, Space, Form } from "antd";
import Head from "next/head";

export default function Profile() {
    return (
        <>
            <Head>
                <title>Thông tin cá nhân</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="container mx-auto px-4 py-10">
                    <div className="md:flex gap-4">
                        <AccountLeftBar tab={0} />
                        <div className="flex-1">
                            <Card actions={[
                                <Space key="setting" >
                                    <SettingOutlined/>
                                    Thông tin cá nhân
                                </Space>,
                                <Space key="edit" >
                                    <EditOutlined/>
                                    Đổi mật khẩu
                                </Space>,
                                <Space key="ellipsis">
                                    <EllipsisOutlined />
                                    Thông tin phụ huynh
                                </Space>,
                            ]}>
                                <ProForm>
                                    <ProFormText label="Tên đăng nhập" />
                                    <ProFormText label="Họ và tên" />
                                    <ProFormText label="Số điện thoại" />
                                    <ProFormText label="Email" />
                                    <ProFormText label="Địa chỉ" />
                                </ProForm>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}