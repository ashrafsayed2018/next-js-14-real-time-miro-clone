import { UserButton } from "@clerk/nextjs"

export const  Navbar = () => {
  return (
    <div className="bg-green-500 flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex flex-1 bg-yellow-700 p-2">
            search
        </div>
        <UserButton />
    </div>
  )
}

