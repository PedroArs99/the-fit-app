import { PUBLIC_API_URL } from '$env/static/public';
import axios from "axios";

const apiUrl = PUBLIC_API_URL;

export const apiClient = axios.create({
  baseURL: apiUrl,
})