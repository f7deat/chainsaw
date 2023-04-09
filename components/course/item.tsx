import Link from "next/link";

type CourseItemProps = {
    course: any;
}

const CourseItem: React.FC<CourseItemProps> = (props) => {
    return (
        <div className="flex flex-col mb-2 shadow-lg md:-mt-20">
            <div className={`${props.course.bg} rounded-t-lg flex flex-col items-center justify-center text-white`}>
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
                            <div className="text-xl border-b border-gray-400 px-4 py-2 font-medium flex items-center justify-between hover:bg-gray-100">
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
    )
}

export default CourseItem