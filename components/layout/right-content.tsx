import { BarChartOutlined, BookOutlined, LogoutOutlined, MoneyCollectOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Space } from "antd"
import HeaderDropdown from "./header-dropdown"
import { useRouter } from "next/router";
import type { MenuInfo } from 'rc-menu/lib/interface';
import { useContext, useState } from "react";
import { Role } from "@/utils/constants";
import { UserContext } from "@/models/user";
import LoginForm from "../accounts/login-form";

const RightContent: React.FC = () => {

    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const { user } = useContext(UserContext);

    const loginOut = async () => {
        localStorage.removeItem('access_token');
        const urlParams = new URL(window.location.href).searchParams;
        const redirect = urlParams.get('redirect');
        if (window.location.pathname !== '/accounts/login' && !redirect) {
            window.location.href = "/";
        }
    };

    const onMenuClick = (event: MenuInfo) => {
        const { key } = event;
        if (key === 'logout') {
            loginOut();
            return;
        } else if (key === 'profile') {
            router.push(`/tai-khoan/thong-tin`);
            return;
        } else if (key === 'settings') {
            router.push(`/tai-khoan/khoa-hoc`);
            return;
        } else if (key === 'history') {
            router.push(`/tai-khoan/hoc-tap/${user?.id}`);
            return;
        } else if (key === 'refer') {
            router.push(`/tai-khoan/thu-nhap`);
            return;
        }
        router.push(`/accounts/${key}`);
    }

    const menuItems = [
        ...(user?.roles?.find((x: any) => x === Role.Referal) ?
            [{
                key: 'refer',
                icon: <MoneyCollectOutlined />,
                label: 'Thu nhập của tôi',
            }] : [
                {
                    key: 'settings',
                    icon: <BookOutlined />,
                    label: 'Khóa học của tôi',
                },
                {
                    key: 'history',
                    icon: <BarChartOutlined />,
                    label: 'Quá trình học tập',
                }
            ]),
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Thông tin cá nhân',
        },
        {
            type: 'divider' as const,
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Đăng xuất',
        }
    ];

    return user ? (
        <HeaderDropdown
            menu={{
                selectedKeys: [],
                onClick: onMenuClick,
                items: menuItems,
            }}
        >
            <Button type="link" className="flex items-center gap-2">
                <Avatar src={user?.avatar ? <picture>
                    <img src={user?.avatar} alt="avatar" />
                </picture> : <div className="bg-gray-500">
                    <UserOutlined />
                </div>} />
                <div className="text-left">
                    <div className="text-xs">Xin chào,</div>
                    <div className="font-medium text-sm">{user?.name}</div>
                </div>
            </Button>
        </HeaderDropdown>
    ) : (
        <Space className="mr-4">
            <Button type="primary" size="large" onClick={() => setOpen(true)}>
                <Space>
                    <UserOutlined />
                    Đăng nhập
                </Space>
            </Button>
            <LoginForm open={open} setOpen={setOpen} />
        </Space>
    )
}

export default RightContent