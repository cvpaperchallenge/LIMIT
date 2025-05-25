import { Link } from "react-router";
import { X } from "lucide-react";
import { SiGithub, SiSlack, SiYoutube } from "react-icons/si";

import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t bg-footer-background/70 py-6 md:py-10 px-6 flex-col justify-items-center">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Workshop Name */}
        <div className="flex flex-col gap-2">
          <Link to="/iccv2025" className="flex items-center space-x-2">
            <span className="font-bold text-lg">ML Workshop</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Machine Learning Conference Workshop 2025
          </p>
        </div>

        {/* Organizers */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Organizers</h3>
          <Link
            to="https://limitlab.xyz/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            LIMIT Lab
          </Link>
          <Link
            to="https://iccv.thecvf.com/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ICCV 2025
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Connect</h3>
          <div className="flex gap-2">
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <X className="h-4 w-4" />
                <span className="sr-only">X</span>
              </a>
            </Button>
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <SiGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <SiYoutube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </a>
            </Button>
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <SiSlack className="h-4 w-4" />
                <span className="sr-only">Slack</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Links</h3>
          <Link
            to="/iccv2025"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/iccv2025/call-for-papers"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Call for Papers
          </Link>
          <Link
            to="/iccv2025/contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Credits */}
      <div className="container mt-8 border-t pt-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} ML Workshop. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Website built by cvpaper.challenge Dev Team
          </p>
        </div>
      </div>
    </footer>
  );
}
