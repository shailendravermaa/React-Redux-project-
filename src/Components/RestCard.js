

import { Link } from "react-router"



export default function RestCard({RestData}){
    return(
        <Link to={"/city/delhi/"+RestData?.info?.id}>
        <div>
        <div className="m-2 transform transition duration-200 hover:scale-95 w-[287px] h-[285px]">
            <img className="w-80 h-45 rounded-2xl object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData.info.cloudinaryImageId}></img> 
            <div className="font-bold" >{RestData?.info?.name}</div>
            <div className="flex gap-10 items-center overflow-hidden font-semibold">
                <div> {RestData?.info?.avgRating}</div>
                <div>{RestData?.info?.sla.slaString}</div>
            </div>
            <div className="overflow-hidden h-5 text-gray-600 pl-3"> {RestData?.info?.cuisines.join(" ")}</div>
        </div>
        </div></Link>
    )
}