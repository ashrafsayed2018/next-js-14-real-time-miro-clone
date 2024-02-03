import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function EmptyBoards() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image
          src={"/note.svg"}
          alt='empty-boards'
          width={"110"}
          height={"110"}
          />
          <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
          <p className="text-sm text-muted-foreground mt-2">Start create  a board for your organization</p>
          <div className='mt-6'>
            <Button size={"lg"}>
                 Create Board
            </Button>
          </div>
    </div>
  )
}

export default EmptyBoards