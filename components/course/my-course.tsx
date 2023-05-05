import { useEffect, useState } from "react"
import HeadTitle from "../title"
import { getMyCourse } from "@/services/course";
import { Card, Space } from "antd";
import Link from "next/link";
import { LoginOutlined } from "@ant-design/icons";

type MyCourseProps = {
    itemPerRow?: number;
}

const MyCourse: React.FC<MyCourseProps> = (props) => {

    const [data, setData] = useState<API.MyCourse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getMyCourse().then(response => {
            setData(response.data)
            setLoading(false)
        })
    }, []);

    return (
        <div className="md:mb-20 mb-4" hidden={data?.length === 0}>
            <HeadTitle center>Khóa học của tôi</HeadTitle>
            <div className="grid md:grid-cols-4 gap-4">
                {
                    data?.map((value: API.MyCourse) => (
                        <Card key={value.id} loading={loading} actions={
                            [
                                <Link href={`/bai-giang/${value.id}`} key={value.id}>
                                    <Space>
                                        <LoginOutlined />
                                        Vào học
                                    </Space>
                                </Link>
                            ]
                        }
                            cover={<picture>
                                <img src={value.thumbnail} alt={value.name} />
                            </picture>}
                        >
                            <Card.Meta title={value.name} description={value.description} />
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default MyCourse