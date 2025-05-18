import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import About from "./sections/About"

const App = () => {
  return (
  <>
  <NavBar/>
  <Hero/>
  <About/>
  <ShowcaseSection/>
  {/* <LogoSection/> */}
  <FeatureCards/>
  <ExperienceSection/>
  <TechStack/>
  <Contact/>
  </>
)
}

export default App