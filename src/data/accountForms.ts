type InputTypes ={
	[x:string|symbol]:any
	name: string,
	required: boolean,
	placeholder: string,
	label: string,
	type: string,
}
export const registerForm :InputTypes[]= [
	{
		name: 'username',
		required: true,
		placeholder: 'username',
		label: 'Username',
		type: 'text',
	},
	{
		name: 'email',
		required: true,
		placeholder: 'email address',
		label: 'Email address',
		type: 'email',
	},
	{
		name: 'password',
		required: true,
		placeholder: 'Enter your password',
		label: 'Password',
		type: 'password',
	},
	{
		name: 'confirmPassword',
		required: true,
		placeholder: 'Enter your password',
		label: 'Confirm Password',
		type: 'password',
	},
];
export const loginFields:InputTypes[] = [
	{
		name: 'username',
		required: true,
		placeholder: 'JaneDoe',
		label: 'Email / Username',
		type: 'text',
	},
	{
		name: 'password',
		required: true,
		placeholder: '********',
		label: 'Password',
		type: 'password',
	},
];
