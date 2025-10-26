import { Badge } from "../ui/badge";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex-1 md:text-left space-y-6">
          <Badge variant="secondary" className="">
            Skills
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            Skill Set Overview
          </h1>
          <p className="text-muted-foreground text-justify">
            Proficient in JavaScript, TypeScript, React, Node.js, and
            database management. Experienced with cloud services like AWS and
            Azure. Strong understanding of responsive design, RESTful APIs, and
            version control using Git.
          </p>
          
        </div>
      </div>
    </section>
  );
};
