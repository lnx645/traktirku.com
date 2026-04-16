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
import { Group,  HandHeart,  HeartHandshake,  Landmark,  Users,  Users2,  Wallet } from 'lucide-react';

export default function SuporterMenu() {
    return (
        <>
            <SidebarGroup>
                <SidebarGroupContent className="flex flex-col gap-2">

                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <HandHeart />
                                <span>My Supporter</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Users />
                                <span>My Followers</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </>
    );
}
