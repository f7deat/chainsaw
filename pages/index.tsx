import Head from 'next/head'
import CourseList from '@/components/course';
import MyCourse from '@/components/course/my-course';
import Partner from '@/components/home/partner';
import ChuongTrinhHocBySubject from '@/components/subject/chuong-trinh-hoc';
import StatisticsHome from '@/components/statistics';
import { Jumbotron, Testimonial } from '@/components';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { queryTeachers } from '@/services/user';
import Teachers from '@/components/accounts/teachers';
import ArticleSpotlight from '@/components/articles/article-spotlight';
import WhatIs from '@/components/home/what-is';
import { Modal } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppContext } from '@/models/app-context';

export const getServerSideProps: GetServerSideProps<{
  teachers: API.User[];
}> = async (context) => {
  const teachers = await queryTeachers({
    pageSize: 4,
    current: 1
  });
  return { props: { teachers: teachers.data } };
};

export default function Home({ teachers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [open, setOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const { user } = useContext<API.AppContext>(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setIsClient(true)
    }, 2000);
  }, [])

  return (
    <>
      <Head>
        <title>Trang chủ - Elearning.GetVisa.Vn</title>
        <meta name="description" content="Hệ thống học elearning getvisa.vn, chuyên cung cấp những khoá học online chất lượng cao cho học sinh tiểu học, THCS và THPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbotron />

      <div data-aos='fade-up' className='md:mb-20 mb-8'>
        <CourseList />
      </div>

      <WhatIs />

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

      {
        teachers && (<Teachers data={teachers} />)
      }

      <Testimonial />

      <div data-aos="fade-up" className='md:mb-10 mb-4'>
        <MyCourse defaultPageSize={4} />
      </div>

      <ArticleSpotlight />

      <div className='md:mb-10 mb-4'>
        <Partner />
      </div>

      {
        isClient && !user && (
          <Modal open={open} centered footer={false} onCancel={() => setOpen(false)}>
            <Link href="/tai-khoan/redeem">
              <picture className='relative'>
                <img src='https://i.imgur.com/NwpiLrf.jpg' alt='KM' loading='lazy' />
              </picture>
              <div className='text-center'>
                <button className='left-50 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>Nhận quà</button>
              </div>
            </Link>
          </Modal>
        )
      }
    </>
  )
}
