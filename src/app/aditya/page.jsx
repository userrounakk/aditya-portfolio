'use client'

import React, { use, useEffect, useReducer } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Home = () => {

  const media = ['/insta.svg', '/git.svg', '/linkedin.svg']
  const element = ['/home1.svg', '/person.svg', '/work.svg', '/service.svg', '/interest.svg', '/port.svg', '/chat.svg', '/mail1.svg']


  const special = [{title: 'Web Development', content: 'Kuch toh likhna hain isme', project: '10 Projects', icon: '/development.png'}, {title: 'Data Structure and Algorithm', content: 'Phirse kuch toh likhna hi hain', project: 'Arre tu jaare', icon: '/DSA.png'}, {title: 'Devops', content: 'Bhai iska toh mereko kuch idea ich hi nahi hain ', project: 'Idea ni hain toh project kaha se bea', icon: '/devops.png' }]
  
  const skills = []

  const imageRef = useRef(null);

  const imageProject = useRef(null);

  const aboutText = useRef(null);

  const aboutSection = useRef(null);
  const aboutContent = useRef(null);
  const resumeIcon = useRef(null)
  const resumeTitle = useRef(null)
  const present = useRef(null)
  const second = useRef(null)
  const reactRef = useRef(null)
  const dockerRef = useRef(null)
  const nodeRef = useRef(null)
  const kuberenetesRef = useRef(null)
  // const containerRef = useRef(null)

  const containerRef = Array(special.length).fill(0).map(() => useRef(null))

  
  // const containerFixed = useRef(null);

  gsap.registerPlugin(ScrollTrigger)

  useEffect (() => { 
    const t1 = gsap.to(imageRef.current, {rotate: 360, repeat: -1, ease: 'power1.inOut'})
    const t2 = gsap.to(imageProject.current, {rotate: 360, duration: 4, repeat: -1, yoyo: true})


    
      const animateContainer = (container, number) => {gsap.set(container, {opacity: 0, y: 200})
      const t3 = gsap.to(container,  { y: 0, opacity: 1, duration: 2, delay: {number}, scrollTrigger: {
        trigger: container, 
        start: 'top-=120 bottom', 
        end: 'top-=120 bottom',
        toggleActions: 'play none none reset'
      }})}

      animateContainer(aboutSection.current, 1)
      animateContainer(aboutText.current, 2)
      animateContainer(aboutContent.current, 3)
      animateContainer(resumeIcon.current, 1)
      animateContainer(resumeTitle.current, 2)


      
        const animateSkill = (container) => {
          gsap.set(container, {opacity: 0, y: 200})
          const t5 = gsap.to(container, {y: 0, opacity: 1, duaration: 2, scrollTrigger: {
            trigger: container, 
            start: 'top-=120 bottom', 
            end: 'top-=120 bottom', 
            markers: true, 
            toggleActions: 'play none none reset'
  
          }})
        }

        // {containerRef.map((data) => (
        //   animateSkill(data)
        // ))}

        containerRef.forEach((ref) => {
          animateSkill(ref.current)
        }
        )

        gsap.set(reactRef.current, {opacity: 0, x: -400})
         gsap.to(reactRef.current, {opacity: 1, x: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          // markers: true, 
          toggleActions: 'play none none reset'
        }}) 

        gsap.set(dockerRef.current, {opacity: 0, y: -400})
        gsap.to(dockerRef.current, {opacity: 1, y: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          // markers: true, 
          toggleActions: 'play none none reset'
        }})

        gsap.set(nodeRef.current, {opacity: 0, y: 400})
        gsap.to(nodeRef.current, {opacity: 1, y: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          // markers: true, 
          toggleActions: 'play none none reset'
        }})

        gsap.set(kuberenetesRef.current, {opacity: 0, x: 400})
        gsap.to(kuberenetesRef.current, {opacity: 1, x: 0, duration: 2, scrollTrigger: {
          trigger: reactRef.current, 
          start: 'top-=120 bottom', 
          end: 'top-=120 bottom', 
          markers: true, 
          toggleActions: 'play none none reset'
        }})
      
      
       
      


      // animateContainer(aboutSection.current)


      // gsap.set(aboutText.current, {opacity: 0, y: 140})
      // const t4 = gsap.to(aboutText.current,  { y: 0, opacity: 1, duration: 2, scrollTrigger: {
      //   trigger: aboutText.current, 
      //   start: 'top-=120 bottom', 
      //   end: 'top-=120 bottom',
      //   markers: true, 
      //   // scrub: 2, 
      //   toggleActions: 'play play restart none'
      // }})

      
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


      {/* About Section  */}
      <div className='xl:w-[80%] h-[35rem] mx-auto relative max-xl:w-[60%] max-xl:mt-[3rem]'>  
      <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]' >
        <div className='flex flex-col space-y-[2.5rem]'>
            <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]'  ref={aboutSection}> 
              <Image src='/person.svg' alt='home image' height={30} width={18}/>
              <p>About</p>
            </div>

            <p className={`text-white text-[50px] leading-tight`} ref={aboutText}>Every great design begin with
an even  <span className='text-green-400'>better story</span></p>

<p className='text-[#999999] w-[80%] leading-[2rem]' ref={aboutContent}>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
  
        </div>
      </div>
      </div>

      {/* Resume Section */}

      <div className='xl:w-[80%] h-[60rem] mx-auto relative max-xl:w-[60%] max-xl:mt-[3rem]'>
        <div className='h-[100%] xl:w-[70%] xl:ml-[21.7rem] max-xl:w-[100%]'>
        <div className='flex flex-col'>
            <div className='flex text-white border border-[#666666] rounded-3xl w-[20%] items-center justify-center gap-x-[0.5rem] py-[0.4rem]' ref={resumeIcon}> 
              <Image src='/work.svg' alt='home image' height={30} width={18}/>
              <p>Resume</p>
            </div>

            <p className={`text-white text-[50px] leading-tight mt-[2.5rem]`} ref={resumeTitle}>Education &  
<span className='text-green-400'> Experience</span></p>

              <div className='flex justify-between w-[50%] mt-[2.5rem]'>
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

              <div className='flex justify-between w-[50%]'>
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


      {/* Service Section */}

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


      {/* Skills Section:  */}

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


    </div>
    </>
  )
}

export default Home