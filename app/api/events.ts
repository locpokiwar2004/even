import axios, { AxiosRequestConfig } from 'axios';
import { apiClient } from './api-client';
export const getEventsDetai = async ({
  search = "",
  page = 1,
  limit = 20,
  fields = "",
  sort_by = "",
  order_by = "desc"
 }: {
  search? : string;
  page?:  number;
  limit? : number;
  fields? : string;
  sort_by? : string;
  order_by? : "asc" | "desc";
 }) => {
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/v1/events',
        params:{
          search,
          page,
          limit,
          fields,
          sort_by,
          order_by,
        }
    };
    return apiClient.request(config);
};

