export interface Shop {
	categories: CategoryShop[]
	provinces: string[]
	priceRange: string[]
	merchants: Merchant[]
}

export interface CategoryShop {
	name: string
	subcategories: string[]
}

export interface Merchant {
	shopNameTH: string
	categoryName: string
	subcategoryName: string
	coverImageId: string
	facilities: string[]
	priceLevel: number
	isOpen: OpenStatus
	highlightText: string
	recommendedItems: string[]
	addressProvinceName: string
	addressDistrictName: string
}

export enum OpenStatus {
	Open = 'Y',
	Closed = 'N',
	None = 'N/A',
}
