import Image from 'next/image'
import React from 'react'

const HeadingText = ({title, description, icon, }) => {
  return (
    <div className="px-4 lg:px-8 flex flex-col items-center gap-x-3 mb-8">
        <div className="p-2 w-fit rounded-md">
          <img src={icon} 
          height={100}
          width={100}
          />
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
    </div>
  )
}

export default HeadingText