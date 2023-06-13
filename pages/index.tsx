import Head from 'next/head'
import CourseList from '@/components/course';
import MyCourse from '@/components/course/my-course';
import Partner from '@/components/home/partner';
import ChuongTrinhHocBySubject from '@/components/subject/chuong-trinh-hoc';
import StatisticsHome from '@/components/statistics';
import { Jumbotron, Testimonial } from '@/components';

export default function Home() {

  return (
    <>
      <Head>
        <title>Trang chủ - Elearning.GetVisa.Vn</title>
        <meta name="description" content="Hệ thống học elearning getvisa.vn, chuyên cung cấp những khoá học online chất lượng cao cho học sinh tiểu học, THCS và THPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbotron />

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
