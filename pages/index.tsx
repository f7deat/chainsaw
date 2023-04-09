import Head from 'next/head'
import { Header } from '@/components/header';
import { Card, Col, Divider, Empty, Row } from "antd";
import Search from '@/components/search';
import Footer from '@/components/footer';
import HomeCarousel from './home/carousel';
import KhoatoanCarousel from './home/khoatoanslider';
import CourseList from '@/components/course';
import { HeadTitle } from '@/components';

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
              <img src='https://static-xx.vuihoc.vn/assets/imgs/banner_my_course.png' alt="img" />
              <button className='bg-orange-500 font-medium text-white absolute px-8 py-4 shadow-lg rounded-full uppercase hover:bg-orange-600' style={{
                top: 80,
                right: 200
              }}>Tư vấn mua khóa học</button>
            </picture>

            <HeadTitle center={false}>KHÓA TOÁN TIỂU HỌC NỔI BẬT</HeadTitle>
            <KhoatoanCarousel />

          </div>
        </div>

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
