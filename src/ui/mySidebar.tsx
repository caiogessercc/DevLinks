import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  Bookmark,
  BookOpen,
  Users,
  Github,
  Linkedin,
  Rocket,
  PanelTop,
  Youtube,
} from "lucide-react";

const sidebarContentRoutes = [
  {
    title: "Portfólio",
    route: "/",
    icon: Home,
  },
  {
    title: "Social",
    icon: Bookmark,
    content: [
      {
        title: "Github",
        route: "https://github.com/caiogessercc",
        icon: Github,
      },
      {
        title: "Linkedin",
        route: "https://www.linkedin.com/in/caiogesserc/",
        icon: Linkedin,
      },
      {
        title: "Rocketseat",
        route: "https://app.rocketseat.com.br/me/caiogesserc",
        icon: Rocket,
      },
    ],
  },
  {
    title: "Rocketseat",
    icon: BookOpen,
    content: [
      {
        title: "Site",
        route: "https://app.rocketseat.com.br/",
        icon: PanelTop,
      },
      {
        title: "Forums",
        route: "https://app.rocketseat.com.br/forums",
        icon: Users,
      },
      {
        title: "Youtube",
        route: "https://www.youtube.com/@rocketseat",
        icon: Youtube,
      },
    ],
  },
];

function AppSidebar() {
  return (
    <Sidebar className="border-none shadow-md">
      <SidebarContent className="text-gray-900 dark:text-gray-100">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Dev Links
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {sidebarContentRoutes.map((sidebarContent) => (
                <SidebarMenuItem key={sidebarContent.title}>
                  <div className="flex items-center px-4 py-2 space-x-3 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 dark:hover:bg-opacity-50">
                    <sidebarContent.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 " />
                    <span className="font-medium cursor-pointer">{sidebarContent.title}</span>
                  </div>
                  {sidebarContent.content && (
                    <div className="pl-8">
                      {sidebarContent.content.map((content) => (
                        <a
                          key={content.route}
                          href={content.route}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 space-x-2 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 dark:hover:bg-opacity-50"
                        >
                          <content.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                          <span>{content.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
