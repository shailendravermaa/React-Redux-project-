

import { useEffect, useState } from "react"
import { useParams } from "react-router"
import MenuCard from "./MenuCard"
import ShimmerData from "./ShimmerData"
export default function RestaurantMenu(){
    const [RestData,SetRestdata]=useState(null)
    
    const {id}=useParams()
    useEffect(()=>{
        async function fetchData(){
           const proxyServer="https://cors-anywhere.herokuapp.com/"
        const swiggyAPI= `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response= await fetch (proxyServer+swiggyAPI);
           const data =await response.json();
           const tempdata=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filtereddata=tempdata?.filter((items)=> 'title' in items?.card?.card)
           SetRestdata(filtereddata);
           
       } fetchData();
         
           },[])
           
           
        
    
        return (
            <div>
                {
                    RestData?.map((menuItems)=><MenuCard key={menuItems.card.card.title} menuItems={menuItems?.card?.card}></MenuCard>)
                }
            </div>
        )
}