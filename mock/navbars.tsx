import { BookOutlined, FireOutlined, GiftTwoTone, MessageOutlined, VideoCameraOutlined } from "@ant-design/icons";

export const navbars = [
    {
        name: "Môn học",
        icon: <BookOutlined />,
        url: "/mon-hoc"
    },
    {
        name: "Học nhóm",
        icon: <FireOutlined />,
        url: "/hoc-nhom"
    },
    {
        name: "Live class",
        icon: <VideoCameraOutlined />,
        url: "/live-class"
    },
    {
        name: "Hỏi đáp",
        icon: <MessageOutlined />,
        url: "/hoi-dap"
    },
    {
        name: <span className="text-red-500 animate-bounce">Nhận quà</span>,
        icon: <span className="animate-bounce"><GiftTwoTone twoToneColor="red" /></span>,
        url: "/tai-khoan/redeem"
    }
]