import React from "react";
export const useResize = () => {
    const header = React.useRef<HTMLDivElement>(null)
    const sidebarWrap = React.useRef<HTMLDivElement>(null);
    const sidebarContent = React.useRef<HTMLDivElement>(null);
    const resizingSidebar = () => {
        if (header.current && sidebarContent.current && sidebarContent.current) {
            const headerHeight = header.current.getBoundingClientRect().height
            const dialog = sidebarContent.current.closest("[role='dialog']");
            if (dialog && dialog instanceof HTMLElement) {
                dialog.style.width = "100%"
                dialog.style.marginTop = `${headerHeight}px`
                if (dialog.previousSibling && dialog.previousSibling instanceof HTMLElement)
                    dialog.previousSibling.style.marginTop = `${headerHeight}px`
            }
        }
    }
    React.useEffect(() => {
        window.addEventListener("resize", resizingSidebar)
        return () => window.removeEventListener("resize", resizingSidebar)
    }, [])
    return { header, sidebarContent, sidebarWrap, resizingSidebar }
}