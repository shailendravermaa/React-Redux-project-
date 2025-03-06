 
 import RestInfo from "./RestInfo"
 import DropDown from "../Utils/Dropdown"
import { useState } from "react"
import DropUp from "../Utils/DropUp";
 export default function MenuCard({menuItems}){

    const [IsOpen,SetIsOpen]=useState(true);



    if("categories" in menuItems){
        return(
            <div className="w-full">
                <div> <div className="text-2xl font-bold">{menuItems?.title}</div></div>
                <div>
                    {
                    menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items}></MenuCard>)
                    }
                </div>
            </div>


        )
        
    }


    return (
    <div className="w-full  ">
    <div className="text-2xl ml-150 container  font-bold w-full">{menuItems?.title}</div>
    
    <div className="text-2xl ml-150 container font-bold cursor-pointer w-full" onClick={() => SetIsOpen(!IsOpen)}>
                {IsOpen ?<DropDown />  : <DropUp />}
            </div>
    
    {IsOpen && (
                <div className="mt-2">
                    {menuItems?.itemCards?.map((value) => (
                        <RestInfo key={value?.card?.info?.id} restData={value?.card?.info} />
                    ))}
    
    </div>
    )}  <div className="h-20 bg-gray-300"></div></div>)

}