import Link from "next/link"

const Jumbotron: React.FC = () => {
    return (
        <div className='md:flex gap-4 items-center md:mb-20 mb-4 md:flex-row flex-col'>
        <div className='md:w-1/2' data-aos="fade-up">
          <div className='text-blue-500 font-medium md:text-lg text-sm'>Sẵn sàng để học</div>
          <div className='md:text-7xl text-3xl font-bold mb-3'>
            Khám phá thế giới E-Learning
          </div>
          <div className='text-gray-500 mb-8 md:text-lg text-sm'>
            E-Learning là một trải nghiệm học tập tuyệt vời, cung cấp những khoá học online chất lượng cao cho học sinh tiểu học, THCS và THPT
          </div>
          <div className='text-center md:text-left'>
            <Link href='/tai-khoan/dang-ky' className="relative">
              <span className='md:px-12 px-4 md:py-3 py-2 hover:bg-blue-600 rounded-full text-xl bg-blue-500 text-white font-medium'>
                Bắt đầu
              </span>
              <picture className="absolute w-24" style={{
                top: -38,
                right: -48
              }}>
                <img src="https://www.hoyolab.com/_nuxt/img/2fd5018.png" alt="hello" />
              </picture>
            </Link>
          </div>

        </div>
        <div className='md:w-1/2 md:flex hidden justify-end'>
          <picture>
            <img src='https://cdn.getvisa.vn/images/banners/Elearning.png' alt='' width={500} data-aos="zoom-out" />
          </picture>
        </div>
      </div>
    )
}

export default Jumbotron