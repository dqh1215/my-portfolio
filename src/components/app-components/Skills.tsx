import { HashLink } from "react-router-hash-link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CircleArrowDown } from "lucide-react";

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center">
      <div className="mx-auto flex w-full h-100">
        <div className="flex-1 ml-70">
          <img
            className="relative rounded-2xl h-full bg-accent overflow-hidden"
            src="placeholder.svg"
          />
        </div>
        <div className="w-1/2 flex-1 md:text-left space-y-10 mr-70">
          <Badge variant="secondary" className="">
            Skills
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            Passionate about creating impactful web experiences
          </h1>
          <p className="text-muted-foreground text-justify">
            With over 5 years of experience in full-stack development, I
            specialize in building scalable web applications using modern
            technologies. My expertise includes React, Node.js, and cloud
            architecture. I&apos;m passionate about creating elegant solutions
            to complex problems and sharing knowledge with the developer
            community.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full flex-wrap gap-4">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Typescript</Badge>
              <Badge variant="secondary">Node</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Spring Boot</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-4">
              <Badge>Competitive Programming</Badge>
              <Badge>OOP</Badge>
              <Badge>Java</Badge>
              <Badge>C++</Badge>
            </div>
          </div>
          <div className="flex justify-center">
            <HashLink to="#projects" smooth>
              <Button>
                <CircleArrowDown />
                <div>See my Work</div>
              </Button>
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};
