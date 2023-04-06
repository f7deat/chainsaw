import { Row, Col, Card, Empty } from "antd"

const ElementaryFeature: React.FC = () => {
    return (
        <div>
            <Row gutter={8}>
                <Col span={4}>
                    <div className="flex flex-col">
                        <div className="bg-pink-400 rounded-t-lg flex flex-col items-center justify-center text-white">
                            <div className="text-4xl font-medium pt-6">
                                Tiền lớp
                            </div>
                            <div className="font-bold" style={{
                                fontSize: 100
                            }}>
                                1
                            </div>
                        </div>
                        <div className="text-lg border px-4 py-2 font-medium flex items-center justify-between">
                            <div>Toán học</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="text-lg rounded-b-lg border-l border-b border-r px-4 py-2 font-medium flex items-center justify-between">
                            <div>Tiếng anh</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </Col>
                <Col span={4}>
                    <Card>
                        <Empty />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Empty />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Empty />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Empty />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Empty />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ElementaryFeature