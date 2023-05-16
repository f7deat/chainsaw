import { userLogin } from "@/services/user";
import { PageContainer, ProCard, ProForm, ProFormCheckbox, ProFormText } from "@ant-design/pro-components";
import { message } from "antd";

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
        <PageContainer title="Đăng nhập">
            <div className="md:flex gap-4">
                <div className="md:w-1/2">
                    <ProCard title="Thông tin đăng nhập" className="h-full">
                        <ProForm onFinish={onFinish}>
                            <ProFormText label="Email" name="username" rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tài khoản'
                                }
                            ]} />
                            <ProFormText.Password label="Mật khẩu" name="password" rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu'
                                }
                            ]} />
                            <ProFormCheckbox label="Nhớ đăng nhập" name="rememberMe" />
                        </ProForm>
                    </ProCard>
                </div>
                <div className="md:w-1/2">
                    <picture>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
                    </picture>
                </div>
            </div>
        </PageContainer>
    )
}