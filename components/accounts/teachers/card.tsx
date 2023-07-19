import { EditOutlined, FacebookFilled, TwitterCircleFilled, YoutubeFilled } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

type CardTeacherProps = {
    data: API.User;
    isAdmin: boolean;
}

const CardTeacher: React.FC<CardTeacherProps> = (props) => {

    const { data, isAdmin } = props;
    const router = useRouter();

    return (
        <div className="relative" >
            <div className="flex flex-col items-center justify-center bg-white shadow rounded py-8">
                <div>
                    <picture className="mb-4">
                        <img src={data.avatar} alt={data.name} width={277} height={277} />
                    </picture>
                    <div className="font-medium text-2xl text-center mt-2 mb-2 hover:text-blue-500">
                        <Link href={`/tai-khoan/giao-vien/${data.id}`}>
                            {data.name}
                        </Link>
                    </div>
                    <div className="text-gray-400 mb-4 text-center">
                        {data.jobTitle}
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <button className="h-10 w-10 bg-sky-400 rounded-full text-white">
                            <TwitterCircleFilled />
                        </button>
                        <button className="h-10 w-10 bg-red-400 rounded-full text-white">
                            <YoutubeFilled />
                        </button>
                        <button className="h-10 w-10 bg-blue-400 rounded-full text-white">
                            <FacebookFilled />
                        </button>
                    </div>
                    <div className="border-t mt-4 pt-2" hidden={!isAdmin}>
                        <button type="button" onClick={() => router.push(`/tai-khoan/chinh-sua/${data.id}`)}>
                            <EditOutlined className="h-8 w-8 btn-icon border rounded-full" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTeacher