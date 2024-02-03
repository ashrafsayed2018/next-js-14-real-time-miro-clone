import Image from 'next/image'
import React from 'react'

function EmptyFavorites() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image
          src={"/empty-favorites.svg"}
          alt='empty-favorites'
          width={"140"}
          height={"140"}
          />
          <h2 className="text-2xl font-semibold mt-6">No favorites boards</h2>
          <p className="text-sm text-muted-foreground mt-2">Try search for something else</p>
    </div>
  )
}

export default EmptyFavorites