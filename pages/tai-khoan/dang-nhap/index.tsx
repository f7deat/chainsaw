import { userLogin } from "@/services/user";
import { ProCard, ProForm, ProFormText } from "@ant-design/pro-components";
import { Button, message } from "antd";
import Head from "next/head";

export default function Index() {

    const onFinish = async (values: any) => {
        const response = await userLogin(values);
        if (response.succeeded) {
            message.success('Đăng nhập thành công!');
            localStorage.setItem('access_token', response.token);
            window.location.href = '/';
        } else {
            message.error('Đăng nhập thất bại');
        }
    }

    return (
        <>
            <Head>
                <title>Đăng nhập quản trị</title>
            </Head>
            <div className="md:flex gap-4">
                <div className="md:w-1/3">
                    <ProCard title="Thông tin đăng nhập" className="h-full">
                        <ProForm onFinish={onFinish} submitter={{
                            render: ({ submit }) => {
                                return [
                                    <Button
                                        size="large"
                                        key="login"
                                        onClick={() => {
                                            submit?.();
                                        }}
                                        shape="round"
                                        type="primary"
                                        className="w-full"
                                    >
                                        Đăng nhập
                                    </Button>
                                ]
                            }
                        }}>
                            <ProFormText fieldProps={{
                                size: "large"
                            }} label="Email" name="username" rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tài khoản'
                                }
                            ]} />
                            <ProFormText.Password fieldProps={{
                                size: "large"
                            }} label="Mật khẩu" name="password" rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu'
                                }
                            ]} />
                        </ProForm>
                    </ProCard>
                </div>
                <div className="md:w-2/3">
                    <picture>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
                    </picture>
                </div>
            </div></>
    )
}