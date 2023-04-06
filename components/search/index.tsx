import { Form, Select } from "antd"
import { SearchIcon } from "../icons"

const Search: React.FC = () => {

    const onFinish = async (values: any) => {
        console.log(values)
    }

    return (
        <div>
            <Form onFinish={onFinish}>
                <div className="bg-blue-300 py-3 flex items-center justify-center font-bold gap-4 rounded-lg">
                    <Form.Item className="mb-0">
                        <div className="text-white text-xl">Tìm bài giảng</div>
                    </Form.Item>
                    <Form.Item name="class" className="mb-0">
                        <Select
                            size="large"
                            defaultValue="Chọn lớp"
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item name="subject" className="mb-0">
                        <Select
                            size="large"
                            defaultValue="Chọn môn"
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item className="mb-0">
                        <button className="text-white rounded-lg bg-orange-500 px-6 py-2 text-lg flex gap-2 items-center" type="submit">
                            <SearchIcon className="h-6 w-6" />
                            Tìm kiếm</button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Search