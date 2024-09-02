import { projects } from '@/data'
import React from 'react'
import dynamic from "next/dynamic";
import { div } from 'three/webgpu';
import { FaLocationArrow } from 'react-icons/fa';

const PinContainer = dynamic(
  () => import("./ui/3DPin").then((mod) => mod.PinContainer),
  { ssr: false }
);

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            Recent {' '}
            <span className='text-purple'> projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({
                id,
                title,
                des,
                img,
                iconLists,
                link,
            }) => (
                <div key={id} className='h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:h-[41rem] sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link} >
                        <div className='relative flex item-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl md:rounded-2xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img 
                            src={img} 
                            alt={title}
                            className='z-10 absolute bottom-0'
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon,index) => (
                                    
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    Check Site Live
                                </p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'>
                                    
                                </FaLocationArrow>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}

        </div>
    </div>
  )
}

export default RecentProjects