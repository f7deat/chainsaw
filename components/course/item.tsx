import Link from "next/link";

type CourseItemProps = {
    course: any;
}

const CourseItem: React.FC<CourseItemProps> = (props) => {
    return (
        <div className="shadow mx-2">
            <div className="flex flex-col mb-2">
                <div className="bg-white rounded-t-lg flex flex-col items-center justify-center text-blue-900 relative">
                    <picture className="absolute top-0 right-0 w-24">
                        <img src="https://www.hoyolab.com/_nuxt/img/cad6717.png" alt="BG" />
                    </picture>
                    <picture className="absolute top-0 left-0 w-16">
                        <img src="https://www.hoyolab.com/_nuxt/img/1c8727f.png" alt="BG" />
                    </picture>
                    <div className="text-4xl font-medium pt-6">
                        {props.course.suffix}
                    </div>
                    <div className="font-bold" style={{
                        fontSize: 100
                    }}>
                        {props.course.name}
                    </div>
                </div>
                {
                    props.course.courses.map((course: any, i: number) => (
                        <div key={i}>
                            <Link href={course.url}>
                                <div className="text-xl border-t px-4 py-2 font-medium flex items-center justify-between bg-white">
                                    <div>{course.name}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseItem