import Image from 'next/image';
import Sign_Shop from './Sign_Shop';
import Navbar from './Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import HamburgerMenu from './HamburgerMenu';

interface IHeader {}

const Header: React.FC = (): JSX.Element => {
   return (
      <header className="container flex h-20 items-center justify-between bg-[#212529] text-white">
         <div className="flex items-center gap-3">
            <Image src="/Header/logo.webp" alt="headerLogo" width={70} height={70} />
            <GiHamburgerMenu size={25} className="hidden cursor-pointer sm:block" />
            <HamburgerMenu/>
         </div>
         <Navbar className={'sm:hidden'} />
         <Sign_Shop />
      </header>
   );
};

export default Header;
