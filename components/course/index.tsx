import { Button, Carousel } from "antd"
import CourseItem from "./item"
import { elementary } from "@/mock/elementary"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { useRef } from "react"

const CourseList: React.FC = () => {

    const carouselRef = useRef<any>();

    return (
        <div>
            <div className="flex justify-end items-center mb-2 gap-2">
                <Button icon={<ArrowLeftOutlined />} type="link" onClick={() => carouselRef.current?.prev()}/>
                <Button icon={<ArrowRightOutlined />} type="link"  onClick={() => carouselRef.current?.next()}/>
            </div>
            <Carousel slidesToShow={6} infinite slidesToScroll={1} autoplay arrows
                ref={carouselRef}
                
                responsive={[
                    {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]}>
                {
                    elementary.map((ele, i) => (
                        <CourseItem course={ele} key={i} />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CourseList