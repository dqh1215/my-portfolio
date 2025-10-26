import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <Avatar className="size-90 mr-15">
            <AvatarImage src="/public/avatar.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-9 ml-15">
          <h1 className="text-6xl font-bold text-center tracking-tight">
            Hi, I&apos;m Tạ Minh Trang
          </h1>
          <p className="text-justify tracking-tight text-muted-foreground max-w-xl mx-auto">
            A passionate Full-Stack Developer specializing in building
            exceptional digital experiences. Skilled in both front-end and
            back-end technologies, I create seamless and efficient web
            applications. 
          </p>
          <div className="flex justify-center">
            <Button>View my Work</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
