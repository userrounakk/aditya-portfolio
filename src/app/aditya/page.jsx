'use client'

import React, { useEffect } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import styles from '@/app/aditya/page.module.css'


const Home = () => {

  const media = ['/insta.svg', '/git.svg', '/linkedin.svg']

  const imageRef = useRef(null);

  useEffect (() => { 
    const t1 = gsap.to(imageRef.current, {rotate: 360, repeat: -1, ease: 'power1.inOut'})

    return () => {
      t1.kill()
    }
  }, [])

  return (
    <div className='pt-[5rem]'>
      <div className='w-[80%] h-[60rem] mx-auto  relative'>
        <div className='border border-[#666666] -top-[1rem] -left-[7rem] absolute h-[40rem] w-[20rem] rounded-3xl flex flex-col space-y-[1.5rem] items-center'>
          <div className='flex justify-between mt-[2rem] w-[80%] mx-auto h-[3rem] items-center'>
              <p className='font-bold text-[2.3rem] text-white '>Aditya</p>
              <p className='w-[45%] leading-tight text-end text-white text-[13px]'>Full Stack Web Developer</p>
          </div>
          <Image src="/aditya.png" alt='profile picture' width={260} height={10} className='rounded-3xl'/>
          <div>
            <p className='text-white text-[23px]'>Based in Janakpur, Nepal</p>
          </div>
          <p className='text-zinc-500 text-[14px] text-center'>©️ 2024 Aditya. All Rights Reserved</p>

          <ul className='flex justify-between w-[70%]'>
            {media.map((icon) => (
              <li><Image src={icon} alt='media icon' height={30} width={30}/></li>
            )
            )}
          </ul>

          <button className='button bg-green-400 px-[4rem] py-[0.8rem] flex space-x-[1rem] rounded-3xl'>
            <Image src='/mail.svg' alt='a mail icon' height={20} width={25}/>
            <p>CONTACT ME!</p>
          </button>
        </div>
        <Image ref={imageRef} src="gear.svg" alt="a gear icon" width={25} height={25} className={`absolute -top-[1rem] -left-[7.5rem] bg-[#1f1f1f] w-[2rem]`}/>
      </div>
    </div>
  )
}

export default Home