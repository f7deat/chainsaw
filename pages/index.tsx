import Head from 'next/head'
import {  Divider } from "antd";
import CourseList from '@/components/course';
import MyCourse from '@/components/course/my-course';
import { PageContainer } from '@ant-design/pro-components';
import { Fragment } from 'react';
import Partner from '@/components/home/partner';
import ChuongTrinhHocBySubject from '@/components/subject/chuong-trinh-hoc';

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
        <CourseList />

        <Divider />

        <ChuongTrinhHocBySubject id={1} headerTitle='Khóa Toán tiêu biểu' />

        <ChuongTrinhHocBySubject id={2} headerTitle='Khóa Tiếng Anh tiêu biểu' />

        <MyCourse />

        <Divider />

        <Partner />

        {/* <StatisticsHome /> */}

        {/* <div className='bg-white'>
          <div className='container mx-auto md:py-10 py-4'>
            <GocHocTap />
          </div>
        </div> */}

        {/* <div className='bg-cyan-50 md:py-10 py-4'>
          <div className='container mx-auto'>
            <DoVui />
          </div>
        </div> */}
      </PageContainer>
    </>
  )
}
