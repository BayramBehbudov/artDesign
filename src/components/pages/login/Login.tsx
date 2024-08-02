'use client';
import { z } from 'zod';
import { loginSchema } from '../../../settings/resolver';
import { useForm } from 'react-hook-form';
import { Label } from '@ui/label';
import { Input } from '@ui/input';
import { useState } from 'react';
import Link from 'next/link';

interface ILogin {}

const Login: React.FC = (): JSX.Element => {
   const [showPassword, setShowPassword] = useState(false);
   // const form = useForm<z.infer<typeof loginSchema>>({
   //    resolver: zodResolver(loginSchema),
   //    defaultValues: {
   //       email: '',
   //       password: '',
   //    },
   // });

   const loginSubmit = (value: any) => {
      console.log(value);
   };

   return (
      <div className="container flex items-center justify-center bg-black pb-9 pt-9">
         <div className="md:[w-90%] w-[50%] bg-[#1a1a1a] p-4 text-white sm:w-[98%] xl:w-[70%]">
            <div className="h-[64px] w-full">
               <div className="relative mt-8 flex h-[2px] w-full items-center justify-center gap-3 bg-[#999999]">
                  <p className="absolute left-[50%] top-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center border-4 border-[#999999] bg-[#1a1a1a] text-[#999999]">
                     1
                  </p>
                  <p className="absolute top-[100%] mt-6 text-[#999999]">Login</p>
               </div>
            </div>
            <form action="" className="mt-10 flex w-full justify-between sm:flex-col">
               <Label className="flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Email
                  <Input
                     type="email"
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </Label>

               <Label className="relative flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Password
                  <Input
                     type={showPassword ? 'text' : 'password'}
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <p
                     className="absolute right-3 top-[50%] translate-x-1/2"
                     onClick={() => setShowPassword(!showPassword)}
                  >
                     {showPassword ? 'Hide' : 'Show'}
                  </p>
               </Label>
            </form>

            <div className="xxs:flex-col-reverse mt-16 flex items-center justify-end gap-3">
               <Link href={'/register'} className="text-[#999999]">
                  Register
               </Link>
               <Link
                  href={'/'}
                  className="w-fit min-w-28 border-[3px] border-[#666666] bg-black p-2 text-center text-[#40c65b]"
               >
                  Continue
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Login;
