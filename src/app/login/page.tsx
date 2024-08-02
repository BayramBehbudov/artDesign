import LoginComponent from '@pages/login/Login';
import { NextPage } from 'next';

interface Ipage {}

const Login: NextPage = (): JSX.Element => {
   return (
      <main>
         <LoginComponent />
      </main>
   );
};

export default Login;
