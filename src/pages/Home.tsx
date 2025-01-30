import React from "react";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar"
import SidebarComponent from "@/components/app/SidebarComponent";
import Header from "@/components/app/Header";
import { useResize } from "@/components/app/hook/useResize";
import { flushSync } from "react-dom";
import Toolbar from "@/components/app/Toolbar";
import Empty from "@/components/app/Empty";
import FeedbackItem from "@/components/app/FeedbackItem";

export default function Home(): React.JSX.Element {
    const { header, sidebarWrap, sidebarContent, resizingSidebar, toolbar, list } = useResize()
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
            <main className="overflow-hidden">
                <Header ref={header} onToggle={handleToggle} />
                <SidebarComponent sidebarWrap={sidebarWrap} sidebarContent={sidebarContent} />
                <Toolbar ref={toolbar} />
                <div ref={list} className="bg-[var(--soft-blue)] w-full flex flex-col gap-4 h-screen px-6 py-8 overflow-y-scroll">
                    {/* <Empty /> */}
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem />
                </div>
            </main>
        </SidebarInset>
    </>

}