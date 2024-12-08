import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownPreview from "./Markdown";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon, MonitorCog } from "lucide-react";

const icons = [
  { theme: "light", icon: Sun },
  { theme: "dark", icon: Moon },
  { theme: "System", icon: MonitorCog },
];

function Profile() {
  const [theme, setTheme] = useState("system");

  function changeTheme(newTheme: string) {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    }
  }

  function applyTheme(theme: string) {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    root.classList.toggle(
      "dark",
      theme === "dark" ||
        (theme !== "light" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "system";
      setTheme(savedTheme);
      applyTheme(savedTheme);

      const handleStorageChange = () => {
        const storedTheme = localStorage.getItem("theme") || "system";
        setTheme(storedTheme);
        applyTheme(storedTheme);
      };

      window.addEventListener("storage", handleStorageChange);
      return () => window.removeEventListener("storage", handleStorageChange);
    }
  }, [theme]);

  return (
    <Card className="w-[350px] h-[350px] mx-auto overflow-hidden rounded-lg drop-shadow-xl dark:bg-zinc-900 dark:bg-opacity-50 border-none mt-12">
      <CardContent className="flex flex-col items-center p-6 space-y-6">
        <div className="relative">
          <Avatar className="w-24 h-24 border-4 border-gray-300 dark:border-gray-500">
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            <AvatarFallback className="text-gray-600 bg-gray-300 dark:bg-gray-800 dark:text-gray-300">
              Avatar
            </AvatarFallback>
          </Avatar>
        </div>

        <Dialog>
          <DialogTrigger className="text-lg font-semibold text-gray-900 transition-colors dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            @caiogesserc
          </DialogTrigger>
          <DialogContent className="dark:bg-zinc-700 dark:bg-opacity-50 border-none max-w-4xl p-6 bg-white text-gray-900 dark:text-gray-100 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <MarkdownPreview />
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="p-2 text-gray-800 rounded-lg cursor-pointer dark:hover:bg-zinc-700 dark:hover:bg-opacity-50 dark:text-gray-100 hover:bg-gray-100"
            >
              Tema
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none dark:bg-zinc-800 dark:bg-opacity-50">
            <DropdownMenuLabel>Aparência</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              {icons.map((content) => (
                <DropdownMenuRadioItem
                  key={content.theme}
                  onClick={() => changeTheme(content.theme)}
                  value={content.theme}
                  className="flex items-center p-2 space-x-2 text-gray-900 rounded-lg cursor-pointer dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-20"
                >
                  <content.icon className="w-5 h-5 mr-2" />
                  <span>{content.theme}</span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
}

export default Profile;
