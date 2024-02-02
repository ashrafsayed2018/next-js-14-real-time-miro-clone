"use client"
import Image from "next/image"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Star } from "lucide-react"
import { useSearchParams } from "next/navigation"
const font = Poppins({
  subsets:["latin"],
  weight: ["600"],
})
export const  OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 ">
      <Link href={"/"}>
         <div className="flex gap-x-2 items-center">
           <Image src="/logo.svg" alt="logo"
           height={"60"} width={"60"} />
           <span className={cn(
            "font-semibold text-2xl",
            font.className
            )}>Board</span>
         </div>
      </Link>
      <OrganizationSwitcher hidePersonal appearance={{
        elements: {
          rootBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          },
          organizationSwitcherTrigger: {
            padding: "10px",
            width:"100%",
            borderRadius: "10px",
            border:"1px solid #e5e7eb",
            justifyContent: "space-between",
            backgroundColor:"white",
          }
        }
      }}/>
      <div className="space-y-1 w-full">
        <Button  variant={favorites ? "ghost" : "secondary"} size={"lg"}
        className="font-normal justify-start px-2 w-full">
           <Link href={"/"} className="flex items-center justify-center">
             <LayoutDashboard className="w-4 h-4 mr-2"/>
             <span>Team Boards</span>
           </Link>
        </Button>

        <Button  variant={favorites ? "secondary" :"ghost"} size={"lg"}
        className="font-normal justify-start px-2 w-full">
           <Link href={{
            pathname: "/",
            query: {favorites:true},
           }} className="flex items-center justify-center">
             <Star className="w-4 h-4 mr-2"/>
             <span>favorite Boards</span>
           </Link>
        </Button>
      </div>
    </div>
  )
}
