'use client'

import React from 'react'
import Image from 'next/image';
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {

  const aboutText = useRef(null);
  const aboutSection = useRef(null);
  const aboutContent = useRef(null);


  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

    const animateContainer = (container, number) => {gsap.set(container, {opacity: 0, y: 200})
        gsap.to(container,  { y: 0, opacity: 1, duration: 2, delay: {number}, scrollTrigger: {
        trigger: container, 
        start: 'top-=120 bottom', 
        end: 'top-=120 bottom',
        toggleActions: 'play none none reset'
      }})}

      animateContainer(aboutSection.current, 1)
      animateContainer(aboutText.current, 2)
      animateContainer(aboutContent.current, 3)

     
  }, [])


  return (
    <>
      <div className='xl:w-[80%] h-[35rem] mx-auto relative max-xl:w-[75%] mt-[8rem] max-xl:mt-[60rem]'>  
      <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]' >
        <div className='flex flex-col space-y-[2.5rem]'>
          <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]'  ref={aboutSection}> 
              <Image src='/person.svg' alt='home image' height={30} width={18} className='w-auto h-auto'/>
              <p className='max-lg:text-[14px]'>About</p>
            </div>

            <p className={`text-white text-[50px] leading-tight max-lg:text-[40px]`} ref={aboutText}>Let's embark on a journey of turning ideas into extraordinary<span className='text-green-400'> digital experiences</span></p>

             <p className='text-[#999999] w-[80%] leading-[2rem] text-[18px]' ref={aboutContent}>The dynamic nature of technology inspires me to stay updated with the latest trends and advancements in web development. I actively seek opportunities for learning and professional development, ensuring that my skills align with industry standards and best practices..</p>
  
        </div>
      </div>
      </div>
    </>
  )
}

export default About