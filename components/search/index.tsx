import { ConfigProvider, Form, Select } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { listClassroom, listSubject } from "@/services/course";

const Search: React.FC = () => {

    const [classroom, setClassroom] = useState<any>([]);
    const [subject, setSubject] = useState<any>([]);

    useEffect(() => {
        listClassroom().then(response => {
            const map = response.data?.map((x: any) => {
                return {
                    value: x.lopHocId,
                    label: x.tenLopHoc
                }
            })
            setClassroom(map)
        })
        listSubject().then(response => {
            const map = response.data?.map((x: any) => {
                return {
                    value: x.monhocid,
                    label: x.tenmon
                }
            })
            setSubject(map)
        })
    }, [])

    const onFinish = async (values: any) => {
        console.log(values)
    }

    return (
        <div>
            <Form onFinish={onFinish}>
                <div className="bg-sky-500 py-3 flex items-center justify-center font-bold gap-4 rounded-lg relative overflow-hidden">
                    <SearchOutlined className="absolute left-0 text-sky-600" style={{ fontSize: "80px", top: -10 }} />
                    <Form.Item className="mb-0">
                        <div className="text-white text-2xl">Tìm bài giảng</div>
                    </Form.Item>
                    <ConfigProvider theme={{
                        token: {
                            fontSize: 18,
                            colorText: '#04689a',
                        }
                    }}>
                        <Form.Item name="class" className="mb-0 w-40">
                            <Select
                                size="large"
                                options={classroom}
                            />
                        </Form.Item>
                        <Form.Item name="subject" className="mb-0 w-40">
                            <Select
                                size="large"
                                options={subject}
                            />
                        </Form.Item>
                    </ConfigProvider>
                    <Form.Item className="mb-0">
                        <button className="text-white rounded-lg bg-orange-500 px-6 py-2 text-lg flex gap-2 items-center shadow" type="submit">
                            <SearchOutlined className="text-xl" />
                            Tìm kiếm
                        </button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Search