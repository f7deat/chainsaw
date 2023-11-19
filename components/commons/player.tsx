import { PlayCircleFilled, ReloadOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

type PlayerProps = {
    src: string;
    index: number;
    current: number;
}

const Player: React.FC<PlayerProps> = (props) => {

    const { src, index, current } = props;
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (current === index && audioRef.current) {
            audioRef.current.src = src  + '?nocache=' + new Date().getTime();
            audioRef.current?.play();
        }
    }, [current])

    const playingButton = () => {
        if (isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        } else {
            if (audioRef.current) {
                audioRef.current.src = src  + '?nocache=' + new Date().getTime();
                audioRef.current?.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <>
            <div className="px-2 py-1 border-b border-l border-r border-gray-100">
                <div className="flex gap-2 items-end">
                    <div className="flex justify-center gap-4 text-xl">
                        <audio controls autoPlay hidden ref={audioRef}>
                            <source src={src} type="audio/ogg" />
                            Your browser does not support the audio element.
                        </audio>
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
                </div>
            </div>
        </>
    )
}

export default Player