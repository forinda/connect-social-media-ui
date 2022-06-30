export interface IAuthState {
	isAuthenticated: boolean;
	accessToken: string;
	refreshToken: string;
    loading: boolean;
    error: string;
}

export interface IUserState {
	email: string;
	username: string;
	firstName?:string
	lastName?:string
	dob?:string
	gender?:string
	city?:string
	zip?:string
	country?:string
	avatar?:any
	followings: any
	followers: any;
}
