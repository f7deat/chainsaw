import { Title } from "@/components";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Calendar } from "antd";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Điểm danh</title>
            </Head>
            <main>
                <Title subTitle="Checkin" title="Điểm danh hằng ngày" />
                <div className="mb-4">
                <Calendar />
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