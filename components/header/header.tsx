import { navbars } from "@/mock"
import { FireTwoTone, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from "react";
import RightContent from "../layout/right-content";

const inter = Playfair_Display({ subsets: ['latin'] });

const Header: React.FC = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <header className={`${offset < 50 ? '' : 'bg-white shadow'} fixed top-0 left-0 right-0 z-50 shadow md:shadow-none`}>
            <div className="container mx-auto px-4">
                <div className="flex gap-4 py-4 justify-between">
                    <div className="md:flex-1 md:flex gap-4 items-center justify-between">
                        <Link href="/">
                            <div className="font-bold text-blue-700 md:text-3xl text-2xl flex gap-2" style={inter.style}>
                                <FireTwoTone twoToneColor="#f97316" />
                                E-Learning
                            </div>
                        </Link>
                        <ul className="md:flex gap-6 text-blue-800 hidden bg-white">
                            {
                                navbars.map((navbar, index) => (
                                    <li key={index}>
                                        <Link href={navbar.url} className="font-medium hover:text-blue-500 text-lg flex gap-2">
                                            {navbar.icon}
                                            {navbar.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <RightContent />
                    </div>
                    <button className="md:hidden" onClick={toggleCollapsed} >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </button>
                </div>
            </div>
            <div hidden={!collapsed} className=" bg-white p-4 border-t shadow">
                <ul className="gap-6 text-blue-800">
                    {
                        navbars.map((navbar, index) => (
                            <li key={index} className="mb-2">
                                <Link href={navbar.url} className="font-medium hover:text-blue-500 text-lg flex gap-2">
                                    {navbar.icon}
                                    {navbar.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex justify-center py-2">
                    <RightContent />
                </div>
            </div>
        </header>
    )
}

export default Header