import Link from 'next/link';
import { IconInverse } from '@ui/Icons';
import { Button } from '@ui/button';
import FooterSocials from './FooterSocials';
import { footerLists } from '@static/index';
interface IFooter {}

const Footer: React.FC = (): JSX.Element => {
   return (
      <footer className={`bg-[#333] py-[70px]`}>
         <div className="container">
            <div className={`flex items-center justify-between gap-5 pb-5`}>
               <div className={`flex flex-col gap-5 text-xs text-white`}>
                  <Link href={'/'}>
                     <IconInverse />
                  </Link>
                  <Button
                     className={`!bg-mainGreen w-fit rounded-lg px-14 py-2 text-xs text-[#1A1A1A]`}
                     variant={'ghost'}
                     type={'button'}
                     aria-label={'connect with support'}
                  >
                     Свяжитесь с онлайн-поддержкой
                  </Button>
                  <FooterSocials />
               </div>
               <ul className={`flex flex-col gap-3 text-xs capitalize`}>
                  {footerLists.one.map((item) => (
                     <li key={item.id}>
                        <Link href={item.href} className={`block text-white hover:text-[#14A557]`}>
                           {item.name}
                        </Link>
                     </li>
                  ))}
               </ul>
               <ul className={`flex flex-col gap-3 text-xs capitalize`}>
                  {footerLists.two.map((item) => (
                     <li key={item.id}>
                        <Link href={item.href} className={`block text-white hover:text-[#14A557]`}>
                           {item.name}
                        </Link>
                     </li>
                  ))}
               </ul>
               <ul className={`flex flex-col gap-3 text-xs capitalize`}>
                  {footerLists.three.map((item) => (
                     <li key={item.id}>
                        <Link href={item.href} className={`block text-white hover:text-[#14A557]`}>
                           {item.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div
               className={`flex flex-col gap-3 border-t border-[rgb(217_217_217/50%)] py-7 text-center text-xs text-[#eee]`}
            >
               <p>Все права на этот сайт принадлежат Invers School (Fekr No).</p>
               <p>2008-2024 ©Школа ИНВЕРС Все права защищены.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
