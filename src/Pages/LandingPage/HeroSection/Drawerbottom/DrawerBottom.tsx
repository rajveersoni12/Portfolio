import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Calendar, Github, Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

const DrawerBottom = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>{trigger}</DrawerTrigger>
        <DrawerContent className="bg-zinc-900 border-zinc-800 max-w-lg z-[10000]">
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader className="text-center">
              <DrawerTitle className="text-white text-2xl">
                Get in touch
              </DrawerTitle>
              <DrawerDescription className="text-zinc-400">
                Fill out the form or use one of the direct options below
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex justify-center space-x-4 my-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-400"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-400"
              >
                <Github size={24} />
              </a>
            </div>

            <div className="flex justify-between items-center px-6 py-3 mb-4 w-full gap-2">
              <a
                href="mailto:anshultatware01@gmail.com"
                className="flex items-center gap-2 text-white hover:text-zinc-400 bg-zinc-800 px-4 py-2 rounded-md w-full"
              >
                <Mail size={18} />
                <span>Raj.veersoni037@gmail.com</span>
              </a>
              <a
                href="#booking"
                className="flex items-center gap-2 text-white hover:text-zinc-400 bg-zinc-800 px-4 py-2 rounded-md w-full"
              >
                <Calendar size={18} />
                <span>Book a Call</span>
              </a>
            </div>

            <div className="p-6">
              <p className="text-zinc-400 mb-4">Or send a message</p>
              <form className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                <Textarea
                  placeholder="Your message"
                  className="bg-zinc-800 border-zinc-700 text-white min-h-[120px]"
                />
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 mt-4 -yarnmb-4">
                  Submit
                </Button>
              </form>
            </div>

            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerBottom;
