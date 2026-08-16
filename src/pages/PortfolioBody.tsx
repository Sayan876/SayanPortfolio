import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import ResumeCTA from '@/components/ResumeCTA'

import Skills from '@/components/Skills'


const PortfolioBody = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
      <ResumeCTA/>
      <Footer/>
    </div>
  )
}

export default PortfolioBody