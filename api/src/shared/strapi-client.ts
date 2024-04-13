import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.STRAPI_URL}/api/`,
  headers: {
    'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
  }
})


async function get<T>(apiPath: string): Promise<T>{
  return axiosInstance.get(apiPath).then((response) => response.data.data );
}

export const strapiClient = {
  get,
}