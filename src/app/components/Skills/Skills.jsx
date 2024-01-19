'use client'
import React from 'react'
import Image from 'next/image'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Skills = () => {
    gsap.registerPlugin(ScrollTrigger)

    const resumeIcon = useRef(null)
    const resumeTitle = useRef(null) 
    const reactRef = useRef(null)
    const dockerRef = useRef(null)
    const nodeRef = useRef(null)
    const kuberenetesRef = useRef(null)

    useEffect(() => {
        const animateContainer = (container, number) => {gsap.set(container, {opacity: 0, y: 200})
        gsap.to(container,  { y: 0, opacity: 1, duration: 2, delay: {number}, scrollTrigger: {
        trigger: container, 
        start: 'top-=120 bottom', 
        end: 'top-=120 bottom',
        toggleActions: 'play none none reset'
      }})}

         
      animateContainer(resumeIcon.current, 1)
      animateContainer(resumeTitle.current, 2)

   
      gsap.set(reactRef.current, {opacity: 0, x: -400})
         gsap.to(reactRef.current, {opacity: 1, x: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
  
          toggleActions: 'play none none reset'
        }})


        gsap.set(dockerRef.current, {opacity: 0, y: -400})
        gsap.to(dockerRef.current, {opacity: 1, y: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          toggleActions: 'play none none reset'
        }})



        gsap.set(nodeRef.current, {opacity: 0, y: 400})
        gsap.to(nodeRef.current, {opacity: 1, y: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom',  
          toggleActions: 'play none none reset'
        }})

        gsap.set(kuberenetesRef.current, {opacity: 0, x: 400})
        gsap.to(kuberenetesRef.current, {opacity: 1, x: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          toggleActions: 'play none none reset'
        }})
      



    }, []);


  return (
    <>
         <div className='xl:w-[80%] h-[60rem] mx-auto relative max-xl:w-[60%] max-xl:mt-[3rem]'>
        <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]'>
        <div className='flex flex-col'>
            <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]' ref={resumeIcon}> 
              <Image src='/work.svg' alt='home image' height={30} width={18}/>
              <p>My Skills</p>
            </div>
            <p className={`text-white text-[50px] leading-tight mt-[2.5rem]`} ref={resumeTitle}>My  
<span className='text-green-400'> Advantages</span></p>

            <div className='flex space-x-10 flex-wrap'>
              <div className='border border-zinc-500 py-[2rem] w-[10rem] h-[15rem] mt-[2rem] flex flex-col items-center justify-center rounded-full' ref={reactRef}>
                <img src='/Frame 1.png' alt="react.js" className='h-[6rem] w-[6rem] '/>
                <p className='text-white'>React.js</p>
                {/* <img src='/go.svg' alt='golang' className='h-[300px] w-[300px]'/> */}
              </div>

              <div className='border border-zinc-500 w-[10rem] h-[15rem] mt-[2rem] flex flex-col items-center justify-center  rounded-full' ref={dockerRef}>
                <img src='/Frame 2.png' alt="react.js" className='h-[6rem] w-[6rem] '/>
                <p className='text-white'>Docker</p>
                {/* <img src='/go.svg' alt='golang' className='h-[300px] w-[300px]'/> */}
              </div>

              <div className='border border-zinc-500 w-[10rem] h-[15rem] mt-[2rem] flex flex-col items-center justify-center rounded-full' ref={nodeRef}>
                <img src='/Frame 1-2.png' alt="react.js" className='h-[6rem] w-[6rem] '/>
                <p className='text-white'>Node.js</p>
              </div>
        
        
                <div className='border border-zinc-500 w-[10rem] h-[15rem] mt-[2rem] flex flex-col items-center justify-center rounded-full' ref={kuberenetesRef}>
                <img src='/Frame 2-2.png' alt="react.js" className='h-[6rem] w-[6rem] '/>
                <p className='text-white'>Kubernetes</p>
                {/* <img src='/go.svg' alt='golang' className='h-[300px] w-[300px]'/> */}
        
              </div>
             


            </div>
              
              </div>
            </div>
          
          </div>
    </>
  )
}

export default Skills
