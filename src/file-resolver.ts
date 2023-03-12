import type {RequestEvent} from "@sveltejs/kit";

export default class FileResolver {

	constructor(
		private fsRemoteUrl: string,
		private imgRemoteUrl: string,
		private fsMaxAge: string | number,
		private imgMagAge: string | number
	) {}

	composeHeaders: (event: RequestEvent) => { [p: string]: string } = (event: RequestEvent): { [p: string]: string } => ({});

	file(event: RequestEvent): Promise<Response> {
		return fetch(`${this.fsRemoteUrl}/${event.params.id}/${event.params.file}`, {
			headers: {...this.composeHeaders(event), "x-set-max-age": this.fsMaxAge.toString()}
		});
	}

	img(event: RequestEvent): Promise<Response> {
		return fetch(`${this.imgRemoteUrl}/${event.params.path}`, {
			headers: {...this.composeHeaders(event), "x-set-max-age": this.imgMagAge.toString()}
		});
	}

}


