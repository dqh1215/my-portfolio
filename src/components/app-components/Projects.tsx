import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "../ui/item";
import { Button } from "../ui/button";
import { Github, Globe } from "lucide-react";

const list = [
  {
    name: "Portfolio",
    description: "My Portfolio",
    image: "placeholder.svg",
    credit: "",
    githubLink: "",
    websiteLink: "",
  },
  {
    name: "My Blog",
    description: "My Personal Blog website",
    image: "placeholder.svg",
    credit: "",
    githubLink: "",
    websiteLink: "",
  },
  {
    name: "LOL Dash",
    description: "An interactive game using C++ and SDL3",
    image: "placeholder.svg",
    credit: "",
    githubLink: "",
    websiteLink: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="mx-auto flex w-full flex-col gap-10">
        <div className="flex justify-center">
          <Badge variant="secondary" className="">
            Projects
          </Badge>
        </div>
        <div className="flex justify-center text-4xl font-bold tracking-tight">
          This is my projects
        </div>
        <div className="flex justify-center">
          <div className="flex w-full max-w-5xl flex-col gap-6">
            <ItemGroup className="grid grid-cols-3 gap-4">
              {list.map((list) => (
                <Item key={list.name} variant="outline">
                  <ItemHeader>
                    <img
                      src={list.image}
                      alt={list.name}
                      width={128}
                      height={128}
                      className="aspect-square w-full rounded-sm object-cover bg-accent"
                    />
                  </ItemHeader>
                  <ItemContent className="gap-3">
                    <ItemTitle className="font-bold">{list.name}</ItemTitle>
                    <ItemDescription>{list.description}</ItemDescription>
                    <div className="flex justify-center gap-3">
                      <Link target="_blank" to={list.githubLink}>
                        <Button variant="outline">
                          <Github />
                          Visit Github
                        </Button>
                      </Link>
                      <Link target="_blank" to={list.websiteLink}>
                        <Button variant="outline">
                          <Globe />
                          Website
                        </Button>
                      </Link>
                    </div>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </div>
        </div>
      </div>
    </section>
  );
};
