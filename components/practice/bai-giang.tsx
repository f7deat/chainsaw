import { playAudio } from "@/utils/audio";
import { SoundOutlined } from "@ant-design/icons";
import { Button, Divider, Space } from "antd";

type BaiGiangProps = {
    data: any;
    index: number;
}

const BaiGiang: React.FC<BaiGiangProps> = (props) => {

    const { data, index } = props;

    const onListen = () => {
        playAudio(data.suggestion);
    }

    return (
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <button className="bg-orange-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
                </div>
                <div className="text-3xl mb-5">{data.title}</div>
                <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                    __html: data.content
                }}></div>
                
                <Button onClick={onListen} size="large" type="primary">
                    <Space>
                    <SoundOutlined />
                    <span className="font-medium">Nghe</span>
                    </Space>
                </Button>

                <Divider />

            </div>
    )
}

export default BaiGiang