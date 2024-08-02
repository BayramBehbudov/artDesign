'use client';
import { z } from 'zod';
import { registerSchema } from '../../../settings/resolver';
import { useForm } from 'react-hook-form';
import { Label } from '@ui/label';
import { Input } from '@ui/input';
import Link from 'next/link';
import { Checkbox } from '@ui/checkbox';

interface IRegister {}

const Register: React.FC = (): JSX.Element => {
   //  const form = useForm<z.infer<typeof registerSchema>>({
   //     resolver: zodResolver(registerSchema),
   //     defaultValues: {
   //        email: '',
   //        password: '',
   //        confirmPassword: '',
   //        name: '',
   //        lastName: '',
   //        phoneNumber: '',

   //     },
   //  });

   const registerSubmit = (value: any) => {
      console.log(value);
   };

   return (
      <div className="container flex items-center justify-center bg-black pb-9 pt-9">
         <div className="md:[w-90%] w-[50%] bg-[#1a1a1a] p-4 text-white sm:w-[98%] xl:w-[70%]">
            <div className="h-[64px] w-full">
               <div className="relative mt-8 flex h-[2px] w-full items-center justify-center gap-3 bg-[#999999]">
                  <p className="absolute left-[50%] top-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center border-4 border-[#999999] bg-[#1a1a1a] text-[#999999]">
                     2
                  </p>
                  <p className="absolute top-[100%] mt-6 text-[#999999]">Register</p>
               </div>
            </div>
            <form action="" className="mt-10 flex w-full flex-wrap justify-between gap-5 sm:flex-col">
               <Label className="flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Name
                  <Input
                     name="name"
                     type="text"
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </Label>
               <Label className="flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Last Name
                  <Input
                     name="lastName"
                     type="text"
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </Label>
               <Label className="flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Email
                  <Input
                     name="email"
                     type="email"
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </Label>
               <Label className="flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Phone number
                  <Input
                     name="phoneNumber"
                     type="phone"
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </Label>
               <Label className="relative flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Password
                  <Input
                     name="password"
                     type={'password'}
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </Label>
               <Label className="relative flex w-[45%] flex-col gap-2 text-[#999999] sm:w-full">
                  Password
                  <Input
                     name="confirmPassword"
                     type={'password'}
                     className="border-[3px] border-[#666666] bg-black focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </Label>
               <label className="flex w-full gap-2 bg-[#343333] p-2 text-[#999999]">
                  <input type="checkbox" name="news" className="w-5 cursor-pointer" />I want to subscribe to the Inverse
                  newsletter
               </label>
               <label className="flex w-full gap-2 bg-[#343333] p-2 text-[#999999]">
                  <input type="checkbox" name="rules" className="w-5 cursor-pointer" />
                  Inverse membership rulesI have read and accept
               </label>
            </form>

            <div className="mt-16 flex items-center justify-end gap-3 xxs:flex-col-reverse">
               <Link href={'/login'} className="text-[#999999]">
                  Login
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

export default Register;
