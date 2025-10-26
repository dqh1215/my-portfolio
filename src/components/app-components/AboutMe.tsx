import { Download, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex-1 md:text-left space-y-6">
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
          <div className="flex flex-wrap gap-4 justify-start">
            <Link to="https://github.com/dqh1215">
                <Button className="rounded-full">
                    <Github />View Github
                </Button>    
            </Link>
            <Link to="">
              <Button variant="outline" className="rounded-full">
                <Download />Download CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
