import { env } from "$env/dynamic/public"
import axios from "axios";

const apiUrl = env.PUBLIC_API_URL;

export const apiClient = axios.create({
  baseURL: apiUrl,
})