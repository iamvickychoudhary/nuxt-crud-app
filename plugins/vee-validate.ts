// plugins/vee-validate.ts
import { defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';

// // Define global rules
// defineRule('required', required);
// defineRule('email', email);

// Configure VeeValidate
configure({
  generateMessage: localize({ en }),
  validateOnInput: true, // Validate on input
});
