import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
     <div className="flex flex-col gap-y-4">
       this page for Authenticated user only 

       <div>
          <UserButton/>
       </div>
     </div>
  );
}
