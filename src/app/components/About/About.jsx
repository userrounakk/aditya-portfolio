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

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
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
              <Image src='/person.svg' alt='home image' height={30} width={18}/>
              <p>About</p>
            </div>

            <p className={`text-white text-[50px] leading-tight`} ref={aboutText}>Every great design begin with
an even     <span className='text-green-400'>better story</span></p>

             <p className='text-[#999999] w-[80%] leading-[2rem]' ref={aboutContent}>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
  
        </div>
      </div>
      </div>
    </>
  )
}

export default About