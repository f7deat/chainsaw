import { BookIcon, DuoIcon, EditSquareIcon, LecturerIcon, LiveStreamIcon, QandAIcon } from "@/components/icons";

export const navbars = [
    {
        name: "Tự ôn luyện",
        icon: <BookIcon />,
        url: "/"
    },
    {
        name: "Học nhóm",
        icon: <DuoIcon />,
        url: "/hoc-nhom"
    },
    {
        name: "Lớp học gia sư",
        icon: <LecturerIcon />,
        url: "/"
    },
    {
        name: "Live class",
        icon: <LiveStreamIcon />,
        url: "/live-class"
    },
    {
        name: "Góc học tập",
        icon: <EditSquareIcon />,
        url: "/"
    },
    {
        name: "Hỏi đáp",
        icon: <QandAIcon />,
        url: "/hoi-dap"
    }
]