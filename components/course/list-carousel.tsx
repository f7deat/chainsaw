import { Carousel, ConfigProvider } from "antd";
import { HeadTitle } from ".."
import { maths } from "@/mock/maths";
import Link from "next/link";

type ListCourseCarouelProps = {
    title: string;
}

const ListCourseCarouel: React.FC<ListCourseCarouelProps> = (props) => {
    return (
        <div className="mb-10">
            <HeadTitle>{props.title}</HeadTitle>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: '__Quicksand_1a17df'
                    },
                }}
            >
                <Carousel autoplay slidesToShow={3}>
                    {
                        maths.map((math, i) => (
                            <div key={i} className="px-4 mb-10 h-full">
                                <div className="bg-white h-full">
                                    <div>
                                        <picture>
                                            <img src={math.image} alt="IMG" className="w-full" />
                                        </picture>
                                    </div>
                                    <div className="px-4 py-2">
                                        <Link href={math.url}>
                                            <div className="text-2xl font-medium mb-2">{math.name}</div>
                                        </Link>
                                        <div className="text-gray-500 mb-2">
                                            {math.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </ConfigProvider>
        </div>
    )
}

export default ListCourseCarouel