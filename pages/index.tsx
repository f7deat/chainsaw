import Head from 'next/head'
import { Carousel, Divider } from "antd";
import Search from '@/components/search';
import CourseList from '@/components/course';
import { HeadTitle, JoinWithUs } from '@/components';
import ListCourseCarouel from '@/components/course/list-carousel';
import StatisticsHome from '@/components/statistics';
import GocHocTap from '@/components/home/goc-hoc-tap';
import DoVui from '@/components/home/do-vui';
import MyCourse from '@/components/course/my-course';
import { PageContainer } from '@ant-design/pro-components';
import { Fragment } from 'react';

export default function Home() {

  const items = [
    'https://cdn.getvisa.vn/images/banners/04.png',
    'https://cdn.getvisa.vn/images/banners/03.png',
  ]

  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer title={<Fragment />}>
        
        <Carousel autoplay dots={true} arrows={true}>
        {
          items.map((x, i) => <picture key={i}>
            <img src={x} alt='1' className='h-96 object-fit-cover w-full' />
          </picture>)
        }
        </Carousel>

        <Divider />

        <CourseList />

        {/* <Divider /> */}

        {/* <Search /> */}

        <Divider />

        <MyCourse />
        {/* <ListCourseCarouel slug='toan-tieu-hoc' /> */}

        <Divider />

        {/* <JoinWithUs /> */}


        <StatisticsHome />

        {/* <div className='bg-white'>
          <div className='container mx-auto md:py-10 py-4'>
            <HeadTitle>Góc học tập</HeadTitle>
            <GocHocTap />
          </div>
        </div> */}

        {/* <div className='bg-cyan-50 md:py-10 py-4'>
          <div className='container mx-auto'>
            <HeadTitle center>Đố vui</HeadTitle>
            <DoVui />
          </div>
        </div> */}
      </PageContainer>
    </>
  )
}
