import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/d/y/42-pcsfsslhv82307-peter-england-original-imaggjn49vjxrkc3.jpeg?q=70"></img>

        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>No filter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
        </div>
    </div>
  )
}

export default HomeSectionCard