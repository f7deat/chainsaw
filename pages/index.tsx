import Head from 'next/head'
import { Button, Divider, Input, Space, Typography } from "antd";
import CourseList from '@/components/course';
import MyCourse from '@/components/course/my-course';
import { PageContainer, ProForm, ProFormText } from '@ant-design/pro-components';
import { Fragment } from 'react';
import Partner from '@/components/home/partner';
import ChuongTrinhHocBySubject from '@/components/subject/chuong-trinh-hoc';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer title={<Fragment />}>

        <div className='flex gap-4 items-center md:mb-20 mb-4'>
          <div className='w-1/2' data-aos="fade-up">
            <div className='text-blue-500 font-medium text-lg'>Sẵn sàng để học</div>
            <div className='text-7xl font-bold mb-3'>
              Khám phá thế giới E-Learning
            </div>
            <div className='text-gray-500 mb-6 text-lg'>
              E-Learning là một trải nghiệm học tập tuyệt vời, cung cấp những khoá học online chất lượng cao cho học sinh tiểu học, THCS và THPT
            </div>
            <Link href='/tai-khoan/dang-ky' className='block'>
              <span className='px-10 py-2 hover:bg-blue-600 rounded-full text-lg bg-blue-500 text-white font-medium'>
                Bắt đầu
              </span>
            </Link>

          </div>
          <div className='w-1/2 flex justify-end'>
            <picture>
              <img src='https://cdn.getvisa.vn/images/banners/Elearning.png' alt='' width={500} data-aos="zoom-out" />
            </picture>
          </div>
        </div>

        <div data-aos='fade-up'>
          <CourseList />
        </div>

        <Divider />

        <div data-aos="fade-up">
          <ChuongTrinhHocBySubject id={1} headerTitle='Khóa Toán tiêu biểu' />
        </div>
        <div data-aos="fade-up">
          <ChuongTrinhHocBySubject id={2} headerTitle='Khóa Tiếng Anh tiêu biểu' />
        </div>
        <div data-aos="fade-up">
          <MyCourse defaultPageSize={4} />
        </div>
        <Divider />


        <div className='bg-blue-200 items-center h-64 rounded-lg flex px-4 pt-4 md:mb-20 mb-4 gap-4' data-aos="fade-up">
          <picture>
            <img src='https://kitpro.site/tutturu/wp-content/uploads/sites/69/2022/02/Elearning100720010-Converted0-800x653.png' alt='' className='h-52' />
          </picture>
          <div>
            <div className='text-yellow-500 text-2xl font-medium mb-2'>Đăng ký</div>
            <div className='text-lg mb-2 font-bold'>Nhận thông tin mới nhất từ chúng tôi</div>
            <ProForm layout='vertical' submitter={false}>
              <Space.Compact style={{ width: '100%' }}>
                <Input size='large' defaultValue="Nhập địa chỉ email" />
                <Button type="primary" size='large'>Đăng ký</Button>
              </Space.Compact>
            </ProForm>
          </div>
        </div>

        <Partner />

      </PageContainer>
    </>
  )
}
