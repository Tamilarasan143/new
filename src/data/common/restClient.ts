/* eslint-disable no-unused-vars */
import { getAuth } from "@firebase/auth"
import axios, { Axios } from "axios"
import appConfig from "./config/app-config"
import settings from "./settings"
import { ApiError, Result } from "./result"

export enum ApiStatus {
	Success,
	AlreadyExists,
	Failed,
	NotFound,
}

export interface ApiResult<T> {
	result: ApiStatus
	statusCode: number
	statusText?: string
	msg?: string
	data?: T
}

export interface PageResponse<T> {
	totalElements: number
	totalPages: number
	contents: Array<T>
}

class RestClient {
	private axiosClient!: Axios
	constructor() {
		console.log(`${this.constructor.name} constructor created `)
		this.axiosClient = axios.create({
			baseURL: appConfig.getBaseUrl(),
		})
		this.axiosClient.interceptors.request.use(async (config) => {
			// const token = await getAuth().currentUser?.getIdToken(false)
			// if (config.headers && token) {
			// 	config.headers["Authorization"] = `Bearer ${token}`
			// }
			return config
		})
		axios.interceptors.response.use((response) => {
			if (response.status === 401) {
				console.log("Authorization error")
				settings.remove("user")
			}
			return response
		})
	}

	async get<T>(url: string): Promise<Result<T>> {
		try {
			const res = await this.axiosClient.get<T>(url)
			return { ok: true, value: res.data }
		} catch (error: any) {
			let code = -1
			let msg = error.message
			const res = error.response
			if (res) {
				// Parse the response body of 400-499 error codes
				if (res.data) {
					code = res.data.status
					msg = res.data.message ? res.data.message : res.data.error
				} else {
					code = res.status
					msg = res.message ? res.message : res.statusText
				}
			}
			return { ok: false, error: new ApiError(code, msg) }
		}
	}
	async getListByPage<T>(url: string, pageNumber: number, limit: number): Promise<Result<PageResponse<T>>> {
		try {
			const options = { params: { page: pageNumber, pageSize: limit } }
			const res = await this.axiosClient.get<PageResponse<T>>(url, options)
			if (res.data && res.data.contents) {
				return { ok: true, value: res.data }
			} else {
				return { ok: true, value: { contents: [], totalElements: 0, totalPages: 0 } }
			}
		} catch (error: any) {
			let code = -1
			let msg = error.message
			const res = error.response
			if (res) {
				// Parse the response body of 400-499 error codes
				if (res.data) {
					code = res.data.status
					msg = res.data.message ? res.data.message : res.data.error
				} else {
					code = res.status
					msg = res.message ? res.message : res.statusText
				}
			}
			return { ok: false, error: new ApiError(code, msg) }
		}
	}

	async post<T>(url: string, data: any): Promise<Result<T>> {
		try {
			const res = await this.axiosClient.post<T>(url, data)
			if (res.status >= 200 && res.status <= 299) {
				return { ok: true, value: res.data }
			} else {
				console.log(`${res.status}`)
				return { ok: false, error: new ApiError(res.status, res.statusText) }
			}
		} catch (error: any) {
			let code = -1
			let msg = error.message
			const res = error.response
			if (res) {
				// Parse the response body of 400-499 error codes
				console.log(res)
				if (res.data) {
					code = res.data.code ? res.data.code : res.status
					msg = res.data.message ? res.data.message : res.data.error
				} else {
					code = res.status
					msg = res.message ? res.message : res.statusText
				}
			}
			return { ok: false, error: new ApiError(code, msg) }
		}
	}

	async put<T>(url: string, data: any): Promise<Result<T>> {
		try {
			const res = await this.axiosClient.put<T>(url, data)
			return { ok: true, value: res.data }
		} catch (error: any) {
			let code = -1
			let msg = error.message
			const res = error.response
			if (res) {
				// Parse the response body of 400-499 error codes
				if (res.data) {
					code = res.data.code ? res.data.code : res.status
					msg = res.data.message ? res.data.message : res.data.error
				} else {
					code = res.status
					msg = res.message ? res.message : res.statusText
				}
			}
			return { ok: false, error: new ApiError(code, msg) }
		}
	}

	async delete<T>(url: string): Promise<Result<T>> {
		try {
			const res = await this.axiosClient.delete<T>(url)
			return { ok: true, value: res.data }
		} catch (error: any) {
			let code = -1
			let msg = error.message
			const res = error.response
			if (res) {
				// Parse the response body of 400-499 error codes
				if (res.data) {
					code = res.data.status
					msg = res.data.message ? res.data.message : res.data.error
				} else {
					code = res.status
					msg = res.message ? res.message : res.statusText
				}
			}
			return { ok: false, error: new ApiError(code, msg) }
		}
	}

	getClient(): Axios {
		return this.axiosClient
	}
}

export default new RestClient()
