export interface IPost {
	title: string;
	excerpt: string;
	date: string;
	slug?: string;
	content: string;
}

export interface IProject {
	_id: string;
	name: string;
	tags: string[];
	description: string;
	link: {
		type: string;
		url: string;
	}[];
}