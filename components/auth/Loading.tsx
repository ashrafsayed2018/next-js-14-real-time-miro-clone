import  Image from "next/image"

function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">

        <Image 
        src="/logo.svg" 
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"/>
         
    </div>
  )
}

export default Loading