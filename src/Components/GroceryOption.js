import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./Grocerycard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1>Shop Groceries on Instamart</h1>
            <div className="w-[80%] container mx-auto flex mt-20 gap-3 flex-nowrap-auto overflow-x-auto">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}