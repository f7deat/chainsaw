import { HomeOutlined } from "@ant-design/icons";
import { Button, Result, Space } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ResultSuccessPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Đăng ký thành công</title>
            </Head>
            <div className="h-24"></div>
            <Result
                status="success"
                title="Đăng ký thành công!"
                subTitle="Tài khoản của bạn đã được kích hoạt thành công, chúc gia đình mình có những phút giây học tập vui vẻ với GET Central"
                extra={[
                    <Button type="primary" size="large" key="console" onClick={() => router.push('/')}>
                        <Space>
                            <HomeOutlined />Trở về trang chủ
                        </Space>
                    </Button>
                ]}
            />
            <div className="h-32"></div>
        </>
    )
}