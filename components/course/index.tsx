import { Row, Col } from "antd"
import CourseItem from "./item"
import { elementary } from "@/mock/elementary"

const CourseList: React.FC = () => {
    return (
        <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
            {
                elementary.map((ele, i) => (
                    <div key={i}>
                        <CourseItem course={ele} />
                    </div>
                ))
            }
        </div>
    )
}

export default CourseList