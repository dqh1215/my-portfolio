import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  if (isDarkMode) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  return (
    <Button
      size="icon"
      className="rounded-full size-11"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
