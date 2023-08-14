import { Title } from "@/components";
import CardTeacher from "@/components/accounts/teachers/card";
import { UserContext } from "@/models/user";
import { queryTeachers } from "@/services/user";
import { Role } from "@/utils/constants";
import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

export const getServerSideProps: GetServerSideProps<{
    teachers: API.User[];
}> = async (context) => {
    const teachers = await queryTeachers({
        pageSize: 4,
        current: 1
    });
    return { props: { teachers: teachers.data } };
};


export default function Index({ teachers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { user } = useContext<{
        user: API.User
    }>(UserContext);

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Danh sách giáo viên</title>
                <meta name="description" content="Danh sách giáo viên" />
            </Head>
            <main>
                {
                    user.roles.includes(Role.Admin) && (
                        <Button type="primary" icon={<UserAddOutlined />} onClick={() => router.push('/tai-khoan/tao-moi')}>Tạo mới</Button>
                    )
                }
                <Title subTitle="Teacher" title="Danh sách giáo viên" />
                <div className="grid md:grid-cols-4 gap-10 py-5">
                    {
                        teachers.map(teacher => <CardTeacher key={teacher.id} data={teacher} isAdmin={user?.roles.includes(Role.Admin)} />)
                    }
                </div>
            </main>
        </>
    )
}