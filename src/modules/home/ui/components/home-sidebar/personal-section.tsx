'use client'
import { usePathname } from "next/navigation"
import {  HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react"
import { useClerk, useAuth } from "@clerk/nextjs";

import { SidebarGroup, 
         SidebarGroupContent, 
         SidebarGroupLabel, 
         SidebarMenu,
         SidebarMenuButton,
         SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
const items = [
    {
        title: "History",
        url: "/playlists/history",
        icon: HistoryIcon,
        auth: true

    }, 
    {
        title: "Liked videos",
        url: "/playlists/liked",
        icon: ThumbsUpIcon,
        auth: true
    },
    {
        title: 'All playlists',
        url: '/feed/trending',
        icon: ListVideoIcon,
        auth: true
    }
];


export const PersonalSection = () => {
     const clerk = useClerk();
    const { isSignedIn } = useAuth();
    const  pathname  = usePathname();

    function handleShowPersonalSection(e: React.MouseEvent<HTMLButtonElement>, item: typeof items[number]) {
        if (!item.auth) return; 

  if (!isSignedIn) {
    e.preventDefault();
    return clerk.openSignIn();
  }
    }
    return (
            <SidebarGroup>
                <SidebarGroupLabel>You</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                   tooltip={item.title} 
                                    isActive={pathname === item.url} // chnage to true and view contnet
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


