import NavigationMenuDemo from "./NavigationBar"
import { ThemeProvider } from "../ui/theme-provider"
import { HeroSection } from "./HeroSection"
import { AboutMe } from "./AboutMe"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import { Footer } from "./Footer"

export function Home() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="">
        <div className="sticky top-0 z-50">
          <NavigationMenuDemo />
        </div>

        <HeroSection />

        <AboutMe />

        <Skills />

        <Projects />

        <Footer />
        
      </div>
    </ThemeProvider>
    </>
    
  )
}

