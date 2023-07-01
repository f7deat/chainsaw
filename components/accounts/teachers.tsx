import Link from "next/link";
import Title from "../title";

type TeachersProps = {
    data: API.User[]
}

const Teachers: React.FC<TeachersProps> = (props) => {
    return (
        <div className="md:mb-10 mb-4">
            <Title title="Đội ngũ giáo viên" subTitle="Giáo viên" />
            <div className="grid grid-cols-4 md:gap-10 gap-4 mb-4" data-aos="fade-up">
                {
                    props.data.map((user: API.User) => (
                        <div key={user.id} className="shadow bg-white rounded-lg transform transition duration-500 hover:scale-110">
                            <div className="flex gap-2 items-center flex-col">
                                <div className="w-32 pt-4">
                                    <picture>
                                        <img src={user.avatar} alt={user.name} className="rounded-full" loading="lazy" />
                                    </picture>
                                </div>
                                <div className="flex-grow text-center mb-4">
                                    <div className="font-medium text-lg text-blue-700">
                                        <Link href={`/tai-khoan/giao-vien/${user.id}`}>{user.name}</Link>
                                    </div>
                                    <div className="text-gray-600">{user.jobTitle}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center border border-dashed border-gray-300">
                <Link href="/tai-khoan/giao-vien">
                    <span className="font-medium text-blue-500">Xem tất cả</span>
                </Link>
            </div>
        </div>
    )
}

export default Teachers;