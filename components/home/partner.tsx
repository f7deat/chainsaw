import { Typography } from "antd"
import Title from "../title"

const Partner: React.FC = () => {

    const data = [
        {
            id: 1,
            logo: 'https://finder.createx.studio/img/real-estate/brands/01_color.svg'
        },
        {
            id: 2,
            logo: 'https://finder.createx.studio/img/real-estate/brands/02_color.svg'
        },
        {
            id: 3,
            logo: 'https://finder.createx.studio/img/real-estate/brands/03_color.svg'
        },
        {
            id: 4,
            logo: 'https://finder.createx.studio/img/real-estate/brands/04_color.svg'
        },
        {
            id: 5,
            logo: 'https://finder.createx.studio/img/real-estate/brands/05_color.svg'
        },
        {
            id: 6,
            logo: 'https://finder.createx.studio/img/real-estate/brands/06_color.svg'
        }
    ]

    return (
        <div>
            <Title title="Đồng hành cùng chúng tôi" subTitle="Our Clients" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4" data-aos="fade-up">
                {
                    data.map(x => (
                        <picture key={x.id}>
                            <img src={x.logo} alt="" className="w-full transform transition duration-500 hover:scale-110" loading="lazy" height={96} />
                        </picture>
                    ))
                }
            </div>
        </div>
    )
}

export default Partner