import axios from 'axios';
import { customAxios } from '../interceptors/axios';

export const APIService = {
	get(resource: string) {
		return customAxios.get(resource);
	},

	post(
		resource: string,
		data: any
	) {
		return customAxios.post(resource, data, {
			params: {},
			headers: {}
		});
	},

	put(resource: string, data: any, params: any = {}) {
		return customAxios.put(resource, data, {
			params: {}
		});
	},

	delete(resource: string, params: any = {}) {
		return customAxios.delete(resource, {
			params: {}
		});
	},

	patch(resource: string, data: any = {}, params: any = {}) {
		return customAxios.patch(resource, data, {
			params: {}
		});
	},

	/**
	 * Perform a custom Axios request.
	 **/
	customRequest(data: any) {
		return axios(data);
	}
};