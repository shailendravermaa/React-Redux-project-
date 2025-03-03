import React from 'react'

function RestInfo({restData}) {
  return (
    <div className= ' w-[80%] flex justify-between container mx-auto gap-5 items-center border rounded-2xl mt-2'>
        <div className='w-[70%] pl-8'>
            <p>{restData?.name}</p>
            <p>{"₹"+restData?.defaultPrice/100}</p>
            <span>{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>{restData?.description}</p>

        </div>
        <div className='w-[20%] relative mb-4'>
            <img className=' m-1 h-36 object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
            <button className=' font-bold hover:bg-gray-200 absolute top-30 left-10 bg-white text-center text-green-600 px-6 py-2 border-gray-600 border-1 rounded-2xl'>ADD</button>
        </div>
        
    </div>
  )
}

export default RestInfo