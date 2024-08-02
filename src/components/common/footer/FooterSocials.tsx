import { footerSocials } from '@static/index';
import Image from 'next/image';
import Link from 'next/link';

const FooterSocials: React.FC = (): JSX.Element => {
   return (
      <ul className={`flex items-center gap-3`}>
         {footerSocials.map((link) => (
            <li key={link.name}>
               <Link className={`block hover:scale-110`} href={link.href} aria-label={`link to ${link.name}`}>
                  <Image src={link.src} alt={link.name} width={link.width} height={link.height} />
               </Link>
            </li>
         ))}
      </ul>
   );
};

export default FooterSocials;
