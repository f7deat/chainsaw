import Link from "next/link"
import { Quicksand } from "next/font/google"
import { navbars } from "@/mock"

const quicksand = Quicksand({ subsets: ['latin'] })

const Navbar: React.FC = () => {
    return (
        <nav className={`bg-orange-500 ${quicksand.className}`}>
            <div className="flex container mx-auto gap-8">
                <Link href="/">
                    <button className="h-16 flex">
                        <picture>
                            <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/02/18/7d72_logo-vuihoc-bitu-normal.png" alt="logo" className="h-12" />
                        </picture>
                    </button>
                </Link>
                {
                    navbars.map((navbar, i) => (
                        <Link href={navbar.url} key={i}>
                            <div className="h-16 gap-2 text-white font-bold items-center flex opacity-75 hover:opacity-100 uppercase">
                                {navbar.icon}
                                <span>{navbar.name}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar