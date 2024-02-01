 'use client'
import Image from "next/image"

import {
 useOrganization,
 useOrganizationList
} from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Hint } from "@/components/hint"

interface itemsProps {
    id : string
    name : string
    imageUrl : string
}
function Item({id, name, imageUrl} :itemsProps) {

 const {organization} = useOrganization();
 const {setActive }   = useOrganizationList();

 const isActive = organization?.id === id ;

 const onClick = () => {
    if (!isActive || !setActive) return;

        setActive({organization: id});
    
 }
  return (
    <div className="aspect-square relative">
         <Hint
            label={name}
            side="right" 
            align="start" 
            sideOffset={15}>
              <Image
                fill
                src={imageUrl}
                alt={name}
                onClick={() => onClick}
                className={cn(
                "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition:opacity",
                isActive && "opacity-100"
              )}
              />
           </Hint>
    </div>
  )
}

export default Item