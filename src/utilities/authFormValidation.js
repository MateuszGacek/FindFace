import * as yup from 'yup';

export const loginValidation = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6, 'Must be 6 characters or more!').required(),
});
export const registerValidation = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6, 'Must be 6 characters or more!').required(),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});
