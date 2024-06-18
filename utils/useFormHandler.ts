// utils/formHandler.ts
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import { useItems, } from '~/composables/userDataState'; // Ensure the path is correct
import { nanoid } from 'nanoid';

const formSubmissions = ref<any[]>([]); // Adjust 'any[]' to match your form data structure

const schema = zod.object({
  name: zod.string().min(1,'Name is required'),
  email: zod.string().email('Invalid email address').min(1,'Email is required'),
  address: zod.string().min(1,'Address is required'),
  mobile: zod.string()
  .regex(/^[0-9]+$/, 'Mobile must be a number')
  .min(10, 'Mobile must be at least 10 digits')
  .max(10,'Mobile must be at least 10 digits'),
});

export function useFormHandler() {
  const { handleSubmit, errors } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const { value: name } = useField<string>('name');
  const { value: email } = useField<string>('email');
  const { value: address } = useField<string>('address');
  const { value: mobile } = useField<string>('mobile');

  // Import and destructure addItem from useItems
  const { addItem } = useItems();

  const onSubmit = handleSubmit((values: { name: string; email: string; address: string; mobile: string }) => {
    console.log(values);
    if (values) {
      addItem({
        id: Date.now(),
        name: name.value,
        email: email.value,
        address: address.value,
        mobile: mobile.value,
      });

    }

    // Handle form submission
  });

  return {
    name,
    email,
    address,
    mobile,
    errors,
    onSubmit,
    formSubmissions
  };
}
