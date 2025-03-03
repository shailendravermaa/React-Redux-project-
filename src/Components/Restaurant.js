import { useEffect, useState } from "react"

import RestCard from "./RestCard";

 export default function Restaurant(){
    const [Restdata,setRestdata]=useState([]);

    useEffect(()=>{
 async function fetchData(){
    const proxyServer="https://cors-anywhere.herokuapp.com/"
    const swiggyAPI= "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
    const response= await fetch (proxyServer+swiggyAPI);
    const data =await response.json()
    setRestdata(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
} fetchData();
  
    },[])
    
    return(
        <div className="flex flex-wrap container  mx-auto">
       {Restdata.map((RestData)=><RestCard key={Restdata?.info?.id} RestData={RestData}></RestCard>)}
        </div>
    )
}