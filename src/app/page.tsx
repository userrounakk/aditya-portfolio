import Main from '@/app/components/Home/Home'
import About from '@/app/components/About/About'
import Resume from '@/app/components/Resume/Resume'
import Service from '@/app/components/Service/Service'
import Skills from '@/app/components/Skills/Skills'
import Portfolio from '@/app/components/Portfolio/Portfolio'

export default function Home() {
  return (
    <main>
        <Main/>
        <About/>
        <Resume/>
        <Service/>
        <Skills/>
        <Portfolio/>
    </main>
  )
}
