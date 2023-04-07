import Link from "next/link";

type FeatureCardProps = {
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
    return (
        <div className="flex flex-col mb-2 shadow-lg md:-mt-20">
            <div className={`${props.className} rounded-t-lg flex flex-col items-center justify-center text-white`}>
                <div className="text-4xl font-medium pt-6">
                    Tiền lớp
                </div>
                <div className="font-bold" style={{
                    fontSize: 100
                }}>
                    1
                </div>
            </div>
            <Link href="/tieu-hoc/tien-lop-mot/toan">
                <div className="text-lg border px-4 py-2 font-medium flex items-center justify-between hover:bg-gray-100">
                    <div>Toán học</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </Link>
            <div className="text-lg rounded-b-lg border-l border-b border-r px-4 py-2 font-medium flex items-center justify-between hover:bg-gray-100">
                <div>Tiếng anh</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}

export default FeatureCard