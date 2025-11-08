import { Download, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="mx-auto flex w-full h-100">
        <div className="w-1/2 flex-1 md:text-left space-y-10 ml-70">
          <Badge variant="secondary" className="">
            About Me
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
          <div className="flex gap-5">
            <Link target="_blank" to="https://github.com/dqh1215">
              <Button className="rounded-full">
                <Github />
                View Github
              </Button>
            </Link>
            <Link to="">
              <Button variant="outline" className="rounded-full">
                <Download />
                Download CV
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 ml-50">
          <img
            className="relative rounded-2xl h-full bg-accent overflow-hidden"
            src="placeholder.svg"
          />
        </div>
      </div>
    </section>
  );
};
