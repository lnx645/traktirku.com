import EditProfileController from '@/actions/App/Http/Controllers/Creator/Manage/EditProfileController';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { IconEditCircle } from '@tabler/icons-react';
import { Landmark, Wallet } from 'lucide-react';

export default function MainMenuNav() {
    return (
        <>
            <SidebarGroup>
                <SidebarGroupContent className="flex flex-col gap-2">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton >
                                <IconEditCircle />
                                <span>Edit Profile</span>
                            </SidebarMenuButton>
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
