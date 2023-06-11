import Head from 'next/head'
import CourseList from '@/components/course';
import MyCourse from '@/components/course/my-course';
import Partner from '@/components/home/partner';
import ChuongTrinhHocBySubject from '@/components/subject/chuong-trinh-hoc';
import Link from 'next/link';
import StatisticsHome from '@/components/statistics';
import { Testimonial } from '@/components';

export default function Home() {

  return (
    <>
      <Head>
        <title>Trang chủ - Elearning.GetVisa.Vn</title>
        <meta name="description" content="Hệ thống học elearning getvisa.vn, chuyên cung cấp những khoá học online chất lượng cao cho học sinh tiểu học, THCS và THPT" />
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

      <div data-aos="fade-up" className='md:mb-16 mb-4'>
        <ChuongTrinhHocBySubject id={2} headerTitle={
          <div className='text-2xl'>Khóa Tiếng Anh tiêu biểu</div>
        } />
      </div>

      <Testimonial />

      <div data-aos="fade-up" className='mb-4'>
        <MyCourse defaultPageSize={4} />
      </div>

      <Partner />

    </>
  )
}
