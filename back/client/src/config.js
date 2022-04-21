import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : "https://merngladys.herokuapp.com/api/"
})