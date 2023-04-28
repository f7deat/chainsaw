import { useEffect, useState } from "react"
import HeadTitle from "../title"
import { getMyCourse } from "@/services/course";
import { ProCard } from "@ant-design/pro-components";
import { Button, Card } from "antd";
import Link from "next/link";

const MyCourse: React.FC = () => {

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getMyCourse().then(response => {
            setData(response.data)
        })
    }, []);

    return (
        <div className="md:mb-20 mb-4">
            <HeadTitle center>Khóa học của tôi</HeadTitle>
            <div className="grid md:grid-cols-4 gap-4">
                {
                    data?.map((value: any) => (
                        <ProCard key={value.id} title={value.name} actions={
                            [
                                <Button key={1}>
                                    <Link href={`/khoa-hoc/${value.id}`}>Vào học</Link>
                                </Button>
                            ]
                        }>
                            <Card.Meta title={value.description} />
                        </ProCard>
                    ))
                }
            </div>
        </div>
    )
}

export default MyCourse