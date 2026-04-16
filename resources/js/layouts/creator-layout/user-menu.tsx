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
                <SidebarMenuSubButton>
                    <CogIcon />
                    <span>Penngaturan</span>
                </SidebarMenuSubButton>
                <SidebarMenuSubButton>
                    <HelpCircle />
                    <span>Dapatkan Bantuan</span>
                </SidebarMenuSubButton>
                <SidebarMenuSubButton>
                    <UsersIcon />
                    <span>Feeds</span>
                </SidebarMenuSubButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </>
    );
}
