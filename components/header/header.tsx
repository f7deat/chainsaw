import { navbars } from "@/mock"
import { FireOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Link from "next/link";
import RightContent from "../layout/right-content";
import { Playfair_Display } from 'next/font/google';

const inter = Playfair_Display({ subsets: ['latin'] });

const Header: React.FC = () => {
    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50">
            <div className="flex gap-4 py-4">
                <div className="flex-1 md:flex gap-4 items-center">
                    <Link href="/">
                        <div className="font-bold md:text-3xl text-lg flex gap-4 px-4" style={inter.style}>
                            <FireOutlined className="text-blue-500" />
                            E-Learning
                        </div>
                    </Link>
                    <ul className="md:flex gap-6 text-gray-500 hidden">
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
                <RightContent />
            </div>
        </header>
    )
}

export default Header