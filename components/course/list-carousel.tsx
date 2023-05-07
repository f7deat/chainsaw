import { HeadTitle } from ".."
import Link from "next/link";
import { useEffect, useState } from "react";
import { listHighLight } from "@/services/course";

type ListCourseCarouelProps = {
    slug: string;
}

const ListCourseCarouel: React.FC<ListCourseCarouelProps> = (props) => {

    const [data, setData] = useState<any>();

    useEffect(() => {
        listHighLight(props.slug).then(response => {
            setData(response.data)
        })
    }, [props.slug]);

    return (
        <div className="mb-10" hidden={!data}>
            <HeadTitle>{data?.name}</HeadTitle>
            <div className="md:flex gap-6">
                <div className="w-92 hidden md:block">
                    <picture>
                        <img src={data?.thumbnail} alt="I" />
                    </picture>
                </div>
                <div className="flex-1">
                    <div className="md:grid grid-cols-3 gap-6">
                        {
                            data?.items.map((item: any) => (
                                <div key={item.id} className="mb-4 h-full">
                                    <div className="bg-white h-full">
                                        <div>
                                            <picture>
                                                <img src={item.thumbnail} alt="IMG" className="w-full object-cover h-64" />
                                            </picture>
                                        </div>
                                        <div className="px-4 py-2">
                                            <Link href={`/bai-giang/${item.id}`}>
                                                <div className="text-2xl font-medium mb-2">{item.name}</div>
                                            </Link>
                                            <div className="text-gray-500 mb-2 relative">
                                                {item.description}
                                                <Link href={`/bai-giang/${item.id}`}>
                                                    <span className="px-6 py-2 rounded text-white bg-orange-500 absolute flex right-0 hover:bg-orange-700">Xem thêm</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCourseCarouel