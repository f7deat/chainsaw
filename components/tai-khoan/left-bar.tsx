import { BarChartOutlined, BookOutlined, UserOutlined } from "@ant-design/icons"
import { Card, Image, Space } from "antd"
import Link from "next/link"

type AccountLeftBarProps = {
    tab: number;
}

const AccountLeftBar: React.FC<AccountLeftBarProps> = (props) => {
    return (
        <div className="md:w-1/4">
            <Card>
                <div className="mb-4 text-center">
                    <Image src="https://placehold.jp/200x200.png" alt="IMG" width={200} height={200} className="rounded-full" />
                </div>
                <div className="text-xl text-center mb-4">Nguyễn Hiểu Minh</div>
                <Link href="/tai-khoan/thong-tin">
                    <div className={`px-4 py-2 rounded border ${props.tab === 0 ? 'border-blue-500' : ''} mb-1 hover:border-blue-500`}>
                        <Space>
                            <UserOutlined />
                            <div className="text-lg">
                                Thông tin cá nhân
                            </div>
                        </Space>
                    </div>
                </Link>
                <Link href="/tai-khoan/khoa-hoc">
                    <div className={`px-4 py-2 rounded border ${props.tab === 1 ? 'border-blue-500' : ''} mb-1 hover:border-blue-500`}>
                        <Space>
                            <BookOutlined />
                            <div className="text-lg">
                                Khóa học của tôi
                            </div>
                        </Space>
                    </div>
                </Link>
                <div className={`px-4 py-2 rounded border ${props.tab === 2 ? 'border-blue-500' : ''} mb-1 hover:border-blue-500`}>
                    <Space>
                        <BarChartOutlined />
                        <div className="text-lg">
                            Quá trình học tập
                        </div>
                    </Space>
                </div>
            </Card>
        </div>
    )
}

export default AccountLeftBar