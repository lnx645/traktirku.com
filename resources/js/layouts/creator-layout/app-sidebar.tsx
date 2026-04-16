import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { ChatIcon } from '@/icons/ChatIcon';
import { GoogleIcon } from '@/icons/GoogleIcon';
import { NotifIcon } from '@/icons/NotifIcon';
import { UserIcon } from '@hugeicons/core-free-icons';

export default function AppSidebar() {
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader>
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
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className='flex flex-col gap-2'>
                        <SidebarMenu>
                            <SidebarMenuItem className='flex items-center gap-4'>
                                <SidebarMenuButton className='bg-primary text-primary-foreground  hover:bg-primary/90 active:bg-primary/90 active:text-primary-foreground hover:text-primary-foreground'>
                                    <NotifIcon/>
                                    <span>Edit Profile</span>
                                </SidebarMenuButton>
                                <Button variant={"outline"} size={"icon"}>
                                    <ChatIcon/>
                                </Button>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
