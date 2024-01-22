'use client'
import React from 'react'
import Image from 'next/image'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Button from "@/app/components/Button/Button"

const Portfolio = () => {
    const firstPort = useRef(null)
    const secondPort = useRef(null)
    const thirdPort = useRef(null)
    const resumeIcon = useRef(null)
    const resumeTitle = useRef(null) 

    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

        const animateSkill = (container) => {
            gsap.set(container, {opacity: 0, y: 200})
            const t5 = gsap.to(container, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
              trigger: container, 
              start: 'top-=120 bottom', 
              end: 'top-=120 bottom', 
              toggleActions: 'play none none reset'
            }})
          }

        
          animateSkill(firstPort.current)
          animateSkill(secondPort.current)
          animateSkill(thirdPort.current)


          const animateContainer = (container, number) => {gsap.set(container, {opacity: 0, y: 200})
          gsap.to(container,  { y: 0, opacity: 1, duration: 2, delay: {number}, scrollTrigger: {
          trigger: container, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          toggleActions: 'play none none reset'
        }})}
  
           
        animateContainer(resumeIcon.current, 1)
        animateContainer(resumeTitle.current, 2)


    }, []);



  return (
    <>
        <div className='xl:w-[80%] h-[60rem] mx-auto relative max-xl:w-[75%] max-xl:mt-[3rem]'>
            <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]'>
              <div className='flex flex-col'>
                <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]' ref={resumeIcon}> 
                  <Image src='/work.svg' alt='home image' height={30} width={18} className='h-auto w-auto'/>
                  <p>Portfolio</p>
                </div>
                <p className={`text-white text-[50px] leading-tight mt-[2.5rem]`} ref={resumeTitle}>Featured  
<span className='text-green-400'> Projects</span></p>

                <div className="flex flex-col space-y-5 mt-[2rem]">
                  <div>
                    <div className="relative mt-[1rem]" ref={firstPort}>
                    <Image src='/portfolio1.jpg' height={900} width={900} alt='project 1' className='rounded-3xl'/>
                    <ul className='absolute top-[23rem] left-[1rem] space-x-[1rem] flex items-center max-xl:top-[75%]'>
                      <Button props='Figma'/>
                      <Button props='Framer'/>
                      <Button props='Wordpress'/>
                    </ul>
                    </div>
                    
                    <p className='text-[30px] text-green-400 mt-[1.5rem]'>Bureau - Architecture Studio Website</p>
                  </div>  
                  
                <div>
                  <div className="relative mt-[1rem]" ref={secondPort}>
                  <Image src='/portfolio1.jpg' height={900} width={900} alt='project 1' className='rounded-3xl '/>
                    <ul className='absolute top-[23rem] left-[1rem] space-x-[1rem] flex items-center max-xl:top-[55%]'>
                      <Button props='Figma'/>
                      <Button props='React'/>
                    </ul>
                    <p className='text-[30px] text-green-400 mt-[1.5rem]'>Hinterland - Real Estate Site Redesign</p>
                  </div>
                
                </div>
                  
                  <div>
                    <div className='relative mt-[1rem]' ref={thirdPort}>
                      <Image src='/portfolio1.jpg' height={900} width={900} alt='project 1' className='rounded-3xl'/>
                      <ul className='absolute top-[23rem] left-[1rem] space-x-[1rem] flex items-center max-xl:top-[75%]'>
                        <Button props='Framer'/>
                      </ul>
                    </div>
                  
                   
                    <p className='text-[30px] text-green-400 mt-[1.5rem]'>Lewis Portfolio Framer Template</p>
                  </div>
                </div>
              </div>  
            </div>
          </div>


    </>
  )
}

export default Portfolio