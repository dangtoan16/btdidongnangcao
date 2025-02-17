import axiosClient from "./axiosClient"

class EventAPI {
    HandleEvent = async (
        url:string,
        data?:any,
        method?: 'get' | 'post' | 'put' | 'delete'
    )=>{
        const response =  await axiosClient(`/event${url}`,{
            method: method ?? 'get',
            data
        })
        return response;
    }
}

const eventAPI = new EventAPI()
export default eventAPI

