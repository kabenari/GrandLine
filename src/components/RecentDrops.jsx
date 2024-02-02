import React from 'react'
import new_collections from '../assets/new_collections' 
import Item from './Item'

const RecentDrops = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh]'>
        <h1 className='text-[50px] font-semibold'>Recent Drops!</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
        <div className='mal mt-[50px] grid grid-cols-4 gap-[70px]'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>      
    </div>
  )
}

export default RecentDrops
