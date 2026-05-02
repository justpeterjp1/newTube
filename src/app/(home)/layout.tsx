import { HomeLayout } from '@/modules/home/ui/layouts/home-layout'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
};
export default function HomeLayoutWrapper({ children }: LayoutProps) {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}