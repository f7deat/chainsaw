import { listSubject } from "@/services/course";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react"

const SubjectMenu: React.FC = () => {

    const [data, setData] = useState<any>();
    useEffect(() => {
        listSubject().then(response => {
            setData(response);
        });
    }, [])

    return (
        <ul>
            {
                data?.map((x: any) => (
                    <li key={x.id}>
                        <Link href={`/mon-hoc/${x.id}`}>
                            <div className="py-2 font-medium flex justify-between items-center text-gray-500 hover:text-gray-900">
                                {x.tenmon}
                                <ArrowRightOutlined />
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default SubjectMenu