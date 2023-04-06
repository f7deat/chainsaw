import { Row, Col, Card, Empty } from "antd"
import FeatureCard from "./feature/card"

const ElementaryFeature: React.FC = () => {
    return (
        <div>
            <Row gutter={8}>
                <Col md={4} xs={12}>
                    <FeatureCard className="bg-pink-400" />
                </Col>
                <Col md={4} xs={12}>
                    <FeatureCard className="bg-yellow-400" />
                </Col>
                <Col md={4} xs={12}>
                    <FeatureCard className="bg-blue-400" />
                </Col>
                <Col md={4} xs={12}>
                    <FeatureCard className="bg-green-400" />
                </Col>
                <Col md={4} xs={12}>
                    <FeatureCard className="bg-cyan-400" />
                </Col>
                <Col md={4} xs={12}>
                    <FeatureCard className="bg-fuchsia-600" />
                </Col>
            </Row>
        </div>
    )
}

export default ElementaryFeature