import React from 'react'
import data_product from "../assets/data.js"
import Item from './Item'

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='text-[50px] font-semibold'>
        Popular in women
      </h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
      <div className='poluar-item mt-[50px] flex gap-[30px]'>
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
