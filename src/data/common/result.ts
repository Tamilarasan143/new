export class ApiError {
	code: number
	message: string

	constructor(code: number, message: string) {
		this.code = code
		this.message = message
	}
}

export type Result<T, E = ApiError> = { ok: true; value: T } | { ok: false; error: E }
