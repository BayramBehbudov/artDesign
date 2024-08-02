import { IChildren, IClassName } from '@interfaces/interfaces';
import { headerNavbar } from '@static/index';
import Link from 'next/link';

interface INavbar extends IClassName {}

const Navbar: React.FC<INavbar> = ({ className }): JSX.Element => {
   return (
      <div className={`flex gap-3 ${className} text-white`}>
         {headerNavbar.map((item) => (
            <Link
               key={item.name}
               href={item.href}
               className="p-5 hover:text-[#14A557] sm:w-full sm:border-b sm:border-slate-700"
            >
               {item.name}
            </Link>
         ))}
      </div>
   );
};

export default Navbar;
