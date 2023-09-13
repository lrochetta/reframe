import axios from "axios";
const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    // config.baseURL = "/api/";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      // auth.logout({ returnTo: `${window.location.origin}` });
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
