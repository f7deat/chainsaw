import { BookOutlined, EditOutlined, FireOutlined, HomeOutlined, MessageOutlined, RocketOutlined, VideoCameraOutlined } from "@ant-design/icons";

export const navbars = [
    {
        name: "Tự ôn luyện",
        icon: <BookOutlined />,
        url: "/"
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
        name: "Góc học tập",
        icon: <EditOutlined />,
        url: "/"
    },
    {
        name: "Hỏi đáp",
        icon: <MessageOutlined />,
        url: "/hoi-dap"
    }
]