import { Button, Card, Col, Row } from "antd"

const DoVui: React.FC = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col md={6}>
                    <Card cover={
                        <picture>
                            <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2020/01/17/90/58/1.png" alt="" />
                        </picture>
                    }>
                        <div className="font-bold text-lg mb-2">
                            Đố Vui Kỳ Đặc Biệt Số 01
                        </div>
                        <div className="text-gray-500">
                            Đố các bạn, ông Công ông Táo lên chầu trời bằng cách nào?
                        </div>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card cover={
                        <picture>
                            <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2020/01/17/90/58/1.png" alt="" />
                        </picture>
                    }>
                        <div className="font-bold text-lg mb-2">
                            Đố Vui Kỳ Đặc Biệt Số 01
                        </div>
                        <div className="text-gray-500">
                            Đố các bạn, ông Công ông Táo lên chầu trời bằng cách nào?
                        </div>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card cover={
                        <picture>
                            <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2020/01/17/90/58/1.png" alt="" />
                        </picture>
                    }>
                        <div className="font-bold text-lg mb-2">
                            Đố Vui Kỳ Đặc Biệt Số 01
                        </div>
                        <div className="text-gray-500">
                            Đố các bạn, ông Công ông Táo lên chầu trời bằng cách nào?
                        </div>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card cover={
                        <picture>
                            <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2020/01/17/90/58/1.png" alt="" />
                        </picture>
                    }>
                        <div className="font-bold text-lg mb-2">
                            Đố Vui Kỳ Đặc Biệt Số 01
                        </div>
                        <div className="text-gray-500">
                            Đố các bạn, ông Công ông Táo lên chầu trời bằng cách nào?
                        </div>
                    </Card>
                </Col>
            </Row>
            <div className="py-4 text-center">
                <Button type="link" size="large">Xem tất cả</Button>
            </div>
        </div>
    )
}

export default DoVui