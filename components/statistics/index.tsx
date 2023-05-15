import { BookOutlined, InfoCircleOutlined, QuestionCircleOutlined, UserAddOutlined } from "@ant-design/icons"

const StatisticsHome: React.FC = () => {

  return (
      <section className="statistic md:flex md:my-20 mb-10 gap-4">
          <Item icon={<UserAddOutlined />} text="Học viên" count="1000+" color="text-orange-500"/>
          <Item icon={<QuestionCircleOutlined />} text="Câu hỏi" count="3500+" color="text-sky-500" />
          <Item icon={<BookOutlined />} text="Bài giảng" count="1000+" color="text-green-500" />
          <Item icon={<InfoCircleOutlined />} text="Đề thi" count="100+" color="text-red-500" />
      </section>
  )
}

function Item(props: any) {
  return (
      <div className="md:w-1/4 counts mb-4">
          <div className="count-box shadow flex gap-8" data-aos="fade-up">
              <div className={props.color}>{props.icon}</div>
              <div>
                  <span className="purecounter text-blue-800">{props.count}</span>
                  <p className="text-gray-400">{props.text}</p>
              </div>
          </div>
      </div>
  )
}

export default StatisticsHome