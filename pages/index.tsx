import Head from 'next/head'
import { Header } from '@/components/header';
import { Divider } from "antd";
import Search from '@/components/search';
import HomeCarousel from './home/carousel';
import CourseList from '@/components/course';
import { HeadTitle, JoinWithUs } from '@/components';
import ListCourseCarouel from '@/components/course/list-carousel';
import StatisticsHome from '@/components/statistics';
import GocHocTap from '@/components/home/goc-hoc-tap';
import DoVui from '@/components/home/do-vui';
import MyCourse from '@/components/course/my-course';
import { PageContainer } from '@ant-design/pro-components';

export default function Home() {

  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer title="Khóa học">
        <CourseList />

        <Divider />

        <Search />

        <Divider />

        <div className='bg-gray-100 md:py-10 py-4'>
          <div className='container mx-auto'>
            <MyCourse itemPerRow={4} />
            <ListCourseCarouel slug='toan-tieu-hoc' />

            <Divider />

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
      </PageContainer>
    </>
  )
}
