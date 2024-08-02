import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { LuShoppingCart } from 'react-icons/lu';

interface ICard {}

const Card: React.FC = (): JSX.Element => {
   return (
      <Popover>
         <PopoverTrigger>
            <LuShoppingCart size={25} className="cursor-pointer" />
         </PopoverTrigger>
         <PopoverContent className="mt-2">Your shopping card is empty</PopoverContent>
      </Popover>
   );
};

export default Card;
