import { allRole, getUser, updateUser } from "@/services/user";
import { ProCard, ProForm, ProFormInstance, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import { message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function Index() {

    const router = useRouter();
    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        if (router?.query?.id) {
            getUser(router.query.id).then(response => {
                console.log(response)
                formRef.current?.setFields([
                    {
                        name: 'name',
                        value: response.name
                    },
                    {
                        name: 'avatar',
                        value: response.avatar
                    },
                    {
                        name: 'role',
                        value: response.roles.length > 0 ? response.roles[0] : ''
                    }
                ])
            })
        }
    }, [router]);

    const onFinish = async (values: any) => {
        values.id = router?.query?.id;
        const response = await updateUser(values);
        if (response.succeeded) {
            message.success('Cập nhật thành công!');
        } else {
            message.error(response.errors[0].description);
        }
    }

    return (
        <>
            <Head>
                <title>Chỉnh sửa tài khoản</title>
            </Head>
            <main>
                <ProCard>
                    <ProForm onFinish={onFinish} formRef={formRef}>
                        <ProFormText name="name" label="Name" />
                        <ProFormText name="avatar" label="Avatar" />
                        <ProFormSelect name="role" label="Role" request={() => allRole().then(response => {
                            return response.map((role: any) => {
                                return {
                                    value: role.name,
                                    label: role.name
                                };
                            });
                        })} params={undefined} debounceTime={undefined} valueEnum={undefined} />
                    </ProForm>
                </ProCard>
            </main>
        </>
    )
}