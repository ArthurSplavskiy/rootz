export interface IArticle {
	id: number,
	avatar?: string;
	poster?: string;
	videoUrl?: string;
	tag: string[] | string;
	title: string;
}