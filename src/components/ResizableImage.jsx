import React from 'react'

function ResizableImage({children}) {
  return (
    <div className='w-full h-80 sm:mb-6'>
         {children}
    </div>
  )
}

export default ResizableImage;