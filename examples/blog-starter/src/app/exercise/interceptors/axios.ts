import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { BASE_URL } from '../constant/constants';

export const customAxios = axios.create({
	baseURL: BASE_URL,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json'
	}
});

// Request interceptor for API calls
customAxios.interceptors.request.use(
	(config: any) => {
		return config;
	},
	error => {
		Promise.reject(error);
	}
);

// Response interceptor for API calls
customAxios.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: any) => {
		if (error.response.status === 401) {
			window.location.href = "";
			return Promise.reject(error);
		}
		return Promise.reject(error);
	}
);
