import { listRoleByUser, removeFromRole } from "@/services/user";
import { Tag, message } from "antd";
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

    return (
        <>
            <Head>
                <title>Chi tiết</title>
            </Head>
            <main>
                {
                    roles.map(role => (
                        <Tag key={role} closable onClose={() => onRemoveRole(role)}>{role}</Tag>
                    ))
                }
            </main>
        </>
    )
}