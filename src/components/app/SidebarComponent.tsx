import React, { RefObject } from "react";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar"
import iconClose from "../../assets/shared/mobile/icon-close.svg"
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg"
import Category from "./Category";
import { NavLink } from "react-router"

export const CustomTrigger = React.memo(({ onToggle }: { onToggle: () => void }): React.JSX.Element => {
    console.log("trigger");
    
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
        console.log("side");
        
        return <>
            <Sidebar ref={sidebarWrap} side="right" variant="sidebar"
                style={{
                    width: "100%",
                } as React.CSSProperties}
                className=' h-full w-full bg-black/50' >
                <SidebarContent ref={sidebarContent} className="w-4/5 bg-[var(--soft-blue)] ml-auto p-6" >
                    <div className="bg-white p-6 flex flex-wrap gap-2 gap-y-3 rounded-xl">
                        <Category title="All" selected={true} />
                        <Category title="UI" selected={false} />
                        <Category title="UX" selected={false} />
                        <Category title="Enhancement" selected={false} />
                        <Category title="Bug" selected={false} />
                        <Category title="Feature" selected={false} />
                    </div>
                    <div className="bg-white p-6 rounded-xl mt-6">
                        <div className="flex justify-between items-center">
                            <span className="h3 font-bold text-[var(--dark-blue)]">Roadmap</span>
                            <NavLink to="/" className="underline font-semibold body-s text-[var(--primary-blue)]"> View</NavLink>
                        </div>
                        <div className="flex flex-col gap-2 mt-6">
                            <div className="flex justify-start items-center w-full body-l text-[var(--muted-blue)] gap-4">
                                <span className="w-2 h-2 rounded-full bg-[var(--soft-red)]"> </span>
                                <span>Planned</span>
                                <span className="ml-auto font-bold">2</span>
                            </div>
                            <div className="flex justify-start items-center w-full body-l text-[var(--muted-blue)] gap-4">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary-purple)]"> </span>
                                <span>In-Progress</span>
                                <span className="ml-auto font-bold">3</span>
                            </div>
                            <div className="flex justify-start items-center w-full body-l text-[var(--muted-blue)] gap-4">
                                <span className="w-2 h-2 rounded-full bg-[var(--soft-blue-accent)]"> </span>
                                <span>Live</span>
                                <span className="ml-auto font-bold">1</span>
                            </div>

                        </div>
                    </div>
                </SidebarContent>
            </Sidebar>
        </>
    })
SidebarComponent.displayName = "Sidebar"
export default SidebarComponent