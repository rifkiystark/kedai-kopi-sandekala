import { useState, useEffect } from 'react'
import { Header } from './components/header'
import { About } from './components/about'
import { Gallery } from './components/gallery'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Gallery />
    </div>
  )
}

export default App
