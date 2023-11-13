import { checkAnswer } from "@/services/course";
import { playTrueSound, playFalseSound } from "@/utils/audio";
import { DndContext } from "@dnd-kit/core";
import { Alert, message, Divider, Typography, Button } from "antd";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";
import SortableItem from "./item";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { MenuOutlined } from "@ant-design/icons";

type OrderChoiceProps = {
    data: API.QuestionListItem;
    index: number;
    setScore: any;
    score: number;
}

const OrderChoice: React.FC<OrderChoiceProps> = (props) => {
    const { index, setScore, score } = props;
    const [data, setData] = useState<API.QuestionListItem>(props.data)
    const router = useRouter();

    const [answered, setAnswered] = useState<boolean>(false);
    const [orderItems, setOrderItems] = useState<API.AnswerListItem[]>(data.answers)

    const ShowMessage = (item: API.QuestionListItem) => {
        if (item.isCompleted && item.result) {
            return <Alert message={
                (
                    <div>
                        <div className="text-sm">Bạn đã hoàn thành chính xác câu hỏi này</div>
                        <div>Đáp án đúng: <b>{item.suggestion}</b></div>
                    </div>
                )
            } type="success" showIcon className="text-lg" closable />
        }
        if (item.isCompleted && !item.result) {
            return <Alert message={
                (
                    <div>
                        <div className="text-sm">Bạn đã trả lời sai câu hỏi này</div>
                        <div>Đáp án đúng: <b dangerouslySetInnerHTML={{
                            __html: item.suggestion
                        }}></b></div>
                    </div>
                )
            } type="error" showIcon className="text-lg" closable />
        }
        return <Fragment />
    }

    const onAnswer = async () => {
        if (answered || data.isCompleted) {
            return;
        }
        const text = orderItems.map(x => x.text).join(' ');
        const response = await checkAnswer(data.id, 0, text, undefined, data.type, router.query.id);
        let newData = { ...data };
        if (response.correct) {
            setScore(score + 1);
            playTrueSound();
            message.success('Đúng rồi, con giỏi lắm!');
            newData.result = true;
        } else {
            playFalseSound();
            message.error('Sai rồi!');
            newData.result = false;
        }
        newData.isCompleted = true;
        setData(newData);
        setAnswered(true);
    }

    function handleDragEnd(event: {
        active: any; over: any;
    }) {
        if (event.over && event.active.id !== event.over?.id) {
            const activeIndex = orderItems.findIndex(({ id }) => id === event.active.id);
            const overIndex = orderItems.findIndex(({ id }) => id === event.over.id);
            setOrderItems(arrayMove(orderItems, activeIndex, overIndex));
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="text-3xl mb-5" dangerouslySetInnerHTML={{ __html: data.title}} />
                <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                    __html: data.content
                }}>

                </div>
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Alert message="Kéo thả để sắp xếp các từ dưới đây thành câu đúng và nhấn đồng ý" type="info" showIcon closable />
                <Divider />
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="flex gap-4">
                        <SortableContext items={orderItems}>
                            {
                                orderItems.map(answer => (
                                    <SortableItem id={answer.id} key={answer.id}>
                                        <button type="button"
                                            className={`py-4 px-8 flex justify-center items-center hover:bg-slate-200 rounded border relative cursor-move`}>
                                                <span className="text-gray-400 absolute top-0 left-0">
                                                    <MenuOutlined />
                                                </span>
                                            <Typography.Title level={2}>
                                                <div dangerouslySetInnerHTML={{
                                                    __html: answer.text
                                                }} />
                                            </Typography.Title>
                                        </button>
                                    </SortableItem>
                                ))
                            }
                        </SortableContext>
                    </div>
                </DndContext>

                <Divider dashed />

                <Button type="primary" size="large" onClick={() => onAnswer()}>Đồng ý</Button>

                <Divider dashed />

                {ShowMessage(data)}

            </div>
        </div>
    )
}

export default OrderChoice;