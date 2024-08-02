import Image from 'next/image';
import Sign from './Sign';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';
import { LuShoppingCart } from 'react-icons/lu';
import Card from './Card';

interface IHeader {}

const Header: React.FC = (): JSX.Element => {
   return (
      <header className="container flex h-20 items-center justify-between bg-[#212529] text-white">
         <div className="flex items-center gap-3">
            <Image src="/Header/logo.webp" alt="headerLogo" width={70} height={70} />
            <HamburgerMenu />
         </div>
            <Navbar className={'items-center sm:hidden'} />
         <div className="flex items-center gap-3">
            <Sign />
            <Card />
         </div>
      </header>
   );
};

export default Header;
