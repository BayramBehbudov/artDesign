import { number, z } from 'zod';

export const loginSchema = z.object({
   email: z.string({ required_error: 'Email is required' }).min(5, 'First name is required'),
   password: z.string({ required_error: 'Password is required' }).min(5, 'Last name is required'),
});

export const registerSchema = z.object({
   email: z.string({ required_error: 'Email is required' }).min(5, 'First name is required'),
   password: z.string({ required_error: 'Password is required' }).min(5, 'Last name is required'),
   confirmPassword: z.string({ required_error: 'Repeat password is required' }).min(5, 'Repeat password is required'),
   name: z.string({ required_error: 'Name is required' }).min(5, 'Name is required'),
   lastName: z.string({ required_error: 'Last name is required' }).min(5, 'Last name is required'),
   phoneNumber: z.string({ required_error: 'Number is required' }).min(5, 'Number is required'),
});
