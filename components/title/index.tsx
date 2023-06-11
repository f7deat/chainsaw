type TitleProps = {
    subTitle?: string;
    title?: string;
}

const Title: React.FC<TitleProps> = (props) => {

    const { subTitle, title } = props;

    return (
        <div className="mb-8 text-center">
            {
                subTitle && (<h2 className="text-blue-500 text-sm font-medium uppercase">{subTitle}</h2>)
            }
            {
                title && (<div className="font-medium text-blue-900 md:text-3xl text-xl mt-2">{title}</div>)
            }
        </div>
    )
}

export default Title