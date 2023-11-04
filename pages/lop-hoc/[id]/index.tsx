import { AddStudentForm, Title } from "@/components";
import { getClassroom, getStudentInClassroom } from "@/services/classroom";
import { getSubject, serverSubjects } from "@/services/subject";
import { EyeOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { ProCard, ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, Empty, Space } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
    subjects: API.ListResult<API.Subject>;
    id?: string | string[];
}> = async (context) => {
    const subjects = await serverSubjects();
    return { props: { subjects, id: context.params?.id } };
};

export default function Index({ subjects, id }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
            <Head>
                <title>Lớp {id}</title>
                <meta name="description" content={`Danh sách các khóa học thuộc lớp ${id}}`} />
            </Head>
            <Title title={`Lớp ${id}`}></Title>
            <div className="grid grid-col-2 md:grid-cols-4 gap-4">
            {
                subjects.data.map(subject => (
                    <div key={subject.id} className="shadow">
                        <div className="text-blue-500 font-medium border-b py-2 px-4">
                            <Link href={`/mon-hoc/${subject.id}`}>{subject.name}</Link>
                        </div>
                        <div className="p-4">
                            <Empty />
                        </div>
                    </div>
                ))
            }
            </div>

        </>
    )
}