import React from "react";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar"
import SidebarComponent from "@/components/app/SidebarComponent";
import Header from "@/components/app/Header";
import { useResize } from "@/components/app/hook/useResize";
import { flushSync } from "react-dom";

export default function Home(): React.JSX.Element {
    const { header, sidebarWrap, sidebarContent, resizingSidebar } = useResize()
    const { toggleSidebar, openMobile } = useSidebar()
    const handleToggle = () => {
        flushSync(() => {
            toggleSidebar()
        })
       if(!openMobile)  
        resizingSidebar()

    }
    return <>
        <SidebarInset >
            <main >
                <Header ref={header} onToggle={handleToggle} />
                <SidebarComponent sidebarWrap={sidebarWrap} sidebarContent={sidebarContent} />

            </main>
        </SidebarInset>
    </>

}