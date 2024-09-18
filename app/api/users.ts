import axios, { AxiosRequestConfig } from 'axios';
import { apiClient } from './api-client';

export const loginUser = async (loginData: { email: string; password: string }) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/v1/users/login',
        data: loginData,
    };
    return apiClient.request(config);
};

export const registerUser = async (userData: { fullname: string; email: string; phone: string; password: string }) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/v1/users/register',
        data: userData,
    };
    return apiClient.request(config);
};
