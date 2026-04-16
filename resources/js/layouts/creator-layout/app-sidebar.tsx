import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import MainMenuNav from './main-menu-nav';
import { Separator } from '@/components/ui/separator';
import IntegrationMenuNav from './integrations-menu-nav';
import SuporterMenu from './supporter-menu';
import { NavUser } from './user-menu';

export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex h-11.5 justify-center border-b border-sidebar-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <a href="#">
                                <span className="text-base font-semibold">
                                    Traktirku.com
                                </span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="py-3">
                <MainMenuNav />
                <IntegrationMenuNav/>
                <SuporterMenu/>

            </SidebarContent>
            <SidebarFooter>
                <NavUser user={{
                    name:"DADA",
                    email : "dadan@gmail.com",
                    avatar : ""
                }}/>
            </SidebarFooter>
        </Sidebar>
    );
}
