import { Link } from '@inertiajs/react'; // Tambahkan ini
import {
    IconCreditCard,
    IconDotsVertical,
    IconLogout,
    IconNotification,
    IconUserCircle,
} from '@tabler/icons-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSubButton,
    useSidebar,
} from '@/components/ui/sidebar';
import { CogIcon, HelpCircle, UsersIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function NavUser({
    user,
}: {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
}) {
    const { isMobile } = useSidebar();

    return (
      <>
      <Separator/>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip='Pengaturan'>
                    <CogIcon />
                    <span>Pengaturan</span>
                </SidebarMenuButton>
                <SidebarMenuButton tooltip={"Bantuan"}>
                    <HelpCircle />
                    <span>Dapatkan Bantuan</span>
                </SidebarMenuButton>
                <SidebarMenuButton tooltip={"Feeds"}>
                    <UsersIcon />
                    <span>Feeds</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </>
    );
}
