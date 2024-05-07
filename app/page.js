import Image from 'next/image'
import { Header, Hero, AboutUS, TryNow, Program, PersonalProgram, Menu, Ccalculator, Comments, Questions, Foooter } from '@/components'


export default function Home() {
  return (
      <main>
        <Header /> 
        <Hero />
        <AboutUS />
        <TryNow />
        <Program />
        <PersonalProgram />
        <Menu />
        <Ccalculator />
        <Comments />
        <Questions />
        <Foooter />
      </main>
  )
}
