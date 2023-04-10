import Head from 'next/head'
import { Header } from '@/components/header';
import { Card, Col, Divider, Empty, Row } from "antd";
import Search from '@/components/search';
import Footer from '@/components/footer';
import HomeCarousel from './home/carousel';
import CourseList from '@/components/course';
import { HeadTitle, JoinWithUs } from '@/components';
import ListCourseCarouel from '@/components/course/list-carousel';
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
      <Header />
      <HomeCarousel />
      <main className="py-10">

        <div className='bg-white md:mb-10 mb-4'>
          <div className='container mx-auto'>
            <CourseList />

            <Divider />

            <Search />
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

            <ListCourseCarouel title='KHÓA TOÁN TIỂU HỌC NỔI BẬT' />
            <ListCourseCarouel title='KHÓA TIẾNG VIỆT TIỂU HỌC ' />
            <ListCourseCarouel title='KHÓA TIẾNG ANH TIỂU HỌC ' />

            <JoinWithUs />

          </div>
        </div>

        <StatisticsHome />

        <div className='bg-white'>
          <div className='container mx-auto md:py-10 py-4'>
              <HeadTitle>Góc học tập</HeadTitle>
          </div>
        </div>

        <div className='bg-cyan-50 md:py-10 py-4'>
          <div className='container mx-auto'>
            <HeadTitle center>Đố vui</HeadTitle>
            <Row gutter={16}>
              <Col md={6}>
                <Card>
                  <Empty />
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Empty />
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Empty />
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Empty />
                </Card>
              </Col>
            </Row>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
