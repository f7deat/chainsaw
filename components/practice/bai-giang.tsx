import { playAudio } from "@/utils/audio";
import { SoundOutlined } from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import { useEffect } from "react";

type BaiGiangProps = {
    data: any;
    index: number;
}

const BaiGiang: React.FC<BaiGiangProps> = (props) => {

    const { data, index } = props;
    useEffect(() => {
        if (data?.suggestion) {
            playAudio(data.suggestion);
        }
    }, [data.suggestion])

    const onListen = () => {
        playAudio(data.suggestion);
    }

    return (
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <button className="bg-blue-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
                </div>
                <div className="text-3xl mb-5">{data.title}</div>
                <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                    __html: data.content
                }}></div>
                
                <Button onClick={onListen} size="large" type="primary">
                    <Space>
                    <SoundOutlined />
                    <span className="font-medium">Nghe lại</span>
                    </Space>
                </Button>

                <Divider dashed />

            </div>
    )
}

export default BaiGiang