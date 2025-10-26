import { HashLink } from "react-router-hash-link";
import { Separator } from "../ui/separator";
import { Github, InstagramIcon, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const footerLinks = [
  {
    title: "Home",
    href: "#hero",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];
export const Footer = () => {
  return (
    <footer className="mt-20 min-w-full">
        <Separator />
        <div className="h-40 flex items-center">
          {/* Copyright */}
          <div className="flex items-center justify-between w-2/5 px-8">
            <div className="space-y-6">
                <h1 className="font-extrabold text-2xl">
                My Portfolio
                </h1>
              <h1 className="text-muted-foreground text-justify tracking-tight">
                I&apos;m Tạ Minh Trang. Thank you for checking out my site!
              </h1>
              <span className="text-muted-foreground">
                &copy; {new Date().getFullYear()} Tạ Minh Trang. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link to="https://github.com/dqh1215" target="_blank">
                <Github />
              </Link>
              <Link to="https://www.instagram.com/tranngminnh/" target="_blank">
                <InstagramIcon />
              </Link>
              <Link
                to="https://www.linkedin.com/in/quang-huy-dinh-29a618371/"
                target="_blank"
              >
                <Linkedin />
              </Link>
              <Link to="mailto:dinhquanghuy1506@gmail.com">
                <Mail />
              </Link>
            </div>
            
          </div>
          <Separator orientation="vertical" />

          <div className="items-center px-8 justify-center flex-1 space-y-2">
            <h1 className="text-center">General</h1>
            <ul className="flex items-center space-x-10 flex-wrap justify-center">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <HashLink
                    smooth
                    to={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </footer>
  );
};
