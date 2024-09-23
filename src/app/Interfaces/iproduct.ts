import { IBrand } from './ibrand';
import { ICategory } from './icategory';
import { ISubcategory } from './isubcategory';

export interface ProductsRES {
	results: number;
	metadata: Metadata;
	data: IProduct[];
}

export interface Metadata {
	currentPage: number;
	numberOfPages: number;
	limit: number;
	prevPage: number;
}

export interface IProduct {
	sold: number;
	images: string[];
	subcategory: ISubcategory[];
	ratingsQuantity: number;
	_id: string;
	title: string;
	slug: string;
	description: string;
	quantity: number;
	price: number;
	imageCover: string;
	category: ICategory;
	brand: IBrand;
	ratingsAverage: number;
	createdAt: string;
	updatedAt: string;
	id: string;
	inWishList?: boolean;
}
