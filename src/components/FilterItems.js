import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"

const FilterItems = ({collection, selectedItem, setSelectedItem}) => {
  return (
    <div className="filter flex px-8 justify-between">
    <div>
    {
        collection.map((item)=>{
            return (
                <button className={`${selectedItem === item ? "active bg-blue-600 text-white" : "bg-purple-100 text-gray-500"} btn mr-4 rounded-full font-bold px-5 py-3 text-sm `} onClick={()=>setSelectedItem(item)}>{item}</button>
            )
        })
    }
    </div>
    <div className='flex justify-center items-center'>
        <button className='flex justify-center items-center text-blue-500 border border-blue-500 rounded-full px-5 py-3'><span className='mr-3'>View More</span>
        <span><AiOutlineArrowRight/></span>
        </button>
    </div>
  </div>
  )
}

export default FilterItems