import Aside from '@/components/dashboard/Aside/Aside'
import Navbar from '@/components/dashboard/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="h-full rounded-lg">
        <Navbar />
        <div className="flex sm:flex-row md:flex mt-16 h-full w-20 fixed inset-y-0">
        <Aside />
        </div>
        <main className="pl-20 md:pl-40 pt-16 h-full">
        {children}
      </main>
    </div>
  )
}

export default layout