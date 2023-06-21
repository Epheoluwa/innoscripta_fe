import axios from 'axios';
const token = sessionStorage.getItem("token");

const apiClient = axios.create({
    baseURL: 'http://localhost:9000/',
    withCredentials: true,
    headers: {
        "Authorization": token ? `Bearer ${token}` : ""
    }
});

export default apiClient;