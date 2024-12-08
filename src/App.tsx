import Profile from "./ui/profile";
import AppSidebar from "./ui/mySidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import RepositoriesList from "./ui/projects";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="flex flex-col items-center gap-8 p-4">
        <Profile />
        <RepositoriesList />
      </main>
    </SidebarProvider>
  );
}

export default App;
