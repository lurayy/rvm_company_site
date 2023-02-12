import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <Image src={logo} width={165} height={65} alt='logo' />
                </Link>
            </div>
            <div className="btn-try">
                <button>
                    Contact
                </button>
            </div>
        </header>
    )
};

export default Header;