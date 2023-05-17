import { getUser } from "@/services/user";
import { BarChartOutlined, CalendarOutlined, MessageOutlined, UserAddOutlined } from "@ant-design/icons"
import { Card, DatePicker, Image, Space } from "antd"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type AccountLeftBarProps = {
    tab: number;
}

const AccountLeftBar: React.FC<AccountLeftBarProps> = (props) => {

    const router = useRouter();

    const [student, setStudent] = useState<any>();

    useEffect(() => {
        if (router) {
            getUser(router.query?.id).then(response => {
                if (response.succeeded) {
                    setStudent(response.data);
                }
            })
        }
    }, [router]);

    return (
        <div className="md:w-72">
            <Card
                title="Thông tin cá nhân"
                actions={[
                    <UserAddOutlined key={1} />,
                    <MessageOutlined key={2} />
                ]}>
                <div className="mb-4 text-center">
                    <Image src={student?.avatar ? student.avatar : 'https://placehold.jp/200x200.png'} alt="IMG" width={200} height={200} className="rounded-full" />
                </div>
                <div className="text-xl text-center mb-1">{student?.hoVaTen}</div>
                <ul className="mb-4 text-center text-gray-500">
                    <li>
                        <CalendarOutlined /> {student?.ngaySinh?.substring(0, 10)}
                    </li>
                </ul>
                <Link href={`/tai-khoan/hoc-tap/${student?.id}`}>
                    <div className={`px-4 py-2 rounded border ${props.tab === 3 ? 'border-blue-500' : ''} mb-1 hover:border-blue-500`}>
                        <Space>
                            <BarChartOutlined />
                            <div className="text-lg">
                                Quá trình học tập
                            </div>
                        </Space>
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default AccountLeftBar