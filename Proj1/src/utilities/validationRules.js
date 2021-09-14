import { extend, setInteractionMode } from 'vee-validate';
import { required, email, numeric } from 'vee-validate/dist/rules';

setInteractionMode('eager');

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

extend('numeric', {
  ...numeric,
  message: 'This should be a number',
});

extend('passwordConfirmation', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation not matching',
});
