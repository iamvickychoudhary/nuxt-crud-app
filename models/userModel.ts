// models/userModel.ts
import * as zod from 'zod';

export const UserModel = zod.object({
  name: zod.string().min(1, 'Name is required'),
  email: zod.string().email('Invalid email address').min(1, 'Email is required'),
  address: zod.object({
    houseNumber: zod.string().min(1, 'House number is required'),
    state: zod.string().min(1, 'State is required'),
    pincode: zod.string().regex(/^[0-9]+$/, 'Pincode must be a number').min(5, 'Pincode must be at least 5 digits').max(6, 'Pincode must be at most 6 digits')
  }),
  mobile: zod.string().regex(/^[0-9]+$/, 'Mobile must be a number').min(10, 'Mobile must be at least 10 digits').max(10, 'Mobile must be at most 10 digits')
});
