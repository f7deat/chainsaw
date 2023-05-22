import { BookOutlined, InfoCircleOutlined, QuestionCircleOutlined, UserAddOutlined } from "@ant-design/icons"

const StatisticsHome: React.FC = () => {

  return (
      <section className="statistic grid md:grid-cols-4 grid-cols-2 md:my-20 mb-10 gap-4">
          <Item icon={<UserAddOutlined />} text="Học viên" count="1000+" color="text-orange-500"/>
          <Item icon={<QuestionCircleOutlined />} text="Câu hỏi" count="3500+" color="text-sky-500" />
          <Item icon={<BookOutlined />} text="Bài giảng" count="1000+" color="text-green-500" />
          <Item icon={<InfoCircleOutlined />} text="Đề thi" count="100+" color="text-red-500" />
      </section>
  )
}

function Item(props: any) {
  return (
      <div className="shadow mb-4 px-8 bg-white md:py-6 py-4" data-aos="fade-up">
          <div className="flex md:gap-8 gap-4 items-center jusitfy-center">
              <div className={props.color}>
                <span className="md:text-4xl text-2xl">{props.icon}</span>
              </div>
              <div>
                  <span className="text-2xl font-bold md:text-4xl text-blue-800">{props.count}</span>
                  <p className="text-gray-400">{props.text}</p>
              </div>
          </div>
      </div>
  )
}

export default StatisticsHome