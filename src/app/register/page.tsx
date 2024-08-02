import RegisterComponent from '@pages/register/Register';
import { NextPage } from 'next';

interface Ipage {}

const Register: NextPage = (): JSX.Element => {
   return (
      <main>
         <RegisterComponent />
      </main>
   );
};

export default Register;
