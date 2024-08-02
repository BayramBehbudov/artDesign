import { Button } from '@ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';

interface ISign_Shop {}

const Sign_Shop: React.FC = (): JSX.Element => {
   return (
      <div className="flex items-center gap-3">
         <Link href="/login" className="rounded-lg bg-[#14A557] p-2 text-black hover:bg-[#40c65b]">
            SignIn/SignUp
         </Link>
         <LuShoppingCart size={25} className="cursor-pointer" />
      </div>
   );
};

export default Sign_Shop;
