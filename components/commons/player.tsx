import { PlayCircleFilled, ReloadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

type PlayerProps = {
    src: string;
    index: number;
    current: number;
}

const Player: React.FC<PlayerProps> = (props) => {

    const { src, index, current } = props;
    const [isPlaying, setIsPlaying] = useState(false);

    const [audio] = useState(new Audio(src))

    useEffect(() => {
        if (index === current) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }, [current]);

    const playingButton = () => {
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <div className="px-2 py-1 border-b border-l border-r border-gray-100">
                <div className="flex gap-2 items-end">
                    <div className="flex justify-center gap-4 text-xl">
                        {!isPlaying ? (
                            <button className="text-blue-500" id='supersecretbutton' onClick={playingButton} >
                                <PlayCircleFilled />
                            </button>
                        ) : (
                            <button className="text-blue-500" onClick={playingButton}>
                                <ReloadOutlined />
                            </button>
                        )}
                    </div>
                    <div>
                        <input
                            type="range"
                            min="0"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player