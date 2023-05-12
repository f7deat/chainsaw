import { userLogin } from "@/services/user";
import { ProCard, ProForm, ProFormCheckbox, ProFormText } from "@ant-design/pro-components";
import { message } from "antd";
import { useRouter } from "next/router";

export default function Index() {

    const router = useRouter();

    const onFinish = async (values: any) => {
        const response = await userLogin(values);
        if (response.succeeded) {
            message.success('Đăng nhập thành công!');
            localStorage.setItem('access_token', response.token);
            router.push('/');
        } else {
            message.error('Đăng nhập thất bại');
        }
    }

    return (
        <>
            <div className="md:flex gap-4">
                <div className="md:w-1/2">
                    <ProCard title="Đăng nhập">
                        <ProForm onFinish={onFinish}>
                            <ProFormText label="Email" name="username" rules={[
                                {
                                    required: true
                                }
                            ]} />
                            <ProFormText.Password label="Mật khẩu" name="password" rules={[
                                {
                                    required: true
                                }
                            ]} />
                            <ProFormCheckbox label="Nhớ đăng nhập" name="rememberMe" />
                        </ProForm>
                    </ProCard>
                </div>
            </div>
        </>
    )
}