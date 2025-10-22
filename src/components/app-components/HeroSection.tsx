import { NavigationMenuDemo} from "./NavigationBar"
import { ThemeProvider } from "../ui/theme-provider"
import Home from "./Home"
function HeroSection() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="p-8">
        <NavigationMenuDemo/>

        <Home />
      </div>
    </ThemeProvider>
    
  )
}

export default HeroSection