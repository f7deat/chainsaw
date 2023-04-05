import Navbar from "./navbar"
import TopNav from "./top-nav"

const Header: React.FC = () => {
    return (
        <header>
            <TopNav />
            <Navbar />
        </header>
    )
}

export default Header