import Link from "next/link"
import { Quicksand } from "next/font/google"
import { navbars } from "@/mock"
import { HomeOutlined } from "@ant-design/icons"

const quicksand = Quicksand({ subsets: ['latin'] })

const Navbar: React.FC = () => {
    return (
        <nav className={`bg-orange-500 ${quicksand.className}`}>
            <div className="flex container mx-auto gap-8">
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