"use client"
import { 
  OrganizationSwitcher,
  useOrganization, 
  UserButton 
} from "@clerk/nextjs"
import SearchInput from "./search-input"
import InviteButton from "./invite-button"


export const  Navbar = () => {

  const {organization} = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex flex-1 p-2">
          <SearchInput />
        </div>
        <div className="block lg:hidden flex-1">
        <OrganizationSwitcher hidePersonal appearance={{
        elements: {
          rootBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth:"370px",
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
        </div>
        {organization && (<InviteButton/>)}
        <UserButton />
    </div>
  )
}

