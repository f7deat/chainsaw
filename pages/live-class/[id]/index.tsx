import { AudioOutlined, CameraOutlined, CiCircleFilled, DesktopOutlined, FlagOutlined, TrademarkCircleOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Empty } from "antd";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Học trực tuyến</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main>
                <h1 className="font-medium text-3xl text-blue-900 mb-4">Live-Class</h1>
                <div className="md:flex gap-4">
                    <div className="md:w-3/4">
                        <div className="relative bg-gray-300 mb-4" style={{
                            height: 600
                        }}>
                            <span className="bg-white py-1 px-2 rounded-lg absolute top-5 left-5">
                                <span className="text-red-700 mr-2">
                                    <CiCircleFilled />
                                </span>
                                <span className="font-bold mr-2">LIVE</span>
                                <span className="text-gray-400">01:37:50</span>
                            </span>
                        </div>
                        <div className="mb-4 flex justify-center gap-6">
                            <div className="text-center">
                                <button className="shadow h-12 w-12 rounded-full flex items-center justify-center mb-2 text-2xl bg-white hover:bg-blue-100">
                                    <CameraOutlined />
                                </button>
                                Cam
                            </div>
                            <div className="text-center">
                                <button className="shadow h-12 w-12 rounded-full flex items-center justify-center mb-2 text-2xl bg-white hover:bg-blue-100">
                                    <AudioOutlined />
                                </button>
                                Mic
                            </div>
                            <div className="text-center">
                                <button className="shadow h-12 w-12 rounded-full flex items-center justify-center mb-2 text-2xl bg-white hover:bg-blue-100">
                                    <DesktopOutlined />
                                </button>
                                Share
                            </div>
                            <div className="text-center">
                                <button className="shadow h-12 w-12 rounded-full flex items-center justify-center mb-2 text-2xl text-red-500 bg-white hover:bg-blue-100">
                                    <TrademarkCircleOutlined />
                                </button>
                                Rec
                            </div>
                            <div className="text-center">
                                <button className="shadow h-12 w-12 rounded-full flex items-center justify-center mb-2 text-2xl bg-white hover:bg-blue-100">
                                    <FlagOutlined />
                                </button>
                                Report
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <ProCard className="shadow" title="Bình luận" headerBordered>
                            <Empty />
                        </ProCard>
                    </div>
                </div>
            </main>
        </>
    )
}