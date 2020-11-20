export enum BreakPoints {
	xs = 575,
	md = 768,
	lg = 1568,
}

export enum LowerBreakPoints {
	xs = 0,
	md = BreakPoints.xs + 1,
	lg = BreakPoints.md + 1,
}

export type ScreenName = 'xs' | 'md' | 'lg'
