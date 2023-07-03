import { queryTeacher } from "@/services/user";
import { InboxOutlined, PlusOutlined, UserAddOutlined } from "@ant-design/icons";
import { ProCard, ProList } from "@ant-design/pro-components";
import { Calendar, Form, Input, Rate, message } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
    teacher: API.Teacher;
}> = async (context) => {
    const teacher = await queryTeacher(context.query.id);
    return { props: { teacher: teacher } };
};

export default function Index({ teacher }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const onFinish = () => {
        message.success('Nhận lịch đăng ký thành công!');
    }

    return (
        <>
            <Head>
                <title>{teacher.name}</title>
                <meta name="description" content={teacher.name + ' ' + teacher.jobTitle} />
            </Head>
            <main>
                <div className="md:flex gap-4">
                    <div className="md:w-2/3">
                        <ProCard bordered headerBordered title="Thông tin giáo viên" className="shadow mb-4">
                            <div className="md:flex md:flex-row flex-col md:gap-10 gap-4 md:mb-10 mb-4">
                                <div className="w-52">
                                    <picture>
                                        <img src={teacher.avatar} alt="avatar" className="rounded-full transform transition duration-500 hover:scale-110" />
                                    </picture>
                                </div>
                                <div className="flex-grow">
                                    <div className="text-2xl font-medium uppercase">{teacher.name}</div>
                                    <div className="border-b-2 border-blue-500 mb-2 py-2">{teacher.jobTitle}</div>
                                    <div className="mb-2">Đến từ: <b>{teacher.country}</b></div>
                                    <div className="mb-4">
                                        <Rate defaultValue={5} onChange={() => message.success('Đánh giá thành công!')} />
                                    </div>
                                    <div>
                                        <button className="px-6 py-2 rounded bg-white border rounded hover:border-blue-500 hover:text-blue-500 mr-2"><UserAddOutlined /> Theo dõi</button>
                                        <Link href="/tai-khoan/dang-ky">
                                            <span className="px-6 py-2 rounded bg-blue-500 border border-blue-500 rounded text-white hover:bg-blue-600"><PlusOutlined /> Đăng ký học</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-medium uppercase mb-4">
                                <span className="border-b-2 border-blue-500 py-1">Giới thiệu</span>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: teacher.bio }} />
                        </ProCard>
                        <ProCard title="Thống kê" className="shadow mb-4">
                            <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
                                <div className="flex flex-col items-center justify-center h-24 rounded bg-slate-200">
                                    <div className="font-bold text-blue-500 text-lg">99.00%</div>
                                    <div>Bài học hoàn thành</div>
                                </div>
                                <div className="flex flex-col items-center justify-center h-24 rounded bg-slate-200">
                                    <div className="font-bold text-blue-500 text-lg">99.00%</div>
                                    <div>Tỷ lệ phản hồi</div>
                                </div>
                                <div className="flex flex-col items-center justify-center h-24 rounded bg-slate-200">
                                    <div className="font-bold text-blue-500 text-lg">99.00%</div>
                                    <div>Tỷ lệ tham gia</div>
                                </div>
                                <div className="flex flex-col items-center justify-center h-24 rounded bg-slate-200">
                                    <div className="font-bold text-blue-500 text-lg">99.00%</div>
                                    <div>Đánh giá tích cực</div>
                                </div>
                            </div>
                        </ProCard>
                        <ProCard title="Danh sách khóa học" className="shadow mb-4">
                            <ProList />
                        </ProCard>
                    </div>
                    <div className="md:w-1/3">
                        <ProCard title="Lịch dạy" bordered headerBordered className="shadow mb-4">
                            <Calendar fullscreen={false} />
                        </ProCard>
                        <ProCard className="shadow mb-4">
                            <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label="Đăng ký nhận lịch học" name="email" rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập địa chỉ email'
                                    }
                                ]}>
                                    <Input size="large" placeholder="Nhập địa chỉ email" />
                                </Form.Item>
                                <button type="submit" className="w-full bg-blue-500 px-4 py-2 rounded text-white hover:text-blue-600 hover:text-white font-medium"><InboxOutlined /> Đăng ký</button>
                            </Form>
                        </ProCard>
                    </div>
                </div>
            </main>
        </>
    )
}