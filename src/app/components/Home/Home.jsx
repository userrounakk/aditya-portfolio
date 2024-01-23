'use client'

import React from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})


const Home = () => {


  // const currentDate = new Date().toLocaleDateString();

  
  const imageRef = useRef(null)
  const imageProject = useRef(null)
  const media = ['/insta.svg', '/git.svg', '/linkedin.svg']
  const element = ['/home1.svg', '/person.svg', '/work.svg', '/service.svg', '/interest.svg', '/port.svg', '/chat.svg', '/mail1.svg']

  useEffect(() => {
    gsap.to(imageRef.current, {rotate: 360, repeat: -1, ease: 'power1.inOut'})
    gsap.to(imageProject.current, {rotate: 360, duration: 4, repeat: -1, yoyo: true})
  }, [])



  return (

    <div className={`pt-[5rem] h-screen w-screen ${inter.className}`}>
      <div className={`border border-[#666666] h-[40rem] w-[20rem] rounded-3xl flex flex-col space-y-[1.5rem] items-center relative xl:fixed xl:top-[4.3rem] xl:left-[2.2rem] z-[9999] max-xl:w-[75%] max-xl:mx-auto`}>
      <div className='border border-[#666666] py-[0.7rem] px-[0.7rem] rounded-full absolute max-xl:-right-[14%] max-xl:-top-[0.1rem] xl:hidden'>
        <Image src='/double.svg' alt='double line' height={30} width={30}/>
        </div>
          <Image ref={imageRef} src="gear.svg" alt="a gear icon" width={25} height={25} priority className={`fixed top-[2.4rem] left-[1.7rem] bg-[#1f1f1f]`}/>
          <div className='flex justify-between mt-[2rem] w-[80%] mx-auto h-[3rem] items-center'>
              <p className='font-bold text-[2.3rem] text-white '>Aditya</p>
              <p className='w-[45%] leading-tight text-end text-white text-[13px]'>Full Stack Web Developer</p>
          </div>
          <Image src="/aditya.png" alt='profile picture' width={260} height={10} className='rounded-3xl w-auto h-auto' priority/>
          <div>
            <p className='text-white text-[23px]'>Based in Janakpur, Nepal</p>
          </div>
          <p className='text-zinc-500 text-[14px] text-center'>&copy; 2024 Aditya. All Rights Reserved</p>

          <ul className='flex justify-between w-[70%]'>
            {media.map((icon, index) => (
              <li key={index}><Image src={icon} alt='media icon' height={30} width={30}/></li>
            )
            )}
          </ul>
          <button className='button bg-green-400 px-[4rem] py-[0.8rem] flex space-x-[1rem] rounded-3xl hover:bg-[#1f1f1f] hover:text-green-400 hover:border hover:border-green-400'>
            <Image src='/mail.svg' alt='a mail icon' height={20} width={25} className='hover:text-green-400 w-auto h-auto'/>
            <p>CONTACT ME!</p>
          </button>
        </div>



        <div>
          <ul className={`xl:fixed xl:top-[15rem] xl:right-[2.2rem] flex flex-col space-y-4 border-[0.08rem] border-[#666666] rounded-3xl px-[0.8rem] py-[1rem] max-xl:hidden`}>
            {element.map((list, index) => (
              <li key={index}><Image src={list} alt='link icon' height={22} width={22} style={{ fill: '#ffffff' }} /></li>
            ))}
          </ul>
        </div>


      <div className='xl:w-[80%] h-[60rem] mx-auto relative max-xl:w-[75%] max-xl:mt-[3rem]'>
        <div className='border border-[#666666] py-[0.7rem] px-[0.7rem] rounded-full absolute xl:-right-[7rem] max-xl:hidden'>
        <Image src='/double.svg' alt='double line' height={30} width={30}/>
        </div>


      
        <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem]'>
          <div className='flex flex-col space-y-[2.5rem]'>
            <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]'> 
              <Image src='/home.svg' alt='home image' height={30} width={18} className='w-auto h-auto'/>
              <p>Introduce</p>
          
            </div>

            <div>
              <p className={`text-white text-[76px] leading-tight max-lg:text-[55px]`}>I&apos;m<span className='text-green-400'> Aditya</span>,
              <br/>a Full Stack Developer</p>
            </div>

            <div>
              <p className='text-[#999999] w-[60%] text-[17px]'>

Welcome to my portfolio! I&apos;m passionate about creating innovative solutions that leave a lasting impression. As a Web Developer, I bring a unique blend of creativity and expertise to every project.

</p>
            </div>

            <div className='border border-[#666666] rounded-[70rem] h-[12rem] w-[12rem] mx-[70%] relative'>
                <Image src='/round-text.png' alt='rounded-text' height={40} width={160} className='absolute top-[0.7rem] left-[1rem]' ref={imageProject}/>
                <Image src='/down.svg' alt='down arrow' height={90} width={40} className='absolute top-[5rem] left-[4.6rem] w-auto h-auto'/>
            </div>  

            <div className='flex w-[40%] justify-between'>
              
              <div className="flex flex-col justify-between">
              <p className='text-green-400 text-[60px]'>1+</p>
              <p className='text-[#666666]'>YEARS OF EXPERIENCE</p>
              </div>
              <div className="flex flex-col justify-between">
              <p className='text-green-400 text-[60px]'>10+</p>
              <p className='text-[#666666]'>PROJECTS COMPLETED</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home