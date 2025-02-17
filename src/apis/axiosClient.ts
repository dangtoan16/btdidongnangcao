import axios from "axios";
import queryString from "query-string";
import { appInfo } from "../constants/appInfos";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosClient = axios.create({
    baseURL:appInfo.BASE_URL,
    paramsSerializer: params => queryString.stringify(params)
})


axiosClient.interceptors.request.use(async (config:any)=>
{
    config.headers = {
        Authorization : '',
        Accept: 'application/json',
        ...config.headers
    }

    config.data

    return config
})


axiosClient.interceptors.response.use(res => {
    if(res.data && res.status === 200){
        return res.data
    }
    throw new Error('Lỗi rồi')
}, error =>{
    console.log(`Error api: " ${JSON.stringify(error)}}`)
    const messageError = {
        message:error.response.data.message,
        statusCode:error.response.data.status
    }
    throw new Error(JSON.stringify(messageError))
})


export default axiosClient