import React from 'react'
import SvgComponent from './SvgComponents'

function Fallback() {
  return (
    <div className='flex items-center gap-x-4 justify-center my-12 mx-auto'>
        <span className='text-secondary-500'>در حال بارگذاری اطلاعات</span>
        <SvgComponent />
    </div>
  )
}

export default Fallback