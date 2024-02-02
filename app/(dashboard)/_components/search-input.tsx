"use client"

import qs from "query-string"
import { useDebounceValue } from "usehooks-ts"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { ChangeEvent,useEffect,useState } from "react"
import { Input } from "@/components/ui/input"
function SearchInput() {
  const router = useRouter()
  const [value,setValue] = useState("");
  const [debounceValue] = useDebounceValue(value,500)
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  useEffect(() => {

    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: debounceValue,
      }
    }, {skipEmptyString: true,skipNull: true})
    router.push(url)
  }, [debounceValue, router])
  return (
    <div className="w-full relative">
       <Search  className="h-4 w-4 absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
      />
       <Input 
       className="w-full max-w-[560px] pl-9"  placeholder="search" 
       onChange={handleChange}
       value={value}/>
    </div>
  )
}

export default SearchInput