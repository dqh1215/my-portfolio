import { CircleArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { HashLink } from "react-router-hash-link";
export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="min-h-screen flex items-center justify-evenly">
        <div>
          <Avatar className="size-120">
            <AvatarImage src="avatar.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-9 ml-15">
          <h1 className="text-7xl font-bold text-center tracking-tight">
            Hi, I&apos;m Tạ Minh Trang
          </h1>
          <p className="text-justify tracking-tight text-muted-foreground max-w-xl mx-auto text-2xl">
            A passionate Full-Stack Developer specializing in building
            exceptional digital experiences. Skilled in both front-end and
            back-end technologies, I create seamless and efficient web
            applications.
          </p>
          <div className="flex justify-center">
            <HashLink to="#about" smooth>
              <Button>
                <CircleArrowDown />
                See More
              </Button>
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};
