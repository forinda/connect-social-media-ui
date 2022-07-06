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
	firstName?: string;
	lastName?: string;
	dob?: string;
	gender?: string;
	city?: string;
	zip?: string;
	country?: string;
	avatar: any
	followings?: any;
	followers?: any;
	_id:string,
	bio?:string
}

export type IDiscoverState = {
	loading: boolean;
	error: any;
	people: IUserState[];
};

export interface IFeed {
	[x:string]:any
	author: IUserState;
	body: string;
	media?: IMedia;
	views: number;
	tags: string;
	createdAt:Date
	_id:string
}

export type IFeedsState = {
	loading: boolean;
	error: any;
	feeds: IFeed[];
};
