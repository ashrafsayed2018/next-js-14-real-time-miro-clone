"use client"
import { Plus } from "lucide-react"
import { CreateOrganization } from "@clerk/nextjs"
import {
 Dialog,
 DialogContent,
 DialogTrigger,

} from "@/components/ui/dialog"
import {Hint} from "@/components/hint"

export const  NewButton =() => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div className="aspect-square"> 
                 <Hint 
                 label="create organization"
                 side="right" align="start" sideOffset={15}>
                    <button className="bg-white/25 w-full h-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                        <Plus></Plus>
                    </button>
                </Hint>

            </div>
        </DialogTrigger>
        <DialogContent className="p-0 border-none max-w-[480px]">
            <CreateOrganization />
        </DialogContent>
    </Dialog>
  )
}

export default NewButton