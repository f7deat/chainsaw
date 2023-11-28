import { PageContainer, ProCard, ProForm, ProFormText } from "@ant-design/pro-components";
import Head from "next/head";

export default function ForgotPassword() {

    return (
        <>
            <Head>
                <title>Quên mật khẩu</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title="Quên mật khẩu">
                <div className="md:flex gap-4">
                    <div className="md:w-1/2">
                        <ProCard>
                            <ProForm>
                                <ProFormText fieldProps={{
                                    size: "large"
                                }} label="Email" name="email" rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập địa chỉ email!'
                                    }
                                ]} />
                            </ProForm>
                        </ProCard>
                    </div>
                    <div className="md:w-1/2">

                    </div>
                </div>
            </PageContainer>
        </>
    )
}