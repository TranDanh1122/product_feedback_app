import React from "react";
export const useResize = () => {
    const header = React.useRef<HTMLDivElement>(null)
    const sidebarWrap = React.useRef<HTMLDivElement>(null);
    const sidebarContent = React.useRef<HTMLDivElement>(null);
    const toolbar = React.useRef<HTMLDivElement>(null);
    const list = React.useRef<HTMLDivElement>(null);
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
    const resizeList = () => {
        
        if (header.current && list.current && toolbar.current) {
            const headerHeight = header.current.getBoundingClientRect().height
            const toolbarHeight = toolbar.current.getBoundingClientRect().height
            const listHeight = list.current.getBoundingClientRect().height
            const totalHeight = headerHeight + toolbarHeight + listHeight            
            if (totalHeight > window.screen.availHeight) {
                list.current.classList.add("thin-scrollbar")
                list.current.classList.remove("hide-scrollbar")
            } else {
                list.current.classList.add("hide-scrollbar")
                list.current.classList.remove("thin-scrollbar")
            }
            list.current.style.maxHeight = `${window.screen.availHeight - (toolbarHeight + headerHeight)}px`
        }
    }
    React.useLayoutEffect(() => {
        if (list.current) list.current.style.maxHeight = "none"
    }, [])
    React.useEffect(() => {
        window.addEventListener("resize", resizingSidebar)
        return () => window.removeEventListener("resize", resizingSidebar)
    }, [])
    React.useEffect(() => {        
        resizeList()
    }, []) //truyền data đổ ra cái list vào
    return { header, sidebarContent, sidebarWrap, resizingSidebar, list, toolbar }
}