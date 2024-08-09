import { IClassName } from '@interfaces/interfaces'
import Link from 'next/link'

interface ISign extends IClassName {}

const Sign: React.FC<ISign> = ({ className }): JSX.Element => {
   return (
      <Link
         href="/login"
         className={`rounded-lg bg-[#14A557] p-2 text-center text-black hover:bg-[#40c65b] ${className}`}
      >
         Вход / Регистрация
      </Link>
   )
}

export default Sign
