import { navbars } from "@/mock"
import { FireOutlined } from "@ant-design/icons"
import { Space } from "antd"
import Link from "next/link"

const Header: React.FC = () => {
    return (
        <header>
            <nav className="container mx-auto">
                <div className="md:flex gap-4 py-4">
                    <div className="flex-1 md:flex gap-4 items-center">
                        <Link href="/">
                            <div className="font-medium text-2xl flex gap-4">
                                <FireOutlined className="text-blue-500" />
                                E-Learning
                            </div>
                        </Link>
                        <ul className="md:flex gap-4">
                            {
                                navbars.map((navbar, index) => (
                                    <li key={index}>
                                        <Link href={navbar.url}>
                                            <Space className="font-medium text-lg">
                                                {navbar.icon}
                                                {navbar.name}
                                            </Space>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header