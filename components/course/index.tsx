import { Row, Col } from "antd"
import CourseItem from "./item"
import { elementary } from "@/mock/elementary"

const CourseList: React.FC = () => {
    return (
        <div>
            <Row gutter={16}>
                {
                    elementary.map((ele, i) => (
                        <Col md={4} xs={12} key={i}>
                            <CourseItem course={ele} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default CourseList