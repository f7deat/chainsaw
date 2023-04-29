import { checkAnswer } from "@/services/course";
import { Alert, Button, Form, Input, message } from "antd"
import { Fragment, useState } from "react";

type PracticeContentProps = {
    item: any;
    setScore: any;
    score: number;
    total: number;
    index: number;
}


const PracticeContent: React.FC<PracticeContentProps> = (props) => {

    const { item, setScore, score, total, index } = props;
    const [answered, setAnswered] = useState<boolean>(false);

    const onFinish = async (values: any) => {
        if (!values.answer) {
            message.warning('Vui lòng điền đáp án');
            return;
        }

        const point = 10 / total;

        const response = await checkAnswer(item.cauHoiId, "0", values.answer);
        if (response.data.correct) {
            setScore(score + point);
            message.success('Đúng rồi!!!');
        } else {
            message.error('Sai rồi!!!');
        }

        setAnswered(true);
    }

    const ShowMessage = (item: any) => {
        console.log(item)
        if (item.trangThaiHoanThanh === 1 && item.ketQuaThucHien) {
            return <Alert message="Bạn đã hoàn thành chính xác câu hỏi này" type="success" showIcon />
        }
        if (item.trangThaiHoanThanh === 1 && !item.ketQuaThucHien) {
            return <Alert message="Bạn đã trả lời sai câu hỏi này" type="error" showIcon />
        }
        return <Fragment />
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <button className="bg-orange-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
                </div>
                <div className="text-3xl mb-10">{item.noidung}</div>
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Form onFinish={onFinish}>
                    <Form.Item initialValue={item.type} name="type" hidden />
                    <Form.Item name="answer">
                        <Input size="large" disabled={answered || item.trangThaiHoanThanh === 1} />
                    </Form.Item>
                    <Form.Item>
                        <Button disabled={item.trangThaiHoanThanh === 1} size="large" htmlType="submit" className="w-full bg-blue-500 font-bold" type="primary">Gửi câu trả lời</Button>
                    </Form.Item>
                </Form>

                {ShowMessage(item)}

            </div>
        </div>
    )
}

export default PracticeContent