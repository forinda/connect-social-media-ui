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
	avatar?: { [x: string]: string } | any;
	followings: any;
	followers: any;
}

export type IDiscoverState = {
	loading: boolean;
	error: any;
	people: IUserState[];
};

export interface IFeed {
	author: any;
	body: string;
	media?: IMedia;
	views: number;
	tags: string;
}

export type IFeedsState = {
	loading: boolean;
	error: any;
	feeds: IFeed[];
};
