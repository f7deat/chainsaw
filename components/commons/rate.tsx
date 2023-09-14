import { StarFilled } from "@ant-design/icons";

type RateProps = {
    value: number;
}

const Rate: React.FC<RateProps> = (props) => {
    
    const data = () => {
        const stars = [];
        for (let i = 0; i < props.value; i++) {
            stars.push(<StarFilled key={i} />)
        }
        return stars;
    }

    return (
        <div className="text-yellow-500">
            {
                data()
            }
        </div>
    )
}
export default Rate;