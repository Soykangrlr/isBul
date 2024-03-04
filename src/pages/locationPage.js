import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocationAsync } from '../store/location/locationSice'
import LocationCard from '../component/locationCard'
import Pagination from '../component/pagination'

function LocationPage() {
    const dispatch=useDispatch()
    const {dataLocation,loadingLocation}=useSelector(state=>state.location)
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
        dispatch(getLocationAsync({page:1}))
    },[])
    const paginationItemClick=(page)=>{
        console.log(page)
        dispatch(getLocationAsync({page:page,search:""}))
        setCurrentPage(page);
    }
    console.log(dataLocation)
    if(loadingLocation){
        return(
            <div>Loading..</div>
        )
        }
    return (
        <div>
            <div className='location-page'>
            { dataLocation.results?.map((item,index)=>(
              
                    <LocationCard key={index}  item={item}/>
              
            )) }
         
            </div>
            <Pagination  currentPage={currentPage} info={dataLocation.info} onClick={(page)=>paginationItemClick(page)}/>
           </div>
    )
}

export default LocationPage
