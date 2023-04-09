type JumbotronProps = {
    name: string;
}

const Jumbotron: React.FC<JumbotronProps> = (props) => {
    return (
        <div className="bg-blue-400" style={{
            backgroundImage: 'url(https://static-xx.vuihoc.vn/theme/vuihoc/imgs/math_formulas.png)'
        }}>
            <div className="container mx-auto">
                <div className="h-32 flex items-center text-4xl text-white font-bold">
                    {props.name}
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;