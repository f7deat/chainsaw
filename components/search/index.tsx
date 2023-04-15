import { ConfigProvider, Form, Select } from "antd"
import { SearchOutlined } from "@ant-design/icons"

const Search: React.FC = () => {

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
                        <Form.Item name="class" className="mb-0" initialValue="all">
                            <Select
                                size="large"
                                options={[
                                    { value: 'all', label: 'Chọn lớp' },
                                    { value: 'lop-0', label: 'Tiền lớp 1' },
                                    { value: 'lop-1', label: 'Lớp 1' },
                                    { value: 'lop-2', label: 'Lớp 2' },
                                    { value: 'lop-3', label: 'Lớp 3' },
                                    { value: 'lop-4', label: 'Lớp 4' },
                                    { value: 'lop-5', label: 'Lớp 5' },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="subject" className="mb-0" initialValue={"all"}>
                            <Select
                                size="large"
                                options={[
                                    { value: 'all', label: 'Chọn môn' },
                                    { value: 'toan', label: 'Toán học' },
                                    { value: 'tieng-anh', label: 'Tiếng Anh' },
                                ]}
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