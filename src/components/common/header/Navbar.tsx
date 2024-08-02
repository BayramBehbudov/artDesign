import { IChildren, IClassName } from '@interfaces/interfaces';
import { headerNavbar } from '@static/index';
import Link from 'next/link';

interface INavbar extends IClassName {}

const Navbar: React.FC<INavbar> = ({ className }): JSX.Element => {
   return (
      <div className={`flex items-center gap-3 ${className}`}>
         {headerNavbar.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-[#14A557]">
               {item.name}
            </Link>
         ))}
      </div>
   );
};

export default Navbar;
