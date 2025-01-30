import React from "react";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar"
import SidebarComponent from "@/components/app/SidebarComponent";
import Header from "@/components/app/Header";
import { useResize } from "@/components/app/hook/useResize";
import { flushSync } from "react-dom";
import Toolbar from "@/components/app/Toolbar";

export default function Home(): React.JSX.Element {
    const { header, sidebarWrap, sidebarContent, resizingSidebar } = useResize()
    const { toggleSidebar, openMobile } = useSidebar()
    const handleToggle = () => {
        flushSync(() => {
            toggleSidebar()
        })
        if (!openMobile)
            resizingSidebar()
    }
    return <>
        <SidebarInset >
            <main >
                <Header ref={header} onToggle={handleToggle} />
                <SidebarComponent sidebarWrap={sidebarWrap} sidebarContent={sidebarContent} />
                <Toolbar />
                <div className="bg-[var(--soft-blue)] w-full h-full">


                </div>
            </main>
        </SidebarInset>
    </>

}