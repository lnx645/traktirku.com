import { Button } from '@/components/ui/button';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ChatIcon } from '@/icons/ChatIcon';
import { NotifIcon } from '@/icons/NotifIcon';
import { MenuGroupLabel } from '@base-ui/react';
import { Group,  Target,  TvMinimalPlay,  Unlink,  Wallet } from 'lucide-react';

export default function IntegrationMenuNav() {
    return (
        <>
            <SidebarGroup>
                <SidebarGroupLabel>Creator Menu</SidebarGroupLabel>
                <SidebarGroupContent className="flex flex-col gap-2">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Target />
                                <span>Goals</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <TvMinimalPlay />
                                <span>Stream Overlay</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Unlink />
                                <span>Saw Link</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </>
    );
}
