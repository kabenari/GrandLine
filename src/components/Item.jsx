import React from 'react'

const Item = (props) => {
  return (

  <div class="flex w-[300px] h-[450px] items-center justify-center bg-gray-100 rounded-xl">
    <div class="mx-auto px-5">
      <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-110 hover:shadow-md overflow-hidden">
        <img class="w-full rounded-lg object-cover object-center" src={props.image} alt="product" />
        <p class="my-4 pl-4 font-bold text-gray-500">{props.name}</p>
        <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">${props.new_price}</p>
      </div>
    </div>
  </div>
  )
}

export default Item
