 
 import RestInfo from "./RestInfo"
 export default function MenuCard({menuItems}){


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
    <div className="text-2xl  font-bold">{menuItems?.title}</div>
    <div className=" mt-2">
    {
        menuItems?.itemCards?.map((value)=><RestInfo key={value?.card?.info?.id} restData={value?.card?.info}></RestInfo>)
    }
    </div>
    
    </div>
    )
}