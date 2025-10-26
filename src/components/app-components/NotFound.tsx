import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ThemeProvider } from "next-themes";

export const NotFound = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <Button>
          <Link to="/">Go back to Home</Link>
        </Button>
      </div>
    </ThemeProvider>
  );
};
