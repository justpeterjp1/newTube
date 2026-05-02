'use client'

import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
  
import { useClerk, useAuth } from "@clerk/nextjs";
import { SidebarGroup, 
         SidebarGroupContent, 
         SidebarMenu,
         SidebarMenuButton,
         SidebarMenuItem} from "@/components/ui/sidebar";
import Link from "next/link";
const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon
    }, 
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,
        auth: true
    },
    {
        title: 'Trending',
        url: '/feed/trending',
        icon: FlameIcon
    }
];


export const MainSection = () => {
    const clerk = useClerk();
    const { isSignedIn } = useAuth();

    function handleShowPersonalSection(e: React.MouseEvent<HTMLButtonElement>, item: typeof items[number]) {
        if (!item.auth) return; // no restriction → allow

  if (!isSignedIn) {
    e.preventDefault();
    return clerk.openSignIn();
  }
    }
    return (
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                   tooltip={item.title} 
                                    isActive={false} // chnage to true and view contnet
                                    onClick={(e) => handleShowPersonalSection(e, item)} // do something on clcik
                                    asChild>
                                        <Link href={item.url} className="flex items-center gap-4">
                                            <item.icon />
                                            <span className="text-sm">{item.title}</span>
                                        </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
    )
}


