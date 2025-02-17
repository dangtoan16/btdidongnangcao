import axiosClient from "./axiosClient"

class CategoryAPI {
    HandleCategory = async (
        url:string,
        data?:any,
        method?: 'get' | 'post' | 'put' | 'delete'
    )=>{
        const response:any =  await axiosClient(`/category${url}`,{
            method: method ?? 'get',
            data
        })
        return response;
    }
}

const categoryAPI = new CategoryAPI()
export default categoryAPI