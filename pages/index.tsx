import Head from 'next/head'
import { Header } from '@/components/header';
import { Divider } from "antd";
import Search from '@/components/search';
import Footer from '@/components/footer';
import HomeCarousel from './home/carousel';
import CourseList from '@/components/course';
import { HeadTitle, JoinWithUs } from '@/components';
import ListCourseCarouel from '@/components/course/list-carousel';
import StatisticsHome from '@/components/statistics';
import GocHocTap from '@/components/home/goc-hoc-tap';
import DoVui from '@/components/home/do-vui';

export default function Home() {

  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeCarousel />
      <main className="py-10">

        <div className='bg-white md:mb-10 mb-4'>
          <div className='container mx-auto'>
            <CourseList />

            <Divider />

            <Search />

            <Divider />

          </div>
        </div>

        <div className='bg-gray-100 md:py-10 py-4'>
          <div className='container mx-auto'>
            <HeadTitle center>Khóa học của tôi</HeadTitle>
            <picture className='py-4 block relative md:mb-10 md-4'>
              <img src='https://static-xx.vuihoc.vn/assets/imgs/banner_my_course.png' alt="img" className='w-full' />
              <button className='bg-orange-500 font-medium text-white absolute px-8 py-4 shadow-lg rounded-full uppercase hover:bg-orange-600' style={{
                top: '40%',
                right: '5%'
              }}>Tư vấn mua khóa học</button>
            </picture>

            <ListCourseCarouel slug='toan-tieu-hoc' />

            <JoinWithUs />

          </div>
        </div>

        <StatisticsHome />

        <div className='bg-white'>
          <div className='container mx-auto md:py-10 py-4'>
            <HeadTitle>Góc học tập</HeadTitle>
            <GocHocTap />
          </div>
        </div>

        <div className='bg-cyan-50 md:py-10 py-4'>
          <div className='container mx-auto'>
            <HeadTitle center>Đố vui</HeadTitle>
            <DoVui />
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
