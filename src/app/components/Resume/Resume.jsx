'use client'

import React from 'react'
import Image from 'next/image'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger  from 'gsap/ScrollTrigger'

const Resume = () => {

  const resumeIcon = useRef(null)
    const resumeTitle = useRef(null) 
    const present = useRef(null)
  const second = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

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


      const animateTime = (container) => {
        gsap.set(container, {opacity: 0, x: 100})
        const t4 = gsap.to(container, {opacity: 1, x: 0, delay: 1, duration: 1, scrollTrigger:{
          trigger: container, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          toggleActions: 'play none none reset'
        }})}
      
        animateTime(present.current)
        animateTime(second.current)
    }, [])


  return (
    <>

      <div className='xl:w-[80%] h-[60rem] mx-auto relative max-xl:w-[75%] max-xl:mt-[3rem]'>
        <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]'>
        <div className='flex flex-col'>
            <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]' ref={resumeIcon}> 
              <Image src='/work.svg' alt='home image' height={30} width={18}/>
              <p>Resume</p>
            </div>

            <p className={`text-white text-[50px] leading-tight mt-[2.5rem]`} ref={resumeTitle}>Education &  
<span className='text-green-400'> Experience</span></p>

              <div className='flex justify-between w-[26rem] mt-[2.5rem]'>
                <div className='flex flex-col items-center mt-[0.4rem]'>
                  <div className='bg-[#666666] rounded-full h-3 w-3'></div>
                  <div className='h-[16rem] bg-[#666666] w-[0.2px]'></div>
                </div>

                <div className='text-[#c0c0c0] flex flex-col space-y-5' ref={present}>
                  <p> 2023-Present </p>
                  <p className='text-white text-[28px] font-light'>Full Stack Web Development</p>
                  <p className='text-white text-[28px] font-light'>Machine Learning Algorithm</p>
                  <p className='text-white text-[28px] font-light'>Docker & Kubernetes</p>
                </div>
              
              </div>

              <div className='flex justify-between w-[26rem]'>
                <div className='flex flex-col items-center'>
                  <div className='bg-[#666666] rounded-full h-3 w-3'></div>
                  <div className='h-[16rem] bg-[#666666] w-[0.2px]'></div>
                </div>

                <div className='text-[#c0c0c0] flex flex-col space-y-5 -mt-[0.4rem]' ref={second}>
                  <p> 2022-2023 </p>
                  <p className='text-white text-[28px] font-light'>Data Structure and Algorithm</p>
                  <p className='text-white text-[28px] font-light'>Python</p>
                  <p className='text-white text-[28px] font-light'>C++</p> 
                </div>
              
              </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Resume