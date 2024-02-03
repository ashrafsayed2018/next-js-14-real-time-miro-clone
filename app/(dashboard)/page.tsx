"use client"
import { UserButton, useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string
  }
}
export default function DashboardPage({searchParams}:DashboardPageProps) {
  console.log(searchParams);

  const {organization} = useOrganization()

  console.log(organization);
  return (
     <div className="flex flex-col gap-y-4 p-6 h-[calc(100%-80px)]">

       {!organization ? (<EmptyOrg/>) :
       <BoardList orgId={organization.id} query={searchParams}/>}
       
     </div>
  );
}
