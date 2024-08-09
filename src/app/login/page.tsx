import LoginComponent from '@pages/login/Login'
import { NextPage } from 'next'

interface Ipage {}

const Login: NextPage = (): JSX.Element => {
   return (
      <main>
         <div className={`flex h-full flex-col items-center justify-center`}>
            <LoginComponent />
         </div>
      </main>
   )
}

export default Login
