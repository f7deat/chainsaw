import { navbars } from "@/mock"
import { FireTwoTone } from "@ant-design/icons";
import { Space } from "antd";
import Link from "next/link";
import RightContent from "../layout/right-content";
import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from "react";

const inter = Playfair_Display({ subsets: ['latin'] });

const Header: React.FC = () => {

    const [offset, setOffset] = useState(0);
    
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    return (
        <header className={`${offset < 100 ? '' : 'bg-white shadow'} fixed top-0 left-0 right-0 z-50`}>
            <div className="container mx-auto">
            <div className="flex gap-4 py-4">
                <div className="flex-1 md:flex gap-4 items-center justify-between">
                    <Link href="/">
                        <div className="font-bold text-blue-700 md:text-3xl text-lg flex gap-2 px-4" style={inter.style}>
                            <FireTwoTone twoToneColor="#f97316" />
                            E-Learning
                        </div>
                    </Link>
                    <ul className="md:flex gap-6 text-blue-800 hidden">
                        {
                            navbars.map((navbar, index) => (
                                <li key={index}>
                                    <Link href={navbar.url}>
                                        <Space className="font-medium hover:text-blue-500 text-lg">
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
            </div>
        </header>
    )
}

export default Header