import React, { RefObject } from "react";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar"
import iconClose from "../../assets/shared/mobile/icon-close.svg"
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg"
export const CustomTrigger = React.memo(({ onToggle }: { onToggle: () => void }): React.JSX.Element => {
    const { openMobile } = useSidebar()    
    return <>
        <button onClick={onToggle} className="text-white font-bold cursor-pointer"><i className="w-4 h-4  bg-white block"
            style={{
                mask: `url("${openMobile ? iconClose : iconHamburger}") center / cover no-repeat`,
                WebkitMask: `url("${openMobile ? iconClose : iconHamburger}") center / cover no-repeat`
            }}></i></button>
    </>
})
const SidebarComponent = React.memo(
    ({ sidebarWrap, sidebarContent }: {
        sidebarWrap: RefObject<HTMLDivElement>,
        sidebarContent: RefObject<HTMLDivElement>,
    }): React.JSX.Element => {
        return <>
            <Sidebar ref={sidebarWrap} side="right" variant="sidebar"
                style={{
                    width: "100%",
                } as React.CSSProperties}
                className=' h-full w-full bg-black/50' >
                <SidebarContent ref={sidebarContent} className="w-2/3 bg-[var(--soft-blue)] ml-auto" >11123</SidebarContent>
            </Sidebar>
        </>
    })
SidebarComponent.displayName = "Sidebar"
export default SidebarComponent