
import request from '../utils/request'

const prefix='/api/character'

export function getAllCharacter(page,search){
 return request.get(`${prefix}`,{
    params:{
        page:page,
        name:search
    }
 })
}
export function getCharacterByID(id){
    return request.get(`${prefix}/${id}`)
}