import React from 'react'
import Image from 'next/image'

const BackgroundVideo: React.FC = () => {
   return (
      <div className="relative h-screen w-full overflow-hidden">
         <video className="absolute left-0 top-0 h-full w-full bg-white object-cover" autoPlay muted loop>
            <source src="/Home/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
         </video>
         <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4">
            <Image src="/Home/icon.png" alt="welcome msg" width={250} height={250} />
            <p className="text-[25px] font-bold text-[#00AC82]">Welcome to the website of Invers School</p>
            <p className="text-[14px] text-[#E6E6E6]">In Inverse, we try to make the world a better place to live</p>
            <Image src="/Home/arrow_down.gif" alt="logo" width={150} height={150}/>
         </div>
      </div>
   )
}

export default BackgroundVideo
