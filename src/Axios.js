import Axios from 'axios';

Axios.defaults.baseURL = 'https://shazam.p.rapidapi.com/';

export const axiosInstance = Axios.create({});
