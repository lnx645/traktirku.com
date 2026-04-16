import { SidebarTrigger } from "@/components/ui/sidebar";

export default function NavHeader() {
    return (
        <div className="h-11.5 w-full border-b border-sidebar-border bg-sidebar text-sidebar-foreground">
            <div className="container mx-auto flex h-11.5 items-center px-2">
                <SidebarTrigger />
            </div>
        </div>
    );
}
