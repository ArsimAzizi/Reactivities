import axios from "axios";

/** Shared axios instance; the API base URL comes from VITE_API_URL (.env.development). */
const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default agent;
