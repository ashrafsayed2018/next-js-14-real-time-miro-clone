"use client"
import { useOrganizationList } from "@clerk/nextjs"
import Item from "./item";

function List() {

    const {userMemberships} = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    });

    console.log(userMemberships);

    if (userMemberships!.data!.length < 0 ) return null;
  return (
    <div className="space-y-4">
        {
        userMemberships.data!.map((member) => {
             return <>
              <Item 
              key={member.id}
              id={member.id}
              name={member.organization.name}
              imageUrl={member.organization.imageUrl}
              />
             </>
        })
        }
    </div>
  )
}

export default List