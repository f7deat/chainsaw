import { Carousel } from "antd"

const HomeCarousel: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        height: '730px',
        color: '#fff',
        lineHeight: '730px',
        textAlign: 'center',
        background: '#364d79',
      };

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <picture>
                        <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/10/06/a357_2.jpg" alt="1" className="w-full" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/11/16/12ae_artboard-6-copy--284-29.png" alt="1" className="w-full" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/08/25/8309_banner-website-fixx-copy.jpg" alt="1" className="w-full" />
                    </picture>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeCarousel