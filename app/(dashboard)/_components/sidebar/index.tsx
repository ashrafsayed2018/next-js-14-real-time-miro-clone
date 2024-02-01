"use client"

import List from "./list"
import NewButton from "./new-button"

function Sidebar() {
  return (
    <aside className='fixed z-1 left-0 bg-blue-950 h-full w-[60px] flex flex-col gap-y-4 p-3 text-white'>
         <NewButton/>
         <List/>
    </aside>
  )
}

export default Sidebar