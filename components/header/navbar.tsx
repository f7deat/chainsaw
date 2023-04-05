import { BookIcon } from "../icons"

const Navbar: React.FC = () => {
    return (
        <nav className="bg-orange-500">
            <div className="flex container mx-auto">
                <button className="h-16 flex">
                    <picture>
                        <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/02/18/7d72_logo-vuihoc-bitu-normal.png" alt="logo" className="h-12" />
                    </picture>
                </button>
                <div className="h-16 gap-2 text-white font-bold items-center flex">
                    <BookIcon />
                    <span>Tự ôn luyện</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar