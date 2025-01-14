import SideNav from "@/app/components/SideNav";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider>
            <main className="font-work-sans flex">
                <SideNav />
                <div className="flex flex-col">
                    <SidebarTrigger />
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}
