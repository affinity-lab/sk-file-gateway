export default interface AtominoFile {
	id: number,
	mimeType: string,
	name: string,
	position: number,
	size: number,
	title: null | string,
	ver: string,
	isImage: boolean,
	image: null | AtominoImage
}

export interface AtominoImage {
	dominant: { b: number, g: 232, r: 216 }
	focus: string
	isAnimated: boolean
	size: { width: number, height: number }
}