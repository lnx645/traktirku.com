import { Button } from '@/components/ui/button';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ChatIcon } from '@/icons/ChatIcon';
import { NotifIcon } from '@/icons/NotifIcon';
import { Group,  HeartHandshake,  Landmark,  Wallet } from 'lucide-react';

export default function MainMenuNav() {
    return (
        <>
            <SidebarGroup>
                <SidebarGroupContent className="flex flex-col gap-2">
                    <SidebarMenu>
                        <SidebarMenuItem className="flex items-center gap-4">
                            <SidebarMenuButton className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground">
                                <NotifIcon />
                                <span>Edit Profile</span>
                            </SidebarMenuButton>
                            <Button variant={'outline'} size={'icon'}>
                                <ChatIcon />
                            </Button>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Wallet />
                                <span>Saldo Saya</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Landmark />
                                <span>Komunitas</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </>
    );
}
