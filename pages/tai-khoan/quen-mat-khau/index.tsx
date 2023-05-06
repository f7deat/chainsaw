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
                <ProCard>
                    <ProForm>
                        <ProFormText label="Email" name="email" rules={[
                            {
                                required: true
                            }
                        ]}/>
                    </ProForm>
                </ProCard>
            </PageContainer>
        </>
    )
}