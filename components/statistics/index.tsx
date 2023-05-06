import { BookOutlined, InfoCircleOutlined, QuestionOutlined, UserOutlined } from "@ant-design/icons";
import { StatisticCard } from "@ant-design/pro-components";

const StatisticsHome: React.FC = () => {
    return (
      <StatisticCard.Group direction="row">
        <StatisticCard
          statistic={{
            title: 'Học viên',
            value: 2176,
            icon: <UserOutlined />,
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Bài giảng',
            value: 475,
            icon: <BookOutlined />,
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Bài ôn tập',
            value: 87,
            icon: <QuestionOutlined />,
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Đề luyện thi',
            value: 1754,
            icon: <InfoCircleOutlined />,
          }}
        />
      </StatisticCard.Group>
    )
}

export default StatisticsHome