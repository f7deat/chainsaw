import Head from 'next/head'
import CourseList from '@/components/course';
import MyCourse from '@/components/course/my-course';
import { PageContainer, ProForm, ProFormText } from '@ant-design/pro-components';
import { Fragment } from 'react';
import Partner from '@/components/home/partner';
import ChuongTrinhHocBySubject from '@/components/subject/chuong-trinh-hoc';
import Link from 'next/link';
import StatisticsHome from '@/components/statistics';

export default function Home() {

  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='md:flex gap-4 items-center md:mb-20 mb-4 md:flex-row flex-col'>
        <div className='md:w-1/2' data-aos="fade-up">
          <div className='text-blue-500 font-medium md:text-lg text-sm'>Sẵn sàng để học</div>
          <div className='md:text-7xl text-3xl font-bold mb-3'>
            Khám phá thế giới E-Learning
          </div>
          <div className='text-gray-500 mb-6 md:text-lg text-sm'>
            E-Learning là một trải nghiệm học tập tuyệt vời, cung cấp những khoá học online chất lượng cao cho học sinh tiểu học, THCS và THPT
          </div>
          <div className='text-center md:text-left'>
            <Link href='/tai-khoan/dang-ky' className='block'>
              <span className='md:px-12 px-4 md:py-3 py-2 hover:bg-blue-600 rounded-full text-lg bg-blue-500 text-white font-medium'>
                Bắt đầu
              </span>
            </Link>
          </div>

        </div>
        <div className='md:w-1/2 md:flex hidden justify-end'>
          <picture>
            <img src='https://cdn.getvisa.vn/images/banners/Elearning.png' alt='' width={500} data-aos="zoom-out" />
          </picture>
        </div>
      </div>

      <div data-aos='fade-up' className='py-4'>
        <CourseList />
      </div>

      <div data-aos="fade-up" className='py-4'>
        <ChuongTrinhHocBySubject id={1} headerTitle={
          <div className='text-2xl'>Khóa Toán tiêu biểu</div>
        } />
      </div>

      <StatisticsHome />

      <div data-aos="fade-up">
        <ChuongTrinhHocBySubject id={2} headerTitle={
          <div className='text-2xl'>Khóa Tiếng Anh tiêu biểu</div>
        } />
      </div>
      <div data-aos="fade-up" className='mb-4'>
        <MyCourse defaultPageSize={4} />
      </div>

      <div className='bg-blue-200 items-center h-64 rounded-lg flex px-4 pt-4 md:mb-20 mb-4 gap-4' data-aos="fade-up">
        <picture>
          <img src='https://kitpro.site/tutturu/wp-content/uploads/sites/69/2022/02/Elearning100720010-Converted0-800x653.png' alt='' className='h-52' />
        </picture>
        <div>
          <div className='text-yellow-500 text-2xl font-medium mb-2'>Đăng ký</div>
          <div className='text-lg mb-2 text-gray-600'>Nhận thông tin mới nhất từ chúng tôi</div>
          <ProForm layout='vertical' submitter={false}>
            <div className='flex gap-4'>
              <input type='text' placeholder='Nhập địa chỉ email' className='rounded-full px-4 py-2' />
              <button type='button' className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600'>Đăng ký</button>
            </div>
          </ProForm>
        </div>
      </div>

      <Partner />

    </>
  )
}
