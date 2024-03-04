import request from '../utils/request'
const prefix="/api/location"
export function getLocation({page,name}){
    console.log(page)
    return request.get(`${prefix}`,{
       params:{
           page,
            name
       }
    })
   }