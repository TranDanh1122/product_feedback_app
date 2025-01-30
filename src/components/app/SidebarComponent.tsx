import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

const SidebarComponent = (): React.JSX.Element => {
    return <>
        <div className="h-fit w-full ">
            1243
        </div>
        <Sidebar side="right" variant="sidebar" collapsible="offcanvas" className=' h-full w-full bg-transparent '>

            <SidebarContent >11123</SidebarContent>
        </Sidebar>
    </>
}
SidebarComponent.displayName = "Sidebar"
export default SidebarComponent