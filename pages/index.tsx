import Head from 'next/head'
import { Header } from '@/components/header';
import { Divider } from "antd";
import Search from '@/components/search';
import Footer from '@/components/footer';
import HomeCarousel from './home/carousel';
import KhoatoanCarousel from './home/khoatoanslider';
import ElementaryFeature from './tieu-hoc/components/feature';
import CourseList from '@/components/course';

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
      <main className="container mx-auto py-10">

        <CourseList />

        <Divider />

        <Search />
        <Divider />
        <KhoatoanCarousel/>
      </main>
      <Footer />
    </>
  )
}
