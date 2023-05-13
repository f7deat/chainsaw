import { checkAnswer } from "@/services/course";
import { playTrueSound, playFalseSound } from "@/utils/audio";
import { DndContext, useDroppable } from "@dnd-kit/core";
import { Alert, message, Divider, Row, Col, Typography } from "antd";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";
import Draggable from "./order/draggable";
import Droppable from "./order/droppable";
import SortableItem from "./order/item";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

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

    const ShowMessage = (item: API.QuestionListItem) => {
        if (item.isCompleted && item.result) {
            return <Alert message="Bạn đã hoàn thành chính xác câu hỏi này" type="success" showIcon className="text-lg" />
        }
        if (item.isCompleted && !item.result) {
            return <Alert message="Bạn đã trả lời sai câu hỏi này" type="error" showIcon className="text-lg" />
        }
        return <Fragment />
    }

    const onAnswer = async (values: API.AnswerListItem) => {
        if (answered || data.isCompleted) {
            return;
        }
        const response = await checkAnswer(values.questionId, values.id, '', undefined, data.type, router.query.id);
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

    const getBorder = (item: API.AnswerListItem) => {
        if (item.yourAnswer) {
            if (data.result) {
                return 'border-green-500';
            }
            return 'border-red-500';
        }
        return '';
    }

    const [orderItems, setOrderItems] = useState<API.AnswerListItem[]>(data.answers)

    function handleDragEnd(event: {
        active: any; over: any;
    }) {
        const newI = { ...orderItems };
        console.log(orderItems)
        console.log(event)
        if (event.over && event.active.id !== event.over?.id) {
            const activeIndex = orderItems.findIndex(({ id }) => id === event.active.id);
            const overIndex = orderItems.findIndex(({ id }) => id === event.over.id);

            setOrderItems(arrayMove(orderItems, activeIndex, overIndex));
        }
        // setOrderItems();
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <button className="bg-blue-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
                </div>
                <div className="text-3xl mb-5">{data.title}</div>
                <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                    __html: data.content
                }}>

                </div>
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Divider />
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="flex gap-4">
                        <SortableContext items={orderItems}>
                            {
                                orderItems.map(answer => (
                                    <SortableItem id={answer.id} key={answer.id}>
                                        <button type="button"
                                            className={`py-4 px-8 flex justify-center items-center hover:bg-slate-200 rounded border ${getBorder(answer)}`}>
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

                <Divider />

                {ShowMessage(data)}

            </div>
        </div>
    )
}

export default OrderChoice;