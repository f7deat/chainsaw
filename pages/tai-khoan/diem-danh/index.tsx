import { Title } from "@/components";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Badge, BadgeProps, Calendar, message } from "antd";
import Head from "next/head";
import dayjs, { Dayjs } from 'dayjs';

export default function Index() {

    const getListData = (value: Dayjs) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'success', content: 'Đã điểm danh' }
                ];
                break;
            case 15:
                listData = [
                    { type: 'success', content: 'Đã điểm danh' },
                ];
                break;
            default:
        }
        return listData || [];
    };

    const getMonthData = (value: Dayjs) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current: Dayjs, info: any) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <>
            <Head>
                <title>Điểm danh</title>
            </Head>
            <main>
                <Title subTitle="Checkin" title="Điểm danh hằng ngày" />
                <div className="mb-4">
                    <Calendar cellRender={cellRender}
                        disabledDate={(currentDate: Dayjs) => {
                            return dayjs() > currentDate.add(1, 'day')
                        }}
                        onSelect={(date) => {
                            console.log(date)
                            if (date.day() !== dayjs().day()) {
                                return;
                            }
                            message.success('Điểm danh thành công!');
                        }}
                    />
                </div>
                <div className="mb-4 flex justify-end gap-4">
                    <button>
                        <QuestionCircleOutlined />
                    </button>
                </div>
            </main>
        </>
    )
}