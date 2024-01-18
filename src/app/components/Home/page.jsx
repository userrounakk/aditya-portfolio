import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRef } from 'react'

const Home = () => {




  return (
    <div>
        <div className='h-screen w-screen bg-black z-[10000] flex justify-center items-center hidden'>
      <img src="/pre.gif" alt="" />
    </div>
    <div className='pt-[5rem] h-screen w-screen'>
      <div className={`border border-[#666666] h-[40rem] w-[20rem] rounded-3xl flex flex-col space-y-[1.5rem] items-center relative xl:fixed xl:top-[4.3rem] xl:left-[2.2rem] z-[9999] max-xl:w-[48rem] max-xl:mx-auto`}>
      <div className='border border-[#666666] py-[0.7rem] px-[0.7rem] rounded-full absolute max-xl:-right-[13rem] max-xl:-top-[0.1rem] xl:hidden'>
        <Image src='/double.svg' alt='double line' height={30} width={30}/>
        </div>
          <Image ref={imageRef} src="gear.svg" alt="a gear icon" width={25} height={25} className={`fixed top-[2.4rem] left-[1.7rem] bg-[#1f1f1f] w-[2rem]`}/>
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



        <div>
          <ul className={`xl:fixed xl:top-[15rem] xl:right-[2.2rem] flex flex-col space-y-4 border-[0.08rem] border-[#666666] rounded-3xl px-[0.8rem] py-[1rem] max-xl:hidden`}>
            {element.map((list) => (
              <li><Image src={list} alt='link icon' height={22} width={22} style={{fill: '#666666'}}/></li>
            ))}
          </ul>
        </div>


      <div className='xl:w-[80%] h-[60rem] mx-auto relative max-xl:w-[60%] max-xl:mt-[3rem]'>
        <div className='border border-[#666666] py-[0.7rem] px-[0.7rem] rounded-full absolute xl:-right-[7rem] max-xl:hidden'>
        <Image src='/double.svg' alt='double line' height={30} width={30}/>
        </div>


      
        <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]'>
          <div className='flex flex-col space-y-[2.5rem]'>
            <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]'> 
              <Image src='/home.svg' alt='home image' height={30} width={18}/>
              <p>Introduce</p>
          
            </div>

            <div>
              <p className={`text-white text-[78px] leading-tight`}>Say Hi from <span className='text-green-400'>Aditya</span>, Full Stack Developer</p>
            </div>

            <div>
              <p className='text-[#999999] w-[60%]'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            </div>

            <div className='border border-[#666666] rounded-[70rem] h-[12rem] w-[12rem] mx-[70%] relative'>
                <Image src='/round-text.png' alt='rounded-text' height={30} width={160} className='absolute top-[0.7rem] left-[1rem]' ref={imageProject}/>
                <Image src='/down.svg' alt='down arrow' height={90} width={40} className='absolute top-[5rem] left-[4.6rem]'/>
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
    </div>
  )
}

export default Home