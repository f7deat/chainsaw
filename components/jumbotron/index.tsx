import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['vietnamese'] });

type JumbotronProps = {
    name: string;
}

const Jumbotron: React.FC<JumbotronProps> = (props) => {
    return (
        <div className="bg-blue-400">
            <div className="container mx-auto">
                <div className="h-32 flex items-center text-4xl text-white font-bold">
                    <div className={quicksand.className}>{props.name}</div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;