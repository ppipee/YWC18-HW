export interface Filter extends Record<FilterMethod, string | number> {
	shopNameTH: string
	categoryName: string
	subcategoryName: string
	priceLevel: number
	addressProvinceName: string
}

export enum FilterMethod {
	Query = 'shopNameTH',
	Merchant = 'categoryName',
	Category = 'subcategoryName',
	PriceLevel = 'priceLevel',
	Province = 'addressProvinceName',
}
