'use client'

import React from 'react'
import Image from 'next/image'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Service = () => {


  const special = [{title: 'Web Development', content: 'Kuch toh likhna hain isme', project: '10 Projects', icon: '/development.png'}, {title: 'Data Structure and Algorithm', content: 'Phirse kuch toh likhna hi hain', project: 'Arre tu jaare', icon: '/DSA.png'}, {title: 'Devops', content: 'Bhai iska toh mereko kuch idea ich hi nahi hain ', project: 'Idea ni hain toh project kaha se bea', icon: '/devops.png' }]

    const resumeIcon = useRef(null)
    const resumeTitle = useRef(null) 
    const containerRef = Array(special.length).fill(0).map(() => useRef(null))

    

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

      const animateSkill = (container) => {
        gsap.set(container, {opacity: 0, y: 200})
        const t5 = gsap.to(container, {y: 0, opacity: 1, duaration: 2, scrollTrigger: {
          trigger: container, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          toggleActions: 'play none none reset'
        }})
      }

      containerRef.forEach((ref) => {
        animateSkill(ref.current)
      })

    
    },[])


  return (
    <>
        <div className='xl:w-[80%] h-[60rem] mx-auto relative max-xl:w-[60%] max-xl:mt-[3rem]'>
        <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]'>
        <div className='flex flex-col'>
            <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]' ref={resumeIcon}> 
              <Image src='/work.svg' alt='home image' height={30} width={18}/>
              <p>Service</p>
            </div>
            <p className={`text-white text-[50px] leading-tight mt-[2.5rem] mb-[2rem]`} ref={resumeTitle}>My  
<span className='text-green-400'> Specializations</span></p>

{special.map((data, index) => (
            <div className='border border-[#666666] rounded-2xl flex flex-col text-white py-[2.5rem] px-[2.5rem] mb-[1rem]' ref={containerRef[index]}>

              
                <div className='flex justify-between'>
                 <p className='text-white text-[24px]'>{data.title}</p>
                 <div className='w-[5%] flex items-center justify-end'>
                  <Image src={data.icon} alt='web development icon' height={15} width={30}/>
                 </div>
               </div>  
               <p className='mt-[1rem] text-[14px] text-[#999999]'>
               {data.content}
               </p>
               <p className='mt-[2rem] text-[13px]'>
                 {data.project}
               </p>
             </div> 

              ))
              }
              
        </div>
        </div>
      </div>
    </>
  )
}

export default Service