type HeadTitleProps = {
    children?: any;
    center?: boolean;
}

const HeadTitle: React.FC<HeadTitleProps> = (props) => {
    return (
        <div className="md:text-4xl font-bold text-lg md:mb-10 mb-4 uppercase">
            <div className={props.center ? 'text-center' : 'text-left'}>
                <span className="py-2 border-b-4 border-orange-500">{props.children}</span>
            </div>
        </div>
    )
}

export default HeadTitle