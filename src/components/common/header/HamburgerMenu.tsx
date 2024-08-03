import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@ui/sheet';
import { RxHamburgerMenu } from "react-icons/rx";

import Navbar from './Navbar';
import Sign from './Sign';

interface IHamburgerMenu {}

const HamburgerMenu: React.FC = (): JSX.Element => {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <RxHamburgerMenu size={25} className="hidden cursor-pointer sm:block"/>
         </SheetTrigger>
         <SheetContent side="left" className="hidden border-none bg-[#212121] p-5 sm:block">
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex h-full flex-col justify-between ">
               <Navbar className="sm:flex-col sm:items-start mt-6" />
               <Sign className="w-full" />
            </SheetDescription>
         </SheetContent>
      </Sheet>
   );
};

export default HamburgerMenu;
