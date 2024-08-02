import Login from '@pages/login/Login';
import { NextPage } from 'next';

interface Ipage {}

const page: NextPage = (): JSX.Element => {
   return (
      <main>
         <Login />
      </main>
   );
};

export default page;
